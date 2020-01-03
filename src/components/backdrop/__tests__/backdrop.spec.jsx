import React from 'react'
import { render } from '@testing-library/react'

import Backdrop from '../backdrop'

test('renders correctly', () => {
  const children = <p>Hello</p>
  const { container } = render(<Backdrop>{children}</Backdrop>)
  expect(container.firstChild).toMatchSnapshot()
})

test('accepts overiding className', () => {
  const children = <p>Hello</p>
  const { container } = render(<Backdrop className="abc">{children}</Backdrop>)
  expect(container.firstChild).toMatchSnapshot()
})
