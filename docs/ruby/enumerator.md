# Enumerator

## Plain Old Ruby Objects (POROs)

- Create an enumerator with block will returns an `Enumerator` instance with an `Enumerator::Generator` instance as data source.

  - `Enumerator::Generator` can be paused after `yielder` get called (generate data lazily)

  ```ruby
  enumerator = Enumerator.new do |yielder|
  	5.times do |i|
      puts "i = #{i}"
      yielder << i
  	end
  end
  => #<Enumerator: #<Enumerator::Generator:0x00007fe6b18839d0>:each>

  enumerator.each do |e|
    puts "e = #{e}"
  end
  # => i = 0
  #    e = 0
  #    i = 1
  #    e = 1
  #    i = 2
  #    e = 2
  #    i = 3
  #    e = 3
  #    i = 4
  #    e = 4
  ```

  - `Enumerator` datasource is respond to Enumerable method?

  ```ruby
  [1, 2].map    => #<Enumerator: [1, 2]:map>
  [1, 2].select => #<Enumerator: [1, 2]:select>
  ```

- Custom Enumerator

  ```ruby
  class SampleIterator
    def brrr(&block)
      puts "1, 2"
      yield(1)
      return 5
    end
  end

  enumerator = SampleIterator.new.enum_for(:brrr)
  # => #<Enumerator: #<SampleIterator:0x00007f2866d45bd0>:brrr>

  b = enumerator.each do |e|
    puts "e = #{e}"
  end

  puts "b = #{b}"

  # => 1, 2
  #    e = 1
  #    b = 5
  ```

## Apply to Rails large response streaming

`ActionController::Metal#response_body=` accept a `Enumerator` as parameter. So it will lazily generate the needed data, then stream to user client.

```ruby title=app/controllers/posts_controller.rb
class PostsController < ApplicationController
  def index
    @posts = Post.all
    respond_to do |format|
      format.csv do
        self.response_body = Enumerator.new do |y|
          posts.find_each do |post|
            y << CSV.generate_line([post.name, post.author])
          end
        end
      end

      format.json do
        # ...
      end
    end
  end
end
```
