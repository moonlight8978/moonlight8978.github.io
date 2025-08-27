# frozen_string_literal: true

# @param {Integer[]} nums
# @param {Integer} k
# @return {Void} Do not return anything, modify nums in-place instead.
def rotate(nums, k)
  len = nums.length
  k %= len

  total_loop = 0
  interval = 0
  while interval < k
    break if total_loop == nums.length

    idx = 0
    tmp = nums[interval]
    while idx < len
      next_idx = (interval + (idx + 1) * k) % len
      val = nums[next_idx]
      nums[next_idx] = tmp
      tmp = val
      idx += 1
      total_loop += 1

      break if next_idx == interval
    end

    interval += 1
  end
end
