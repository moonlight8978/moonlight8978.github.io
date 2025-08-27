# frozen_string_literal: true

# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
  k = 1
  i = 1
  temp = nums[0]
  while i < nums.length
    if nums[i] != temp
      nums[k] = nums[i]
      k += 1
    end
    temp = nums[i]
    i += 1
  end

  k
end

class Test26 < Minitest::Test
  def test_1
    assert_equal remove_duplicates([1, 1, 2]), 2
  end

  def test_2
    assert_equal remove_duplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5
  end
end
