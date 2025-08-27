# frozen_string_literal: true

# @param {String} s
# @return {String}
def reverse_words(s)
  word = ''

  result = ''
  is_last_char_space = true

  s.reverse.each_char do |c|
    if c == ' '
      result << ' ' unless is_last_char_space || result.empty?
      result << word.reverse
      is_last_char_space = true
      word = ''
    else
      is_last_char_space = false
      word << c
    end
  end

  unless is_last_char_space
    result << ' ' unless result.empty?
    result << word.reverse
  end

  result
end
