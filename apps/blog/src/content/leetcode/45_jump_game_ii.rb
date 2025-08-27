# frozen_string_literal: true

# @param {Integer[]} nums
# @return {Integer}
def jump(nums)
  i = nums.length - 1
  jumps = 0

  while i.positive?
    j = i - 1

    farest_node = 0
    while j >= 0
      distance = i - j
      farest_node = j if nums[j] >= distance
      j -= 1
    end

    i = farest_node
    jumps += 1
  end

  jumps
end
