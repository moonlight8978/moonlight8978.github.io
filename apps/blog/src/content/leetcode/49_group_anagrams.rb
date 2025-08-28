require 'minitest/autorun'

# @param {String[]} strs
# @return {String[][]}
def group_anagrams(strs)
  anagrams = []
  counters = []

  strs.each do |str|
    grouped = false

    new_counter = {}
    str.chars.each do |char|
      new_counter[char] ||= 0
      new_counter[char] += 1
    end

    counters.each.with_index do |counter, index|
      if new_counter.all? { |k, v| counter[k] == v } && new_counter.size == counter.size
        anagrams[index] ||= []
        anagrams[index].push(str)
        grouped = true
        break
      end
    end

    next if grouped

    counters << new_counter
    anagrams[counters.size - 1] = [str]
  end

  anagrams
end

class Test49 < Minitest::Test
  def test_1
    assert_equal group_anagrams(%w[eat tea tan ate nat bat]), [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
  end

  def test_2
    assert_equal group_anagrams([""]), [[""]]
  end

  def test_3
    assert_equal group_anagrams(%w[a]), [["a"]]
  end

  def test_4
    assert_equal group_anagrams(["a","bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"]), [["a"], ["bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"]]
  end

  def test_5
    assert_equal group_anagrams(["hhhhu","tttti","tttit","hhhuh","hhuhh","tittt"]), [["hhhhu", "hhhuh", "hhuhh"], ["tttti", "tttit", "tittt"]]
  end

  def test_6
    assert_equal group_anagrams(["ac","c"]), [["ac"], ["c"]]
  end
end
