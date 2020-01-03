// @flow

import React from 'react'
import classnames from 'classnames'

import styles from './title.module.scss'

type Props = { value: string, big: false }

function Title({ value, big }: Props) {
  if (big) {
    return (
      <h1 className={classnames(styles.title, styles.bigTitle)}>{value}</h1>
    )
  }

  return <h2 className={classnames(styles.title)}>{value}</h2>
}

export default Title
