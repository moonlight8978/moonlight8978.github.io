# frozen_string_literal: true

# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
  profit = 0
  day_buy = 0

  prices.each.with_index do |price, day|
    sell_price = prices[day_buy]
    unless price < sell_price
      day_profit = price - sell_price
      profit += day_profit
    end
    day_buy = day
  end

  profit
end
