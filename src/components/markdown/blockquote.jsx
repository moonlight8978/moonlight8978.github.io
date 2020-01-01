// @flow

import React from 'react'

import type { ChildrenNode } from '../types'

import styles from './blockquote.module.scss'

type Props = { children: ChildrenNode }

function BlockQuote({ children }: Props) {
  return (
    <blockquote data-testid="markdown-blockquote" className={styles.blockquote}>
      {children}
    </blockquote>
  )
}

export default BlockQuote
