import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Title, { LinkTitle } from '../title'

test('renders small title when big is omitted', () => {
  const { container } = render(<Title>Sample</Title>)
  expect(container.firstChild).toMatchSnapshot()
})

test('renders big title when big is passed', () => {
  const { container } = render(<Title big>Sample</Title>)
  expect(container.firstChild).toMatchSnapshot()
})

test('renders title with link', () => {
  const { container } = render(
    <MemoryRouter>
      <LinkTitle to="/">
        <Title>Sample</Title>
      </LinkTitle>
    </MemoryRouter>
  )
  expect(container.firstChild).toMatchSnapshot()
})
