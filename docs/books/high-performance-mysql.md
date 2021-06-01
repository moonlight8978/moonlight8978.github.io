---
sidebar_position: 1
---

# High Performance MySQL

## Architecture

![Docusaurus](/img/high-performance-mysql/architecture.png)

- First layer: Thread, connection, authentication, ... (những component basic cho mọi ứng dụng client/server)
- Second layer: Logic hại não của MySQL tập trung tại đây: query parsing, analysis, optimization, caching, ...
- Third layer: Storage engine, server layer communicate với layer này thông qua storage engine API.

## Concurrency control

- MySQL handle ở 2 level: the server level, và storage engine level.

### Locking

* Implement locking system to deal with concurrent read/write access
  * Read locks
  * Write locks
* Table locks:
  * Lowest overhead
  * Lock the entire table.
  * Write to a table (insert, delete, update, ...) → acquires a write lock → nobody is writing → readers can obtain read locks, which don't conflict with other read locks
  * Write locks has higher priority than read locks
  * Although storage engines can manage their own locks, MySQL also use a variety of locks that are effecient. (e.g. the server use a table-level lock for `ALTER TABLE`, regardless of the storage engine)
* Row locks
  * Offers the greatest concurrency, but also carries the greatest overhead.
  * Are implemented in the storage engine, not the server

#### Implicit locking

InnoDB uses a two-phase locking protocol

Locks can be acquired at any time during a transaction, but it does not release them until a `COMMIT` or `ROLLBACK`.

All locks are released at the same time

#### Explicitly locking

* `SELECT ... LOCK IN SHARE MODE`
* `SELECT ... FOR UPDATE`
* `LOCK TABLES`, `UNLOCK TABLES` - implemented in the server, not in the storage engines

## Transactions

- ACID: 

  - Atomicity: a tx must function as a single indivisible unit of work → either applied or rolled back → all or nothing
  - Consistency: always move from one consitent state to the next. If the tx is never committed (crash, etc...), none of the tx's changes are ever reflected in the db
  - Isolation: the results of a tx are usually invisible to other txs until the tx is complete.
  - Durability

- Downside: db server has to do more work

  → consider transaction is needed or not

  → no tx = better performance (use `LOCK TABLES` instead)
  
- Transactions are implemented by the underlying storage engines

  → Cannot reiably mix different engines within tx

  If transactional and non-transactional tables are mixed in a tx, and a rollback is required, the changes to the non-transactional table cannot be undone

  → MySQL usually warn or raise error when transactional operations are executed on a nontransactional table.

### Isolation levels

4 levels, the lower the level, the higher in concurrency & overhead

* `READ UNCOMMITTED`

  * Txs can view the results of uncommitted txs → many problems can occur
  * Performance isn't much better than the other levels
  * Dirty read

* `READ COMMITTED`

  * Most db default isolation level. But not MySQL
  * Tx will see only thoes changes made by committed txs
  * Problem: *nonrepeatable read* - the same statement can returns different data

* `REPEATABLE READ`

  * solve nonrepeatable read problem: it guarantees that any rows a tx reads will look the same in subsequent reads within the same tx
  * allows another tricky problem: *phantom reads* - select a range of rows, another tx inserts a new row to the range, then select the same range again → see that "phantom" row
  * InnoDB, XtraDB solve phantom read problem with multiversion concurrent control
  * Default MySQL's isolation level

* `SERIALIZABLE`

  * highest level of isolation

  * tx must be ordered so they can't possibly conflict (in a nutshell, it places a lock on every row it reads)

    → a lot of timeout, lock contention

```mysql
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED
```

### Deadlocks

* Two or more tx request locks on each other, create a cycle of depencencies

  | Timestamp | Tx 1                                                         | Tx 2                                                         |
  | --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
  | 1         | `BEGIN TRANSACTION`                                          |                                                              |
  | 2         | `UPDATE users SET age = 22 WHERE id = 2`                     |                                                              |
  | 3         |                                                              | `BEGIN TRANSACTION`                                          |
  | 4         | done                                                         | `UPDATE users SET age = 23 WHERE id = 3`                     |
  | 5         | `UPDATE users SET age = 23 WHERE id = 3`<br />→ Record has been locked in tx 2<br />→ Wait for tx 2 to complete |                                                              |
  | 6         |                                                              | done                                                         |
  | 7         |                                                              | `UPDATE users SET age = 22 WHERE id = 2`<br />→ Record has been locked in tx 1<br />→ Wait for tx 1 to complete |

* To combat this problem, db systems implements deadlock detection and timeouts. 

  * InnoDB will notice circular dependencies and return an error instantly
  * Others will give up after a specific timeout, which is not always good.

* Cannot be resolved without rolling back one of the txs

  * InnoDB rolls back the transaction that has the fewest exclusive row locks

* Applications should designed to handle deadlocks

  * Many apps simply retry the transaction from the beginning

### Transaction logging

- Instead of updating table on disk, the storage engine write a record of change to the transaction log (which on disk too) → very fast

  At some later time, a process can update the table on disk

  Most storage engine use this technique

* If server crashes before changes to data are made, the storage engine can still recover the changes upon restart

  The recovery method varies between storage engine

### AUTOCOMMIT

* MySQL's default operation mode

* Unless a tx is explicitly began, it automatically executes each query in a separate transaction.

  ```mysql
  SHOW VARIABLES LIKE 'AUTOCOMMIT';
  # => ON / OFF
  
  SET AUTOCOMMIT = 1;
  # 1: ON, 0: OFF
  ```

* `AUTOCOMMIT=0` → always in a transaction, until a `COMMIT` or `ROLLBACK` is issued. MySQL then starts a new transaction immediately.

* Changing `AUTOCOMMIT` has no effect on nontransactional tables, such as MyISAM or Memory tables (have no notion of committing or rolling back)

### Multiversion Concurrency Control - MVCC

* Most of MySQL storage engine use row-level locking in conjunction with a technique for increasing concurrency, known as MVCC.

* MVCC is not unique to MySQL

* How MVCC works: Keep a snapshot of the data  at some point in time

  → transactions can see a consistent view of the data

* Mỗi storage engine có cách implement MVCC khác nihau

* InnoDB: lưu thêm 2 bản nữa với mỗi record (hidden values), 1 được ghi lại lúc create, và 1 ghi lại lúc expire (hoặc delete).

  Không lưu timestamp của những event trên (create/expire/delete), mà sẽ lưu system version number khi mỗi event đó xảy ra - giá trị này được tăng mỗi khi bắt đầu transaction  

  → Each transaction keeps its own record of the current system version, as the time it began.

  → Mỗi query cần check version number của mỗi row

  VD:

  * `SELECT`: tìm row version at least as old as the transaction (<= transaction version - đảm bảo data không bị outdate). đảm bảo deletion version undefined, hoặc lớn hơn version của transaction (để đảm bảo data chưa bị xoá)
  * `INSERT`: records system version number hiện tại với row mới vừa tạo
  * `DELETE`: records system version number as the row's deletion ID
  * `UPDATE`: write new copy of the row, using the system version number for the new row's version. also write the system version number as the old row's deletion version

* MVVC giúp cho phần lớn read query không cần lock.

* Drawback: 

  * Tốn thêm bộ nhớ
  * Phải handle thêm một số operation khác.

* Chỉ hoạt động trên `REPEATABLE READ` và `READ COMMITTED`.
  * `READ UNCOMMITTED`: luôn đọc version mới nhất → uncompatible
  * `SERIALIZABLE`: read query luôn lock mọi row → uncompatible

### InnoDB

* store dữ liệu theo series của 1 hoặc nhiều file, vào tablespace

* sử dụng MVVC để có high concurrency

* support cả 4 isolation level, default là `REPEATABLE READ`

* sử dụng next-key locking để ngăn chặn phantom read

  * ngoài việc lock row thì InnoDB lock thêm cả index, để ngăn phantom không insert được vào.
  * Table được build trên clustered index (index structure rất khác so với các engine khác)

* Thay đổi engine

  * ```mysql
    ALTER TABLE mytable ENGINE = InnoDB; 
    ```

    Cách trên không tối ưu, do server có thể ăn hết resource (disk I/O, cpu)

  * ```mysql
    CREATE TABLE innodb_table LIKE myisam_table;
    
    ALTER TABLE innodb_table ENGINE=InnoDB;
    
    START TRANSACTION;
    INSERT INTO innodb_table SELECT * FROM myisam_table WHERE id BETWEEN x AND y;
    COMMIT;
    ```

    Xử lý theo batch nếu data lớn

## Optimizing Schema and Data Types

### Choosing optimal data types

* Smaller is usually better: Use the smallest data type. But never underestimate the range of values we need.

* Simple is good

* Avoid `NULL` if possible: 

  * It's harder for MySQL to optimize queries that refer to nullable columns. 
  * `NULL` make indexes, index statistics, value comparisons more complicated.

  * More storage space to store, and requies special processing inside MySQL
  * But performance improvement is usually small. But for index columns, avoid making them nullable if possible

* Real numbers

  * `FLOAT`, `DOUBLE`: floating-point math. CPU native → faster

    * 4 bytes/8 bytes
    * MySQL sử dụng `DOUBLE` trong tính toán nội bộ liên quan tới floating-point type

  * `DECIMAL`: 

    * supports exact math. 
    * CPU don't support the computations directly → chậm → chỉ sử dụng khi cần độ chính xác cao (financial)

  * Cho phép chỉ định độ chính xác

    * `DECIMAL`: số digit trước và sau decimal point (up to 65 digits)

      → ảnh hưởng tới space lưu trữ

* String

  * `VARCHAR`
    * variable-length → less storage required
    * use 1 or 2 extra bytes to record the value's length: 1 byte if the column max length is 255 bytes or less, and 2 bytes if it's more
  * `CHAR`
    * Fixed-length
    * Trailing spaces will be stripped

* Blob, text

  * `TEXT` → `SMALLTEXT`
  * `BLOB` → `SMALLBLOB`
  * Often store in "external" storage area. Only requires 1-4 bytes of storage space in the row and enough space in external storage to actually hold the value
  * Sorting: sorts only the first `max_sort_length` bytes of the column
  * Cannot index the full length, and cannot use the indexes for sorting

* Enum

  ```sql
  CREATE TABLE enum_test(e ENUM('fish', 'apple', 'dog') NOT NULL);
  INSERT INTO enum_test(e) VALUES('fish'), ('dog'), ('apple');
  ```

  * Actually is integers

    ```sql
    SELECT e + 0 FROM enum_test;
    # +-------+
    # | e + 0 |
    # +-------+
    # |     1 |
    # |     3 |
    # |     2 |
    # +-------+
    ```

  * Sort by integer values

    ```sql
    SELECT e FROM enum_test ORDER BY e;
    # +-------+
    # | e     |
    # +-------+
    # | fish  |
    # | apple |
    # | dog   |
    # +-------+
    ```

    Workaround by using `FIELD()`. But this prevents MySQL from using the index for sorting

    ```sql
    SELECT e FROM enum_test ORDER BY FIELD(e, 'apple', 'dog', 'fish');
    ```

    

