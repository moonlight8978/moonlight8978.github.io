import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import 'purecss/build/pure-min.css'

import '../src/index.scss'
import Navbar from '../src/components/navbar'

library.add(fas)

export default {
  title: 'Navbar',
}

export const init = () => (
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
          isActive: () => false,
        },
        {
          icon: 'bars',
          activeIcon: 'times',
          label: 'Menu',
          key: 'menu',
          isActive: () => false,
        },
      ]}
    />
  </div>
)
init.story = { name: 'Default ' }
