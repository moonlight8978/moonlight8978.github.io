# @param {Integer[]} nums
# @return {Integer[][]}
def three_sum(nums)
  nums.sort!

  results = []

  nums.each.with_index do |sum, index|
    next if index > 0 && sum == nums[index - 1]

    p1 = index + 1
    p2 = nums.length - 1
    target = 0 - sum
    last_found_p1 = nil

    while p1 < p2
      total = nums[p1] + nums[p2]

      p1 += 1 if total < target
      p2 -= 1 if total > target

      if target == total
        if nums[p1] != last_found_p1
          results << [nums[index], nums[p1], nums[p2]]
        end

        last_found_p1 = nums[p1]
        p1 += 1
        p2 = nums.length - 1
      end
    end
  end

  results
end


class Test15 < Minitest::Test
  def test_1
    assert_equal three_sum([-1,0,1,2,-1,-4]), [[-1,-1,2],[-1,0,1]]
  end

  def test_2
    assert_equal three_sum([0,1,1]), []
  end

  def test_3
    assert_equal three_sum([0,0,0]), [[0,0,0]]
  end

  def test_4
    assert_equal three_sum([0,0,0,0]), [[0,0,0]]
  end
end
