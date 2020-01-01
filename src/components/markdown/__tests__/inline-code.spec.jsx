import React from 'react'
import { render } from '@testing-library/react'

import InlineCode from '../inline-code'

test('renders string', () => {
  const children = '[1, 2].map(number => number * 2)'
  const { container } = render(<InlineCode>{children}</InlineCode>)
  expect(container.firstChild).toMatchSnapshot()
})

test('renders react node', () => {
  const children = <>{'[1, 2].map(number => number * 2)'}</>
  const { container } = render(<InlineCode>{children}</InlineCode>)
  expect(container.firstChild).toMatchSnapshot()
})
