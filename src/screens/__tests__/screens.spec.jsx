import React from 'react'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history'
import yaml from 'js-yaml'

import ScreensService from '../screens'

test('renders registered screens correctly', () => {
  const history = createMemoryHistory({
    initialEntries: ['/'],
    initialIndex: 0,
  })

  const HomeScreen = () => <div>Home screen</div>
  const AboutScreen = () => <div>About screen</div>

  ScreensService.registerScreen(HomeScreen, { path: '/' })
  ScreensService.registerScreen(AboutScreen, { path: '/about' })

  const Screens = ScreensService.createComponent()
  const { getByText } = render(
    <Router history={history}>
      <Screens />
    </Router>
  )
  expect(getByText('Home screen')).toBeInTheDocument()

  history.push('/about')
  expect(getByText('About screen')).toBeInTheDocument()
})

test('sort posts by createdAt descending', () => {
  const register = metadatas =>
    metadatas.forEach(metadata => {
      ScreensService.registerPost(yaml.safeDump(metadata))
    })

  register([
    {
      createdAt: '2020-02-10',
      path: '/ruby',
      title: 'Ruby',
    },
    {
      createdAt: '2020-02-10',
      path: '/rails',
      title: 'Rails',
    },
    {
      createdAt: '2020-01-01',
      path: '/mysql',
      title: 'MySQL',
    },
    {
      createdAt: '2020-02-01',
      path: '/react',
      title: 'React',
    },
    {
      createdAt: '2020-01-10',
      path: '/js',
      title: 'Javascript',
    },
  ])
  expect(Object.keys(ScreensService.metadatas())).toEqual([
    '/rails',
    '/ruby',
    '/react',
    '/js',
    '/mysql',
  ])
})
