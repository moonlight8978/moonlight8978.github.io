import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'

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
  const { getByText, queryByText } = renderNavbar(items)
  expect(queryByText('Home')).not.toBeInTheDocument()
  expect(getByText('House')).toBeInTheDocument()
})

test('fallback to label text if activeLabel not passed', () => {
  const items = [
    {
      icon: 'home',
      label: 'Home',
      key: 'home',
      isActive: () => true,
    },
  ]
  const { getByText } = renderNavbar(items)
  expect(getByText('Home')).toBeInTheDocument()
})

test('renders first item when nav items has multiple matched items on first render', () => {
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
      isActive: () => true,
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
      isActive: () => false,
    },
    {
      icon: 'user',
      label: 'About',
      activeLabel: 'About me',
      key: 'about',
      isActive: () => false,
    },
  ]
  const { getByText } = renderNavbar(items)
  expect(getByText('Home')).toBeInTheDocument()
  expect(getByText('About')).toBeInTheDocument()
})

test('changes active item when click', () => {
  const items = [
    {
      icon: 'home',
      label: 'Home',
      activeLabel: 'House',
      key: 'home',
    },
    {
      icon: 'user',
      label: 'About',
      activeLabel: 'About me',
      key: 'about',
    },
  ]
  const { getByText, queryByText } = renderNavbar(items)

  fireEvent.click(getByText('Home'))
  expect(getByText('House')).toBeInTheDocument()

  fireEvent.click(getByText('About'))
  expect(getByText('About me')).toBeInTheDocument()
  expect(queryByText('House')).not.toBeInTheDocument()

  fireEvent.click(getByText('About me'))
  expect(getByText('About')).toBeInTheDocument()
})

test('render disabled item', () => {
  const items = [
    {
      icon: 'home',
      label: 'Home',
      activeLabel: 'House',
      key: 'home',
      isDisabled: () => true,
    },
    {
      icon: 'user',
      label: 'About',
      activeLabel: 'About me',
      key: 'about',
    },
  ]
  const { getByText } = renderNavbar(items)
  expect(getByText('Home').closest('button')).toBeDisabled()
})

test('trigger callback when click', () => {
  let count = 0
  const items = [
    {
      icon: 'home',
      label: 'Home',
      activeLabel: 'House',
      key: 'home',
      onClick: () => {
        count += 1
      },
    },
    {
      icon: 'user',
      label: 'About',
      activeLabel: 'About me',
      key: 'about',
    },
  ]
  const { getByText } = renderNavbar(items)

  fireEvent.click(getByText('Home'))
  expect(count).toBe(1)
})
