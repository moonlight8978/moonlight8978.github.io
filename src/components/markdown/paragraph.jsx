// @flow

import React from 'react'

import styles from './paragraph.module.scss'

export default function Paragraph(props) {
  return <p className={styles.paragraph}>{props.children}</p>
}
