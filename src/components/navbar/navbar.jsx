// @flow

import React, { useState } from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './navbar.module.scss'

type NavItem = {
  icon: string,
  label: string,
  key: string,
  activeIcon: string,
  isActive: (url: string) => boolean,
}

type Props = {
  items: Array<NavItem>,
}

export default function Navbar({ items }: Props) {
  const [selectedKey, setSelectedKey] = useState(null)

  if (items.length % 3 !== 0) {
    return <div>Number of items must be multiple of 3</div>
  }

  const toggle = key => setSelectedKey(key === selectedKey ? null : key)
  const columnWidth = 24 / items.length

  const activeItem = items.filter(item => item.isActive('/'))[0]
  const activeKey = selectedKey || (activeItem && activeItem.key)

  return (
    <nav className={styles.navbar}>
      {items.map(({ icon, label, key, isActive, activeIcon }) => (
        <button
          type="button"
          className={classnames(`pure-u-${columnWidth}-24`, styles.navItem, {
            [styles.navItemActive]: key === activeKey,
          })}
          key={key}
          onClick={() => toggle(key)}
        >
          <div className={styles.icon}>
            <FontAwesomeIcon
              icon={key === activeKey ? activeIcon || icon : icon}
              size="2x"
            />
          </div>
          <div className={styles.label}>{label}</div>
        </button>
      ))}
    </nav>
  )
}
