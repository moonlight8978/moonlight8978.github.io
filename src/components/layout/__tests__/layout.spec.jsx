import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

import Layout from '../layout'

const items = [
  {
    icon: 'home',
    label: 'Home',
    activeLabel: 'House',
    key: 'home',
    isActive: () => true,
  },
  {
    icon: 'user',
    label: 'About',
    activeLabel: 'About me',
    key: 'about',
    isActive: () => false,
  },
]

const renderPage = () =>
  render(
    <MemoryRouter>
      <Layout navItems={items}>
        <p>This is content</p>
      </Layout>
    </MemoryRouter>
  )

test('delegate navbar props to navbar', () => {
  const { getByText } = renderPage()
  expect(getByText('House')).toBeInTheDocument()
  expect(getByText('About')).toBeInTheDocument()
})

test('render content correctly', () => {
  const { getByText } = renderPage()
  expect(getByText('This is content')).toBeInTheDocument()
})
