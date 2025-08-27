# frozen_string_literal: true

# @param {Integer} num
# @return {String}
def int_to_roman(num)
  remainder = num
  factors = [1000, 100, 10, 1]
  mid_factors = [0, 500, 50, 5]
  romans = %w[M C X I]
  mids = ['', 'D', 'L', 'V']

  result = ''

  factors.each.with_index do |f, i|
    roman = romans[i]
    mid = mids[i]
    quotient = remainder / f
    mid_factor = mid_factors[i]

    if quotient == 9
      prev_roman = romans[i - 1]
      result << roman << prev_roman
      remainder %= f
    elsif quotient == 4
      result << roman << mid
      remainder %= f
    else
      if mid_factor.positive?
        mid_quotient = remainder / mid_factors[i]
        remainder %= mid_factors[i]
        result << mid * mid_quotient if mid_quotient.positive?
      end

      quotient = remainder / f
      remainder %= f
      result << roman * quotient if quotient.positive?
    end
  end

  result
end
