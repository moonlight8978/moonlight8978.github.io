# frozen_string_literal: true

# @param {Integer[]} gas
# @param {Integer[]} cost
# @return {Integer}
def can_complete_circuit(gas, cost)
  total_fill = gas.sum
  total_cost = cost.sum

  return -1 if total_fill < total_cost

  tank = 0
  used = 0

  start_point = -1

  gas.each.with_index do |fill, i|
    need = cost[i]

    start_point = i if fill >= need && start_point == -1

    tank += fill
    used += need

    if tank < used
      if fill >= need
        start_point = i
        tank = fill
        used = need
      else
        start_point = -1
      end
    end
  end

  start_point
end
