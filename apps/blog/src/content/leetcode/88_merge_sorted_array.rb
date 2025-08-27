# frozen_string_literal: true

# @param {Integer[]} nums1
# @param {Integer} m
# @param {Integer[]} nums2
# @param {Integer} n
# @return {Void} Do not return anything, modify nums1 in-place instead.
def merge(nums1, m, nums2, n)
  p1 = m - 1
  p2 = n - 1
  k = m + n - 1
  while p2 >= 0
    if p1 >= 0 && nums1[p1] >= nums2[p2]
      nums1[k] = nums1[p1]
      p1 -= 1
    else
      nums1[k] = nums2[p2]
      p2 -= 1
    end
    k -= 1
  end

  nums1
end

class Test88 < Minitest::Test
  def test_1
    assert_equal merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3), [1, 2, 2, 3, 5, 6]
  end

  def test_2
    assert_equal merge([1], 1, [], 0), [1]
  end

  def test_3
    assert_equal merge([0], 0, [1], 1), [1]
  end
end
