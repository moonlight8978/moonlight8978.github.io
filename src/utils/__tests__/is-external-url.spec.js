import isExternalUrl from '../is-external-url'

test('throws error when url is number', () => {
  expect(() => isExternalUrl(888)).toThrowError('888 is not a valid URL.')
})

test('throws error when url is blank', () => {
  expect(() => isExternalUrl('   ')).toThrowError(' is not a valid URL.')
})

test('throws error when url is null', () => {
  expect(() => isExternalUrl(null)).toThrowError('null is not a valid URL.')
})

test('throws error when url is undefined', () => {
  expect(() => isExternalUrl(undefined)).toThrowError(
    'undefined is not a valid URL.'
  )
})

test('throws error when url is boolean', () => {
  expect(() => isExternalUrl(true)).toThrowError('true is not a valid URL.')
})

test('returns true when url is https', () => {
  expect(isExternalUrl('https://example.google.com/')).toBeTruthy()
})

test('returns true when url is http', () => {
  expect(isExternalUrl('http://example.google.com/')).toBeTruthy()
})

test('returns true when url is IP', () => {
  expect(isExternalUrl('10.0.0.1/abc')).toBeTruthy()
})

test('returns true when url is IP with port', () => {
  expect(isExternalUrl('10.0.0.1:3000/abc')).toBeTruthy()
})

test('returns false when url is local path', () => {
  expect(isExternalUrl('/abc')).toBeFalsy()
})
