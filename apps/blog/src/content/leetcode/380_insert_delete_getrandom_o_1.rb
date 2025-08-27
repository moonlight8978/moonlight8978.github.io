# frozen_string_literal: true

class RandomizedSet
  def initialize
    @values = []
    @presences = {}
    @rand = 0
  end

  #     :type val: Integer
  #     :rtype: Boolean
  def insert(val)
    if @presences.key? val
      false
    else
      @presences[val] = @values.length
      @values.push(val)
      true
    end
  end

  #     :type val: Integer
  #     :rtype: Boolean
  def remove(val)
    if @presences.key?(val)
      index = @presences.delete val
      if index == @values.length - 1
        @values.pop
      else
        last = @values.pop
        @presences[last] = index
        @values[index] = last
      end
      true
    else
      false
    end
  end

  #     :rtype: Integer
  def get_random
    @values[rand(0...@values.length)]
  end
end

# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet.new()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.get_random()
