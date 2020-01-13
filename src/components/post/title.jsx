// @flow

import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import type { ChildrenNode } from '../types'

import styles from './title.module.scss'

type Props = { children: ChildrenNode, big: boolean }

function Title({ big, children }: Props) {
  if (big) {
    return (
      <h1 className={classnames(styles.title, styles.bigTitle)}>{children}</h1>
    )
  }

  return <h2 className={classnames(styles.title)}>{children}</h2>
}

type LinkTitleProps = { children: ChildrenNode, to: string }

function LinkTitle({ children, to }: LinkTitleProps) {
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  )
}

export default Title

export { LinkTitle }
