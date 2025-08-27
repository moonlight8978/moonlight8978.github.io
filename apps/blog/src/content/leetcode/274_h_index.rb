# frozen_string_literal: true

# @param {Integer[]} citations
# @return {Integer}
def h_index(citations)
  h = 0
  citations.sort!.reverse!
  citations.each.with_index do |c, i|
    h = [h, [c, i + 1].min].max
  end

  h
end
