// @flow

import React from 'react'

import styles from './tags.module.scss'

type TagProps = { value: string }

function Tag({ value }: TagProps) {
  return <div className={styles.tag}>{value}</div>
}

type Props = { values: Array<string> }

function Tags({ values: tags }: Props) {
  return (
    <div className={styles.tags}>
      {tags.map(tag => (
        <Tag key={tag} value={tag} />
      ))}
    </div>
  )
}

export default Tags
