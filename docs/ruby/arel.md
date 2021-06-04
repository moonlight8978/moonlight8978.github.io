# Arel

> Last updated: 2020-12-16

## SQL

### Multiple counting metadata

Scenario

```ruby title=app/models/company.rb
class Company < ApplicationRecord
  has_many :users
end
```

```ruby title=app/models/user.rb
class User < ApplicationRecord
  extend Enumerize

  belongs_to :company

  has_many :medicals

  enumerize :gender, in: [:male, :female]
  enumerize :role, in: [:employee, :leader, :manager, :admin], default: :employee
end
```

```ruby title=app/models/medical.rb
class Medical < ApplicationRecord
  extend Enumerize

  belongs_to :user

  enumerize :hospitalization, in: [:hospitalized, :treating_at_home]
end
```

→ Customer want to show following information of each company in company list page:

- Total of male users, female users
- Average of all users' blood pressure, and total of hospitalized users (based on their last medical record)

PostgreSQL:

- `DISTINCT ON` makes life much easier

MySQL: Use joins to eagerload `has_one` association with scope

* `ON` operator determine which row of `medical` will be joined with `user`. Use conditional query here to get right record of `has_one` association

```sql
SELECT
  companies.*,
  company_male_users_counts.male_users_count AS male_users_count,
  company_female_users_counts.female_users_count AS female_users_count,
  company_avg_blood_pressures.avg_blood_pressure AS avg_blood_pressure,
  company_hospitalized_users_counts.hospitalized_users_count AS hospitalized_users_count
FROM companies
  INNER JOIN (
    SELECT users.company_id, COUNT(users.id) AS male_users_count
    FROM users
    WHERE users.gender = 'male'
    GROUP BY users.company_id
  ) company_male_users_counts ON companies.id = company_male_users_counts.company_id
  INNER JOIN (
    SELECT users.company_id, COUNT(users.id) AS female_users_count
    FROM users
    WHERE users.gender = 'female'
    GROUP BY users.company_id
  ) company_female_users_counts ON companies.id = company_female_users_counts.company_id
  INNER JOIN (
    SELECT users.company_id, AVG(medicals.blood_pressure) AS avg_blood_pressure
    FROM users
      INNER JOIN medicals ON medicals.id = (
        SELECT id FROM medicals
        WHERE medicals.user_id = users.id
        ORDER BY medicals.created_at DESC, medicals.id DESC
        LIMIT 1
      )
    GROUP BY users.company_id
  ) company_avg_blood_pressures ON companies.id = company_avg_blood_pressures.company_id
  INNER JOIN (
    SELECT users.company_id, COUNT(users.id) AS hospitalized_users_count
    FROM users
      INNER JOIN medicals ON medicals.id = (
        SELECT id
        FROM medicals
        WHERE medicals.user_id = users.id
        ORDER BY medicals.created_at DESC, medicals.id DESC
        LIMIT 1
      )
    WHERE medicals.hospitalization = 'hospitalized'
    GROUP BY users.company_id
  ) company_hospitalized_users_counts ON companies.id = company_hospitalized_users_counts.company_id;
```

Using Arel
```ruby title=app/models/company.rb
scope :with_counts, -> do
  users = User.arel_table
  medicals = Medical.arel_table

  company_male_users_counts = users
    .project(users[:company_id], users[:id].count.as('male_users_count'))
    .where(users[:gender].eq(User.gender.male))
    .group(users[:company_id])
    .as('company_male_users_counts')

  company_female_users_counts = users
    .project(users[:company_id], users[:id].count.as('female_users_count'))
    .where(users[:gender].eq(User.gender.female))
    .group(users[:company_id])
    .as('company_female_users_counts')

  users_with_latest_medical = -> do
    users
      .join(medicals)
      .on(
        medicals[:id].eq(
          medicals
            .project(:id)
            .where(medicals[:user_id].eq(users[:id]))
            .order(medicals[:created_at].desc, medicals[:id].desc)
            .take(1)
        )
      )
  end

  company_avg_blood_pressures = users_with_latest_medical.call
    .project(users[:company_id], medicals[:blood_pressure].average.as('avg_blood_pressure'))
    .group(users[:company_id])
    .as('company_avg_blood_pressures')

  company_hospitalized_users_counts = users_with_latest_medical.call
    .project(users[:company_id], users[:id].count.as('hospitalized_users_count'))
    .where(medicals[:hospitalization].eq(Medical.hospitalization.hospitalized))
    .group(users[:company_id])
    .as('company_hospitalized_users_counts')

  companies = arel_table
  joining = companies
    .join(company_male_users_counts)
      .on(companies[:id].eq(company_male_users_counts[:company_id]))
    .join(company_female_users_counts)
      .on(companies[:id].eq(company_female_users_counts[:company_id]))
    .join(company_avg_blood_pressures)
      .on(companies[:id].eq(company_avg_blood_pressures[:company_id]))
    .join(company_hospitalized_users_counts)
      .on(companies[:id].eq(company_hospitalized_users_counts[:company_id]))

  self
    .select(
      companies[Arel.star],
      company_male_users_counts[:male_users_count].as('male_users_count'),
      company_female_users_counts[:female_users_count].as('female_users_count'),
      company_avg_blood_pressures[:avg_blood_pressure].as('avg_blood_pressure'),
      company_hospitalized_users_counts[:hospitalized_users_count].as('hospitalized_users_count'),
    )
    .joins(joining.join_sources)
end
```

### Sort by different column based on other column's value

Scenario:

```ruby title=app/models/task.rb
class Task < ApplicationRecord
  enumerize :status, in: [:todo, :in_progress, :done], default: :todo
end

```

→ Customer want to see all tasks with sorted status by the following order: `todo` < `in_progress` < `done`

The key is using `CASE`/`WHEN`. If different sort direction required, multiple CASE/WHEN statements are needed

MySQL:

```sql
SELECT
  tasks.*,
  CASE tasks.status
  WHEN 'todo' THEN -1
  WHEN 'in_progress' THEN 0
  WHEN 'done' THEN 1 END AS status_int
FROM tasks
WHERE tasks.assignee_id = 1
ORDER BY
  status_int ASC,
  CASE tasks.status
  WHEN 'todo' THEN tasks.created_at
  WHEN 'in_progress' THEN tasks.started_at
  WHEN 'done' THEN tasks.finished_at
  END ASC,
  tasks.id ASC;
```

Using Arel

```ruby title=app/model/task.rb
scope :sort_view, -> do
  tasks = arel_table

  status_ordering_attr = "status_int"
  status_mapping = Arel::Nodes::Case.new(tasks[:status])
    .when(status.todo).then(-1)
    .when(status.in_progress).then(0)
    .when(status.done).then(1)
    .as(status_ordering_attr)

  time_ordering = Arel::Nodes::Case.new(tasks[:status])
    .when(status.todo).then(tasks[:created_at])
    .when(status.in_progress).then(tasks[:started_at])
    .when(status.done).then(tasks[:finished_at])

  self
    .select(tasks[Arel.star], status_mapping.to_sql)
    .order("#{status_ordering_attr} ASC", time_ordering.asc, tasks[:id].asc)
end
```

### Sort by enum column

- `sqls/sort_users.sql`
- `app/models/user.rb`
- Use temporary mapping table to map enum to right ordered-value
- Default Arel table is `DUAL`, `DUAL` is a dummy table
  https://www.w3resource.com/sql/sql-dual-table.php#:~:text=but%20DUAL%20can%20be%20accessed,but%20you%20could%20create%20one.
- Use `Arel::Nodes::TableAlias` when using anonymous join tables

MySQL

```sql
SELECT users.*
FROM users
  INNER JOIN (
    (SELECT 'employee' AS role, 1 AS role_int FROM DUAL)
    UNION ALL
    (SELECT 'leader' AS role, 2 AS role_int FROM DUAL)
    UNION ALL
    (SELECT 'manager' AS role, 3 AS role_int FROM DUAL)
    UNION ALL
    (SELECT 'admin' AS role, 4 AS role_int FROM DUAL)
  ) role_mappings ON users.role = role_mappings.role
WHERE users.company_id = 1
ORDER BY role_mappings.role_int ASC;
```

Arel

```ruby title=app/models/user.rb
scope :sort_view, -> do
  user_roles = UserRole.instance.arel_table
  users = arel_table

  join_user_roles = users.join(user_roles).on(users[:role].eq(user_roles[:role]))
  self.joins(join_user_roles.join_sources).order(user_roles[:role_int].asc)
end
```

```ruby title=app/models/user_role.rb
class UserRole
  include Singleton

  def arel_table
    return @arel_table if @arel_table

    employee_row = Arel::SelectManager.new
      .project(Arel::Nodes::Quoted.new(User.role.employee).as('role'))
      .project(Arel::Nodes::SqlLiteral.new('1').as('role_int'))

    leader_row = Arel::SelectManager.new
      .project(Arel::Nodes::Quoted.new(User.role.leader).as('role'))
      .project(Arel::Nodes::SqlLiteral.new('2').as('role_int'))

    manager_row = Arel::SelectManager.new
      .project(Arel::Nodes::Quoted.new(User.role.manager).as('role'))
      .project(Arel::Nodes::SqlLiteral.new('3').as('role_int'))

    admin_row = Arel::SelectManager.new
      .project(Arel::Nodes::Quoted.new(User.role.admin).as('role'))
      .project(Arel::Nodes::SqlLiteral.new('4').as('role_int'))

    @arel_table = Arel::Nodes::TableAlias.new(
      Arel::Nodes::UnionAll.new(
        Arel::Nodes::UnionAll.new(
          employee_row,
          leader_row
        ),
        Arel::Nodes::UnionAll.new(
          manager_row,
          admin_row
        )
      ),
      'role_mappings'
    )
  end
end
```



## Some notes on Arel

- Arel build AST underhood

- `Arel::SelectManager` has methods to build AST tree, but `SelectManager` can become an AST node itself

- `Arel::Nodes::...` is AST node

- Use `Arel::Nodes::TableAlias` when using anonymous tables, it has `left` node which can wrap relation (can be `Arel::SelectManager`) and `#to_sql` will be delegated to. It provides `#[]` to access table attributes