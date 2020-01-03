import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import 'purecss/build/pure-min.css'

import '../src/initializers/font-awesome'
import '../src/index.scss'
import Layout from '../src/components/layout'

export default {
  title: 'Layout',
}

export const defaultLayout = () => (
  <MemoryRouter initialEntries={['/home']}>
    <Layout
      navItems={[
        {
          icon: 'home',
          label: 'Home',
          key: 'home',
          isActive: path => path.match(/home/),
          onClick: (_event, history) => history.push('/home'),
        },
        {
          icon: 'user',
          label: 'About me',
          key: 'about',
          isActive: path => path.match(/about/),
          onClick: (_event, history) => history.push('/about'),
        },
        {
          icon: 'bars',
          activeIcon: 'times',
          label: 'Menu',
          activeLabel: 'Close',
          key: 'menu',
          isDisabled: path => path.match(/home/),
        },
      ]}
    >
      {Array(10)
        .fill(0)
        .map((value, index) => (
          <p key={index.toString()}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        ))}
    </Layout>
  </MemoryRouter>
)
defaultLayout.story = { name: 'Default' }
