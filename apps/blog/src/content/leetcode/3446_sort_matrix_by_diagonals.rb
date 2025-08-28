require 'minitest/autorun'

# @param {Integer[][]} grid
# @return {Integer[][]}
def _3446_sort_matrix(grid)
  i = 0
  n = grid.length
  total_loop = n * 2 - 1

  result = []
  diagonals = []
  while i < total_loop
    y = n - i - 1
    x = y >= 0 ? 0 : y.abs
    direction = y >= 0 ? "desc" : "asc"
    y = y >= 0 ? y : 0
    diagonal = [grid[y][x]]
    while y < n - 1 && x < n - 1
      y += 1
      x += 1
      diagonal.push(grid[y][x])
    end
    diagonal.sort!
    diagonal.reverse! if direction == "desc"
    diagonals.push(diagonal)
    i += 1
  end

  diagonals.each.with_index do |diagonal, d_index|
    diagonal.each.with_index do |num, index|
      y = n - d_index - 1
      x = y >= 0 ? 0 : y.abs
      y = [y, 0].max
      grid[y + index][x + index] = num
    end
  end

  grid
end

class Test3446 < Minitest::Test
  def test_1
    assert_equal [[8,2,3],[9,6,7],[4,5,1]], _3446_sort_matrix([[1,7,3],[9,8,2],[4,5,6]])
  end

  def test_2
    assert_equal [[2,1],[1,0]], _3446_sort_matrix([[0,1],[1,2]])
  end

  def test_3
    assert_equal [[1]], _3446_sort_matrix([[1]])
  end
end
