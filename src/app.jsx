// @flow

import React from 'react'
import { Switch } from 'react-router-dom'

import Layout from './components/layout'
import ErrorBoundary, { ErrorFallback } from './components/error'
import BlogScreen from './screens/blog'
import ScreensService from './screens'

const screenPaths = {
  home: '/',
  blog: '/blog',
  post: '/blog/:name',
  me: '/me',
}

const SampleScreen = () => <div>Sample</div>

ScreensService.registerScreen(SampleScreen, { path: screenPaths.home })
ScreensService.registerScreen(BlogScreen, { path: screenPaths.blog })
ScreensService.registerScreen(SampleScreen, { path: screenPaths.me })
const Screens = ScreensService.createComponent()

const navItems = [
  {
    icon: 'home',
    label: 'Home',
    key: 'home',
    isActive: path => path === screenPaths.home,
    onClick: (event, history) => history.push(screenPaths.home),
  },
  {
    icon: 'rss',
    label: 'Blog',
    key: 'blog',
    isActive: path => path === screenPaths.blog,
    onClick: (event, history) => history.push(screenPaths.blog),
  },
  {
    icon: 'user',
    label: 'Author',
    key: 'about',
    isActive: path => path === screenPaths.me,
    onClick: (event, history) => history.push(screenPaths.me),
  },
  {
    icon: 'bars',
    activeIcon: 'times',
    label: 'Menu',
    activeLabel: 'Close',
    key: 'menu',
    isDisabled: path => !(path === screenPaths.post),
  },
]

function App() {
  return (
    <ErrorBoundary fallbackComponent={ErrorFallback}>
      <Layout navItems={navItems}>
        <Switch>
          <Screens />
        </Switch>
      </Layout>
    </ErrorBoundary>
  )
}

export default App
