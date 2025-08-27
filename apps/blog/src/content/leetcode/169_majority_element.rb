# frozen_string_literal: true

require 'minitest/autorun'

# @param {Integer[]} nums
# @return {Integer}
def majority_element(nums)
  counts = {}
  max_count = 0
  result = nil
  nums.each do |n|
    counts[n] ||= 0
    counts[n] += 1
    if counts[n] > max_count
      max_count = counts[n]
      result = n
    end
  end

  if max_count > nums.length / 2
    result
  else
    -1
  end
end

# Moore's Voting Algorithm
#   The idea is: If candidate is the most majority element (count > n/2) => count - (n - count) > 0
def moore_majority_element(nums)
  candidate = -1
  count = 0

  nums.each do |num|
    if count.zero?
      candidate = num
      count = 1
    elsif candidate == num
      count += 1
    else
      count -= 1
    end
  end

  count = 0
  nums.each do |num|
    count += 1 if num == candidate
  end

  if count > nums.length / 2
    candidate
  else
    -1
  end
end

class Test169 < Minitest::Test
  def test_1
    assert_equal majority_element([3, 2, 3]), 3
    assert_equal moore_majority_element([3, 2, 3]), 3
  end

  def test_2
    assert_equal majority_element([2, 2, 1, 1, 1, 2, 2]), 2
    assert_equal moore_majority_element([2, 2, 1, 1, 1, 2, 2]), 2
  end
end
