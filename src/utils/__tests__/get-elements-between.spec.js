import getElementsBetween from '../get-elements-between'

test('return results when beginning and ending functions are different, and both is found in array', () => {
  const result = getElementsBetween(
    [1, 2, 3, 4, 2, 3, 1, 2, 4],
    e => e === 1,
    e => e === 4
  )

  expect(result).toEqual([[2, 3], [2]])
})

test('returns empty when beginning and ending functions is same', () => {
  const result = getElementsBetween(
    [1, 2, 3, 1, 2, 3, 1, 2, 1],
    e => e === 1,
    e => e === 4
  )
  expect(result).toEqual([])
})

test('returns empty when no ending element found', () => {
  const result = getElementsBetween(
    [1, 2, 3, 4, 2, 3, 1, 2, 4],
    e => e === 1,
    e => e === 5
  )
  expect(result).toEqual([])
})

test('returns empty when no beginning element found', () => {
  const result = getElementsBetween(
    [1, 2, 3, 4, 2, 3, 1, 2, 4],
    e => e === 0,
    e => e === 4
  )
  expect(result).toEqual([])
})
