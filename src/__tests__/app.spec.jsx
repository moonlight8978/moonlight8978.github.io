import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent, waitForElement } from '@testing-library/react'

import client from '../api/client'
import App from '../app'

jest.mock('../api/client')

it('navigates correctly', async () => {
  client.mock({ data: '# Sample Post' })

  const { getByText, queryAllByText } = render(<App />, {
    wrapper: MemoryRouter,
  })

  // Home screen is landing page
  expect(getByText('Sample')).toBeInTheDocument()

  // Move to blog screen
  fireEvent.click(getByText('Blog'))
  expect(
    queryAllByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
  ).toHaveLength(10)

  // Move to post screen
  fireEvent.click(
    queryAllByText(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    )[0]
  )
  const header = await waitForElement(() => getByText('Sample Post'))
  expect(header).toBeInTheDocument()
  expect(getByText('Menu')).toBeInTheDocument()

  // Move to author screen
  fireEvent.click(getByText('Author'))
  expect(getByText('Sample')).toBeInTheDocument()
})
