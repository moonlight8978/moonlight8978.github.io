// @flow

import React from 'react'
import classnames from 'classnames'

import styles from './creation.module.scss'

type Props = { updatedAt: number, author: string }

function Creation({ updatedAt: updatedAtTimestamp, author }: Props) {
  const updatedAt = new Date(updatedAtTimestamp)
  return (
    <span className={classnames(styles.creation)}>
      <span>{updatedAt.toLocaleDateString()}</span>
      <span>{author}</span>
    </span>
  )
}

export default Creation
