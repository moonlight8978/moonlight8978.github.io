import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from '../app'

test('renders correct content', () => {
  render(<App />)

  expect(screen.queryByText('Test CICD')).toBeInTheDocument()
})

test('matches snapshot', () => {
  const { container } = render(<App />)

  expect(container.firstChild).toMatchSnapshot()
})
