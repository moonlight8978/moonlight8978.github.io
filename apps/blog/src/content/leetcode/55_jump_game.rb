# frozen_string_literal: true

# @param {Integer[]} nums
# @return {Boolean}
def can_jump(nums)
  last_position = nums.length - 1
  max_steps = 0
  position = 0
  while position < nums.length
    step = nums[position]
    max_steps = [step, max_steps - 1].max

    return true if max_steps >= last_position - position
    break if max_steps.zero?

    position += 1
  end

  position == last_position
end
