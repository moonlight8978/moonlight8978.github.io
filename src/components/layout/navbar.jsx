// @flow

import React, { useState } from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom'

import styles from './navbar.module.scss'

type History = {
  push: (path: string) => void,
}

export type NavItemDefinition = {
  icon: string,
  activeIcon?: string,
  label: string,
  activeLabel?: string,
  key: string,
  isActive?: (url: string) => boolean,
  onClick?: (event: SyntheticEvent<HTMLButtonElement>, history: History) => any,
  isDisabled?: (url: string) => boolean,
}

export type NavItemDefinitions = Array<NavItemDefinition>

type Props = {
  items: NavItemDefinitions,
  location: { pathname: string },
  history: History,
  className?: string,
}

const BASE_COLUMNS = 24

function Navbar({ items, location, history, className }: Props) {
  const [selectedKey, setSelectedKey] = useState(null)

  if (BASE_COLUMNS % items.length !== 0) {
    return <div>Number of items must be divisor of 24</div>
  }

  const toggle = key => setSelectedKey(key === selectedKey ? null : key)
  const columnWidth = BASE_COLUMNS / items.length

  const activeItem = items.filter(
    ({ isActive }) => !!isActive && isActive(location.pathname)
  )[0]
  const activeKey = selectedKey || (activeItem && activeItem.key)

  return (
    <nav className={classnames(styles.navbar, className)}>
      {items.map(
        ({
          icon,
          label,
          key,
          activeIcon,
          activeLabel,
          isDisabled,
          onClick,
        }) => {
          const isActive = key === activeKey
          const displayIcon = isActive ? activeIcon || icon : icon
          const displayLabel = isActive ? activeLabel || label : label

          // TODO: Extract into NavItem component
          return (
            <button
              type="button"
              className={classnames(
                `pure-u-${columnWidth}-24`,
                styles.navItem,
                {
                  [styles.navItemActive]: isActive,
                }
              )}
              key={key}
              onClick={event => {
                toggle(key)
                onClick && onClick(event, history)
              }}
              disabled={!!isDisabled && isDisabled(location.pathname)}
            >
              <div className={styles.icon}>
                <FontAwesomeIcon icon={displayIcon} size="2x" />
              </div>
              <div className={styles.label}>{displayLabel}</div>
            </button>
          )
        }
      )}
    </nav>
  )
}

Navbar.defaultProps = {
  className: undefined,
}

export default withRouter(Navbar)
