# frozen_string_literal: true

# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
  p1 = 0
  p2 = 0
  while p2 < nums.length
    if nums[p2] != val
      nums[p1] = nums[p2]
      p1 += 1
    end

    p2 += 1
  end

  p1
end

class Test27 < Minitest::Test
  def test_1
    assert_equal remove_element([3, 2, 2, 3], 3), 2
  end

  def test_2
    assert_equal remove_element([0, 1, 2, 2, 3, 0, 4, 2], 2), 5
  end
end
