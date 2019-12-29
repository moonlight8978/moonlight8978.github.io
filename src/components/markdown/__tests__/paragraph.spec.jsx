import React from 'react'
import { render } from '@testing-library/react'

import Paragraph from '../paragraph'

test('renders string', () => {
  const { container } = render(<Paragraph>Hello</Paragraph>)
  expect(container.firstChild).toMatchSnapshot()
})

test('renders react node', () => {
  const { container } = render(
    <Paragraph>
      <span>Hello</span>
    </Paragraph>
  )
  expect(container.firstChild).toMatchSnapshot()
})
