# frozen_string_literal: true

# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
  best = 0
  day_buy = 0
  prices.each.with_index do |sell_price, index|
    profit = sell_price - prices[day_buy]
    day_buy = index if profit.negative?
    best = [profit, best].max
  end
  best
end
