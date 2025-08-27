# frozen_string_literal: true

# @param {Integer[]} nums
# @return {Integer[]}
def product_except_self_v2(nums)
  prefix_products = Array.new(nums.length)
  suffix_products = Array.new(nums.length)

  nums.each.with_index do |n, i|
    prefix_products[i] = (prefix_products[i - 1] || 1) * n
    suffix_products[nums.length - 1 - i] = (suffix_products[nums.length - i] || 1) * nums[nums.length - 1 - i]
  end

  nums.map.with_index do |_, i|
    (i.zero? ? 1 : prefix_products[i - 1]) * (i == nums.length - 1 ? 1 : suffix_products[i + 1])
  end
end

# @param {Integer[]} nums
# @return {Integer[]}
def product_except_self(nums)
  zero_count = nums.count(&:zero?)
  return nums.map { 0 } if zero_count > 1

  product_no_zero = nums.reject(&:zero?).inject(:*)

  nums.map do |n|
    if n.zero?
      product_no_zero
    elsif zero_count.zero?
      product_no_zero / n
    else
      0
    end
  end
end
