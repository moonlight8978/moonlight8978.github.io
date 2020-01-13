import React from 'react'
import { render } from '@testing-library/react'

import Creation from '../creation'

test('renders formatted modified time', () => {
  const updatedAt = Date.parse(
    'Mon Jan 13 2020 09:00:00 GMT+0700 (Indochina Time)'
  )
  const { container, getByText } = render(
    <Creation updatedAt={updatedAt} author="Sample" />
  )
  expect(getByText('January 13, 2020')).toBeInTheDocument()
  expect(container.firstChild).toMatchSnapshot()
})

test('renders formatted modified time with padding', () => {
  const updatedAt = Date.parse(
    'Mon Jan 02 2020 09:00:00 GMT+0700 (Indochina Time)'
  )
  const { container, getByText } = render(
    <Creation updatedAt={updatedAt} author="Sample" />
  )
  expect(getByText('January 02, 2020')).toBeInTheDocument()
  expect(container.firstChild).toMatchSnapshot()
})

test('renders author correctly', () => {
  const author = '_Moon_'
  const { container, getByText } = render(
    <Creation updatedAt={0} author={author} />
  )
  expect(getByText('by _Moon_')).toBeInTheDocument()
  expect(container.firstChild).toMatchSnapshot()
})

test('match snapshot', () => {
  const updatedAt = Date.parse(
    'Mon Jan 13 2020 09:00:00 GMT+0700 (Indochina Time)'
  )
  const author = '_Moon_'
  const { container } = render(
    <Creation updatedAt={updatedAt} author={author} />
  )
  expect(container.firstChild).toMatchSnapshot()
})
