import getElementsBetween from '../get-elements-between'

test('return empty when array is empty', () => {
  const result = getElementsBetween(
    [],
    e => e === 1,
    e => e === 2
  )
  expect(result).toEqual([])
})

test('return results when beginning and ending functions are different, and both is found in array', () => {
  const result = getElementsBetween(
    [1, 2, 3, 4, 2, 3, 1, 2, 4],
    e => e === 1,
    e => e === 4
  )

  expect(result).toEqual([
    { tag: null, data: [2, 3] },
    { tag: null, data: [2] },
  ])
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

test('tags element when tagging function is provided', () => {
  const result = getElementsBetween(
    [1, 2, 3],
    e => e === 1,
    e => e === 3,
    () => 'tag'
  )
  expect(result).toEqual([{ data: [2], tag: 'tag' }])
})
