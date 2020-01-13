import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'

import App from '../app'

jest.mock('../api/client')

it('navigates correctly', () => {
  const { getByText, queryAllByText } = render(<App />, {
    wrapper: MemoryRouter,
  })

  expect(getByText('Sample')).toBeInTheDocument()
  expect(getByText('Menu').closest('button')).toBeDisabled()

  fireEvent.click(getByText('Blog'))
  expect(
    queryAllByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
  ).toHaveLength(10)
  expect(getByText('Menu').closest('button')).toBeDisabled()

  fireEvent.click(getByText('Author'))
  expect(getByText('Sample')).toBeInTheDocument()
  expect(getByText('Menu').closest('button')).toBeDisabled()
})
