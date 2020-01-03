// @flow

import React from 'react'
import type { Node } from 'react'

import styles from './layout.module.scss'
import Navbar from './navbar'
import type { NavItemDefinitions } from './navbar'

type Props = {
  navbar?: Node,
  navItems: NavItemDefinitions,
  children: Node,
}

function Layout({ navbar, navItems, children }: Props) {
  const navNode = navbar || (
    <Navbar className={styles.navbar} items={navItems} />
  )
  return (
    <div className={styles.layout}>
      <main className={styles.content}>{children}</main>

      {navNode}
    </div>
  )
}

Layout.defaultProps = {
  navbar: undefined,
}

export default Layout
