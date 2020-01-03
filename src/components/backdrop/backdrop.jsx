// @flow

import React from 'react'
import type { Node } from 'react'

import styles from './backdrop.module.scss'

type Props = { children: Node }

function Backdrop({ children }: Props) {
  return <div className={styles.backdrop}>{children}</div>
}

export default Backdrop
