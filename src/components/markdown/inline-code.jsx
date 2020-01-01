// @flow

import React from 'react'

import type { ChildrenNode } from '../types'

import styles from './inline-code.module.scss'

type Props = { children: ChildrenNode }

function InlineCode({ children }: Props) {
  return <code className={styles.code}>{children}</code>
}

export default InlineCode
