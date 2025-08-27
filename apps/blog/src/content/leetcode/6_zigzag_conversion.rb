# frozen_string_literal: true

# @param {String} s
# @param {Integer} num_rows
# @return {String}
def convert(s, num_rows)
  return s if num_rows == 1

  rows = Array.new(num_rows) { [] }

  char_each_seq = num_rows * 2 - 2

  s.each_char.with_index do |c, i|
    colno = (i % char_each_seq) / num_rows
    row = if colno.zero?
            rows[i % char_each_seq % num_rows]
          else
            rows[(num_rows - 1) - 1 - (i % char_each_seq % num_rows)]
          end

    row << c
  end

  result = ''
  rows.each do |row|
    row.each do |col|
      result << col
    end
  end

  result
end
