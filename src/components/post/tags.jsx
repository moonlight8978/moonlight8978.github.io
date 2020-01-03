// @flow

import React from 'react'

import styles from './tags.module.scss'

type TagProps = { value: string }

function Tag({ value }: TagProps) {
  return <span className={styles.tag}>{value}</span>
}

type Props = { values: Array<string> }

function Tags({ values: tags }: Props) {
  return (
    <span className={styles.tags}>
      {tags.map(tag => (
        <Tag key={tag} value={tag} />
      ))}
    </span>
  )
}

export default Tags
