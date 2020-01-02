import React from 'react'
import { render } from '@testing-library/react'

import List from '../list'

test('renders unordered list', () => {
  const children = (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
    </>
  )
  const { container } = render(<List ordered={false}>{children}</List>)
  expect(container.firstChild).toMatchSnapshot()
})

test('renders ordered list', () => {
  const children = (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
    </>
  )
  const { container } = render(<List ordered>{children}</List>)
  expect(container.firstChild).toMatchSnapshot()
})
