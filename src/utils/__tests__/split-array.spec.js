import splitArray from '../split-array'

test('return empty when array is empty', () => {
  const result = splitArray([], e => e === 1)
  expect(result).toEqual([])
})

test('will not run correctly when array is not beginning with splitter', () => {
  const result = splitArray([2, 3, 1, 1, 2], e => e === 1)
  expect(result).toEqual([[2, 3], [], [2]])
})

test('result length will be equal to number of splitters when splitter at beginning', () => {
  const result = splitArray([1, 2, 3, 1, 1, 2], e => e === 1)
  expect(result).toEqual([[2, 3], [], [2]])
})

test('duplicated splitter at beginning of array', () => {
  const result = splitArray([1, 1, 2, 3, 1, 2], e => e === 1)
  expect(result).toEqual([[], [2, 3], [2]])
})

test('splitter at the end of array', () => {
  const result = splitArray([1, 2, 3, 1, 2, 3, 1, 1], e => e === 1)
  expect(result).toEqual([[2, 3], [2, 3], [], []])
})
