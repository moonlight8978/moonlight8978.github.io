import React from 'react'
import { render } from '@testing-library/react'

import Blockquote from '../blockquote'

test('renders string', () => {
  const children = 'Hello'
  const { container } = render(<Blockquote>{children}</Blockquote>)
  expect(container.firstChild).toMatchSnapshot()
})

test('renders react node', () => {
  const children = <>Hello</>
  const { container } = render(<Blockquote>{children}</Blockquote>)
  expect(container.firstChild).toMatchSnapshot()
})
