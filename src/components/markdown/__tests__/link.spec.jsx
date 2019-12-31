import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Link from '../link'

test('render correctly with external URL', () => {
  const { container } = render(
    <Link href="https://google.com">This is a link</Link>
  )

  expect(container.firstChild).toMatchSnapshot()
})

test('render correctly with local path', () => {
  const { container } = render(
    <MemoryRouter>
      <Link href="/local-path">This is a link</Link>
    </MemoryRouter>
  )

  expect(container.firstChild).toMatchSnapshot()
})
