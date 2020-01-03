import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import 'purecss/build/pure-min.css'

import '../src/initializers/font-awesome'
import '../src/index.scss'
import Navbar from '../src/components/navbar'

export default {
  title: 'Navbar',
}

export const init = () => (
  <MemoryRouter>
    <div style={{ marginTop: '672px' }}>
      <Navbar
        items={[
          {
            icon: 'home',
            label: 'Home',
            key: 'home',
            isActive: () => true,
          },
          {
            icon: 'user',
            label: 'About me',
            key: 'about',
          },
          {
            icon: 'bars',
            activeIcon: 'times',
            label: 'Menu',
            activeLabel: 'Close',
            key: 'menu',
          },
        ]}
      />
    </div>
  </MemoryRouter>
)
init.story = { name: 'Default ' }

export const disabled = () => (
  <MemoryRouter initialEntries={['/home']}>
    <div style={{ marginTop: '672px' }}>
      <Navbar
        items={[
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
      />
    </div>
  </MemoryRouter>
)
init.disabled = { name: 'Disabled ' }
