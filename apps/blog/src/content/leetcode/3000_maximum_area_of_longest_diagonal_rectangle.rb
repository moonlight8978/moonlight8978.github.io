# frozen_string_literal: true

# @param {Integer[][]} dimensions
# @return {Integer}
def area_of_max_diagonal(dimensions)
  i = 0
  max_d = 0
  max_area = 0
  while i < dimensions.length
    l = dimensions[i][0]
    w = dimensions[i][1]
    d = l * l + w * w
    if d > max_d
      max_d = d
      max_area = l * w
    end
    max_area = [max_area, l * w].max if d == max_d
    i += 1
  end

  max_area
end

class Test3000 < Minitest::Test
  def test_1
    assert_equal area_of_max_diagonal([[9, 3], [8, 6]]), 48
  end

  def test_2
    assert_equal area_of_max_diagonal([[3, 4], [4, 3]]), 12
  end
end
