import React from 'react'
import { render, waitForElement, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import client from '../../../api/client'

import PostScreen from '..'

test('renders post after fetching data', async () => {
  const content = `# Sample post

  ## Introduction`

  client.mock({ data: content })
  const metadata = {
    title: 'Kubernetes',
    author: 'moonlight8978',
    path: '/blog/kubernetes',
    updatedAt: '2020-01-02',
    tags: ['DevOps', 'k8s'],
  }

  const { getByText, container } = render(
    <MemoryRouter initialEntries={['/blog/kubernetes']} initialIndex={0}>
      <PostScreen metadata={metadata} />
    </MemoryRouter>
  )

  // Renders the title
  const title = await waitForElement(() => getByText('Kubernetes'))
  expect(title).toBeInTheDocument()

  // Renders date and author
  expect(container.textContent).toContain('January 02, 2020 by moonlight8978')

  // Renders tags
  expect(getByText('DevOps')).toBeInTheDocument()
  expect(getByText('k8s')).toBeInTheDocument()

  // Renders the content & table of contents
  expect(getByText('Sample post')).toBeInTheDocument()

  fireEvent.click(getByText('Menu'))
  expect(
    await waitForElement(() => getByText('TABLE OF CONTENTS'))
  ).toBeInTheDocument()
})
