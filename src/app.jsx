// @flow

import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import Layout from './components/layout'
import BlogScreen from './screens/blog'
import ScreensService from './screens'

const navItems = [
  {
    icon: 'home',
    label: 'Home',
    key: 'home',
    isActive: path => path === '/',
    onClick: (event, history) => history.push('/'),
  },
  {
    icon: 'rss',
    label: 'Blog',
    key: 'blog',
    isActive: path => path === '/blog',
    onClick: (event, history) => history.push('/blog'),
  },
  {
    icon: 'user',
    label: 'Author',
    key: 'about',
    isActive: path => path === '/about',
    onClick: (event, history) => history.push('/about'),
  },
  {
    icon: 'bars',
    activeIcon: 'times',
    label: 'Menu',
    activeLabel: 'Close',
    key: 'menu',
    isDisabled: path => !(path === '/blog/:name'),
  },
]

// const HomeScreen = () => <div>Home</div>

ScreensService.registerScreen(BlogScreen, { path: '/' })
ScreensService.registerScreen(BlogScreen, { path: '/blog', exact: true })
const Screens = ScreensService.createComponent()

function App() {
  return (
    <BrowserRouter>
      <Layout navItems={navItems}>
        <Switch>
          <Screens />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
