import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import yaml from 'js-yaml'

import client from '../api/client'
import App from '../app'
import ScreensService from '../screens'

it('navigates correctly', async () => {
  client.mock({ data: '# Sample Post' })

  const post = {
    createdAt: '2020-02-10',
    path: '/blog/rails',
    title: 'Rails',
    tags: ['Ruby', 'Ruby on Rails'],
    author: 'moonlight8978',
  }
  ScreensService.registerPost(yaml.safeDump(post), { layout: false })

  const { getByText } = render(<App />, { wrapper: MemoryRouter })

  // Home screen is landing page
  expect(getByText('Sample')).toBeInTheDocument()

  // Move to blog screen
  fireEvent.click(getByText('Blog'))
  expect(getByText('Rails')).toBeInTheDocument()

  // Move to post screen
  fireEvent.click(getByText('Rails'))
  const header = await waitForElement(() => getByText('Sample Post'))
  expect(header).toBeInTheDocument()
  expect(getByText('Menu')).toBeInTheDocument()

  // Move to author screen
  fireEvent.click(getByText('Author'))
  expect(getByText('Sample')).toBeInTheDocument()

  // Back to home screen
  fireEvent.click(getByText('Home'))
  expect(getByText('Sample')).toBeInTheDocument()
})
