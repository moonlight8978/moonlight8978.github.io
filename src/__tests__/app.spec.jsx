import React from 'react'
import { render } from '@testing-library/react'

import App from '../app'
import client from '../api/client'

jest.mock('../api/client')

it('render without crash', async () => {
  const { getByText } = await client.mock('**Welcome**', () => render(<App />))
  expect(getByText('Welcome')).toBeInTheDocument()
})
