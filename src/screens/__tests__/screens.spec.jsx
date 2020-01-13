import React from 'react'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history' // react-router-dom has history as dependency

import ScreensService from '../screens'

test('renders registered screens correctly', () => {
  const history = createMemoryHistory({
    initialEntries: ['/'],
    initialIndex: 0,
  })

  const HomeScreen = () => <div>Home</div>
  const AboutScreen = () => <div>About</div>

  ScreensService.registerScreen(HomeScreen, { path: '/' })
  ScreensService.registerScreen(AboutScreen, { path: '/about' })

  const Screens = ScreensService.createComponent()
  const { getByText } = render(
    <Router history={history}>
      <Screens />
    </Router>
  )
  expect(getByText('Home')).toBeInTheDocument()

  history.push('/about')
  expect(getByText('About')).toBeInTheDocument()
})
