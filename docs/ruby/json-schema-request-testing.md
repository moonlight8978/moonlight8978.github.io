# Json Schema in Rails testing

## Setup

- Gem: [json_schemer](https://github.com/davishmcclurg/json_schemer)
  - Support latest (Draft 7) specification

```ruby title=spec/support/json_schemer.rb
RSpec::Matchers.define :match_schema do |schema|
  match do |data|
    schema_path = Rails.root.join('spec', 'schemas', "#{schema}.json")
    schemer = JSONSchemer.schema(schema_path)
    errors = schemer.validate(data)
    if errors.none?
      true
    else
      humanized_errors = errors.map do |error|
        "#{error["data_pointer"]} has value 「#{error["data"].nil? ? "nil" : error["data"]}」, which is not match schema #{error["schema"].inspect}"
      end
      raise StandardError, humanized_errors.join("\n")
    end
  end
end
```

```ruby title=spec/support/request_spec_helpers.rb
module RequestSpecHelpers
  def json_body
    json = JSON.parse(response.body)
    if json.is_a?(Array)
      json.map { |e| ActiveSupport::HashWithIndifferentAccess.new(e) }
    else
      ActiveSupport::HashWithIndifferentAccess.new(json)
    end
  end
end

RSpec.configure do |config|
  config.include RequestSpecHelpers, type: :request
end
```

## Usage

```ruby title=spec/requests/api/v1/posts_spec.rb
RSpec.describe "Api::V1::Posts", type: :request do
  describe "POST /api/v1/posts" do
    it "responses with ok" do
      get '/api/v1/posts'
      expect(json_body).to match_schema("posts")
    end
  end
```

```ruby title=spec/schemas/posts.json
{
  "type": "array",
  "items": {
    "$ref": "post.json"
  }
}
```

```ruby title=spec/schemas/post.json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "title": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```

## Links

- https://thoughtbot.com/blog/validating-json-schemas-with-an-rspec-matcher
- https://github.com/davishmcclurg/json_schemer
- https://json-schema.org/
