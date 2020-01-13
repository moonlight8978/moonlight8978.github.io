import React from 'react'
import { render } from '@testing-library/react'

import Tags from '../tags'

test('renders tags when input is not empty', () => {
  const tags = ['JS', 'Ruby', 'Miscs']
  const { container } = render(<Tags values={tags} />)
  expect(container.firstChild).toMatchSnapshot()
})

test('does not render anything when input is empty', () => {
  const tags = []
  const { container } = render(<Tags values={tags} />)
  expect(container.firstChild).toBeNull()
})
