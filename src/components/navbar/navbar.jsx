// @flow

import React, { useState } from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom'

import styles from './navbar.module.scss'

type NavItem = {
  icon: string,
  activeIcon?: string,
  label: string,
  activeLabel?: string,
  key: string,
  isActive: (url: string) => boolean,
}

type Props = {
  items: Array<NavItem>,
  location: { pathname: string },
}

const BASE_COLUMNS = 24

function Navbar({ items, location }: Props) {
  const [selectedKey, setSelectedKey] = useState(null)

  if (BASE_COLUMNS % items.length !== 0) {
    return <div>Number of items must be divisor of 24</div>
  }

  const toggle = key => setSelectedKey(key === selectedKey ? null : key)
  const columnWidth = BASE_COLUMNS / items.length

  const activeItem = items.filter(item => item.isActive(location.pathname))[0]
  const activeKey = selectedKey || (activeItem && activeItem.key)

  return (
    <nav className={styles.navbar}>
      {items.map(({ icon, label, key, activeIcon, activeLabel }) => {
        const isActive = key === activeKey
        const displayIcon = isActive ? activeIcon || icon : icon
        const displayLabel = isActive ? activeLabel || label : label

        return (
          <button
            type="button"
            className={classnames(`pure-u-${columnWidth}-24`, styles.navItem, {
              [styles.navItemActive]: isActive,
            })}
            key={key}
            onClick={() => toggle(key)}
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={displayIcon} size="2x" />
            </div>
            <div className={styles.label}>{displayLabel}</div>
          </button>
        )
      })}
    </nav>
  )
}

export default withRouter(Navbar)
