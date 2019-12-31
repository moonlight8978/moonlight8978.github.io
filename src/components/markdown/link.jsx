// @flow

import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import isExternalUrl from '../../utils/is-external-url'
import type { ChildrenNode } from '../types'

import styles from './link.module.scss'

type Props = {
  href: string,
  children: ChildrenNode,
}

function Link({ href, children }: Props) {
  if (isExternalUrl(href)) {
    return (
      <a href={href} data-testid="markdown-link" className={styles.link}>
        {children}
      </a>
    )
  }

  return (
    <RouterLink to={href} data-testid="markdown-link" className={styles.link}>
      {children}
    </RouterLink>
  )
}

export default Link
