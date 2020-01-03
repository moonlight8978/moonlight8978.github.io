import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

import Navbar from '../navbar'

const renderNavbar = (items, initialEntries = ['/home']) =>
  render(
    <MemoryRouter initialEntries={initialEntries}>
      <Navbar items={items} />
    </MemoryRouter>
  )

test('renders error when nav items is not divisor of 24', () => {
  const items = Array(5).fill(0)
  const { getByText } = renderNavbar(items)
  expect(getByText('Number of items must be divisor of 24')).toBeInTheDocument()
})

test('renders active item when nav items has matched item on first render', () => {
  const items = [
    {
      icon: 'home',
      label: 'Home',
      activeLabel: 'House',
      key: 'home',
      isActive: path => path === '/home',
    },
    {
      icon: 'user',
      label: 'About',
      activeLabel: 'About me',
      key: 'about',
      isActive: path => path.match(/^xyzabc$/),
    },
  ]
  const { getByText, queryByText } = renderNavbar(items)
  expect(queryByText('Home')).not.toBeInTheDocument()
  expect(getByText('House')).toBeInTheDocument()
})

test('renders first item when nav items has multiple matched items on first render', () => {
  const items = [
    {
      icon: 'home',
      label: 'Home',
      activeLabel: 'House',
      key: 'home',
      isActive: path => path === '/home',
    },
    {
      icon: 'user',
      label: 'About',
      activeLabel: 'About me',
      key: 'about',
      isActive: path => path === '/home',
    },
  ]
  const { getByText, queryByText } = renderNavbar(items)
  expect(getByText('House')).toBeInTheDocument()
  expect(queryByText('About me')).not.toBeInTheDocument()
})

test('does not render active item when no item match', () => {
  const items = [
    {
      icon: 'home',
      label: 'Home',
      activeLabel: 'House',
      key: 'home',
      isActive: path => path === '/',
    },
    {
      icon: 'user',
      label: 'About',
      activeLabel: 'About me',
      key: 'about',
      isActive: path => path === '/',
    },
  ]
  const { getByText } = renderNavbar(items)
  expect(getByText('Home')).toBeInTheDocument()
  expect(getByText('About')).toBeInTheDocument()
})
