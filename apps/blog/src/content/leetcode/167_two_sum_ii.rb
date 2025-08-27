# @param {Integer[]} numbers
# @param {Integer} target
# @return {Integer[]}
def two_sum(numbers, target)
    p1 = 0
    p2 = numbers.length - 1

    while p1 < p2
        break if numbers[p1] + numbers[p2] == target

        if numbers[p1] + numbers[p2] > target
            p2 -= 1
        end

        if numbers[p1] + numbers[p2] < target
            p1 += 1
        end
    end

    return [p1 + 1, p2 + 1]
end

class Test167 < Minitest::Test
  def test_1
    assert_equal two_sum([2,7,11,15], 9), [1,2]
  end

  def test_2
    assert_equal two_sum([2,3,4], 6), [1,3]
  end

  def test_3
    assert_equal two_sum([-1,0], -1), [1, 2]
  end
end
