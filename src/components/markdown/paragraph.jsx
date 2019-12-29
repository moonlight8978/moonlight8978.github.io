// @flow

import React from 'react'

import type { ChildrenNode } from '../types'

import styles from './paragraph.module.scss'

type Props = { children: ChildrenNode }

export default function Paragraph({ children }: Props) {
  return <p className={styles.paragraph}>{children}</p>
}
