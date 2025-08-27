# @param {Integer[]} height
# @return {Integer}
def max_area(height)
  p1 = 0
  p2 = height.length - 1
  max_s = 0

  while p1 < p2 do
    x = p2 - p1
    y = [height[p1], height[p2]].min
    max_s = [max_s, x*y].max

    if height[p1] > height[p2] 
      p2 -= 1
    else
      p1 += 1
    end


  end

  max_s
end

class Test11 < Minitest::Test
  def test_1
    assert_equal max_area([1,8,6,2,5,4,8,3,7]), 49
  end

  def test_2
    assert_equal max_area([1, 1]), 1
  end
end
