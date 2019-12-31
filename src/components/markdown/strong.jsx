// @flow

import React from 'react'

import type { ChildrenNode } from '../types'

import styles from './strong.module.scss'

type Props = { children: ChildrenNode }

function Strong({ children }: Props) {
  return <strong className={styles.strong}>{children}</strong>
}

export default Strong
