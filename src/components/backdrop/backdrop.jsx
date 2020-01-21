// @flow

import React from 'react'
import type { Node } from 'react'
import classnames from 'classnames'

import styles from './backdrop.module.scss'

type Props = { children: Node, className?: string, hidden: boolean }

function Backdrop({ children, className, hidden }: Props) {
  if (hidden) {
    return null
  }

  return (
    <div className={classnames(styles.backdrop, className)}>{children}</div>
  )
}

Backdrop.defaultProps = {
  className: undefined,
}

export default Backdrop
