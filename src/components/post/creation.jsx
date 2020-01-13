// @flow

import React from 'react'
import classnames from 'classnames'

import styles from './creation.module.scss'

type Props = { updatedAt: number, author: string }

const months: Array<string> = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function formatEnglishTime(time: Date) {
  const month = months[time.getMonth()]
  const date = time
    .getDate()
    .toString()
    .padStart(2, '0')
  const year = time.getFullYear()
  return `${month} ${date}, ${year}`
}

function Creation({ updatedAt: updatedAtTimestamp, author }: Props) {
  const updatedAt = new Date(updatedAtTimestamp)
  return (
    <span className={classnames(styles.creation)}>
      <span>{formatEnglishTime(updatedAt)}</span>
      <span>{` by ${author}`}</span>
    </span>
  )
}

export default Creation
