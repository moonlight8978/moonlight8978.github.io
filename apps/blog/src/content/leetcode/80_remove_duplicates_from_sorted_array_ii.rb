# frozen_string_literal: true

# @param {Integer[]} nums
# @return {Integer}
def _80_remove_duplicates(nums)
  idx = 0
  cursor = nil
  count = 0
  k = 0
  while idx < nums.length
    if nums[idx] != cursor
      cursor = nums[idx]
      nums[k] = nums[idx]
      count = 1
      k += 1
    elsif count < 2
      nums[k] = nums[idx]
      k += 1
      count += 1
    end
    idx += 1
  end
  k
end
