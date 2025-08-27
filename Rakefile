# frozen_string_literal: true

require 'minitest/test_task'

Minitest::TestTask.create # named test, sensible defaults

# or more explicitly:

Minitest::TestTask.create(:test) do |t|
  t.warning = false
  t.test_globs = ['apps/blog/src/content/leetcode/*.rb']
end

task default: :test
