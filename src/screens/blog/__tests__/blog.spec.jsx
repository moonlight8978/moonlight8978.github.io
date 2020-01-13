import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import BlogScreen from '../blog'

test('renders post list', () => {
  const { container } = render(
    <MemoryRouter>
      <BlogScreen />
    </MemoryRouter>
  )
  expect(container.firstChild).toMatchSnapshot()
})
