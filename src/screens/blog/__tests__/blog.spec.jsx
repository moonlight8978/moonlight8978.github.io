import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import BlogScreen from '../blog'

test('renders post list', () => {
  const posts = [
    {
      path: '/blog/react',
      title: 'React',
      tags: ['Javascript'],
      updatedAt: '2020-01-01',
      createdAt: '2020-01-01',
      author: 'moonlight8978',
    },
    {
      path: '/blog/rails',
      title: 'Rails',
      tags: ['Ruby on Rails'],
      updatedAt: '2020-01-01',
      createdAt: '2020-01-10',
      author: 'moonlight8978',
    },
  ]
  const { getByText } = render(
    <MemoryRouter>
      <BlogScreen getPosts={() => posts} />
    </MemoryRouter>
  )

  expect(getByText('React')).toBeInTheDocument()
  expect(getByText('Javascript')).toBeInTheDocument()

  expect(getByText('Rails')).toBeInTheDocument()
  expect(getByText('Ruby on Rails')).toBeInTheDocument()
})
