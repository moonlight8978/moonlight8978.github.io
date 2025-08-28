require 'minitest/autorun'
require 'set'

# @param {String} s
# @return {Integer}
def _3_length_of_longest_substring(s)
  left = 0
  right = 0
  n = s.length
  max_window_size = 0
  set = Set.new

  while right < n
    unless set.include?(s[right])
      set.add(s[right])
      max_window_size = [max_window_size, right - left + 1].max
      right += 1
      next
    end

    while set.include?(s[right])
      set.delete(s[left])
      left += 1
    end
  end

  max_window_size
end

class Test3 < Minitest::Test
  def test_1
    assert_equal 3, _3_length_of_longest_substring("abcabcbb")
  end

  def test_2
    assert_equal 1, _3_length_of_longest_substring("bbbbb")
  end

  def test_3
    assert_equal 3, _3_length_of_longest_substring("pwwkew")
  end
end
