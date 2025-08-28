require 'minitest/autorun'

# @param {Integer} target
# @param {Integer[]} nums
# @return {Integer}
def _209_min_sub_array_len_tle(target, nums)
  window_size = 0
  n = nums.length
  start_sum = 0

  while window_size < n
    window_size += 1

    start_sum += nums[window_size - 1]
    sum = start_sum
    i = 0
    while i <= n - window_size
      if i > 0
        sum = sum - nums[i - 1] + nums[i + window_size - 1]
      end

      return window_size if sum >= target

      i += 1
    end
  end

  0
end

def _209_min_sub_array_len(target, nums)
  left = 0
  sum = 0
  min_window_size = Float::INFINITY
  n = nums.length
  right = 0

  while right < n
    sum += nums[right]

    while sum >= target
      sum -= nums[left]
      min_window_size = [min_window_size, right - left + 1].min
      left += 1
    end

    right += 1
  end

  min_window_size == Float::INFINITY ? 0 : min_window_size
end

class Test209 < Minitest::Test
  def test_1
    assert_equal 2, _209_min_sub_array_len_tle(7, [2,3,1,2,4,3])
    assert_equal 2, _209_min_sub_array_len(7, [2,3,1,2,4,3])
  end

  def test_2
    assert_equal 1, _209_min_sub_array_len_tle(4, [1,4,4])
    assert_equal 1, _209_min_sub_array_len(4, [1,4,4])
  end

  def test_3
    assert_equal 0, _209_min_sub_array_len_tle(11, [1,1,1,1,1,1,1,1])
    assert_equal 0, _209_min_sub_array_len(11, [1,1,1,1,1,1,1,1])
  end

  def test_4
    assert_equal 5, _209_min_sub_array_len_tle(15, [1,2,3,4,5])
    assert_equal 5, _209_min_sub_array_len(15, [1,2,3,4,5])
  end
end
