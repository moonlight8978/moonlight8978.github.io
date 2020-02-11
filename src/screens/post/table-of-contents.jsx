// @flow

import React from 'react'

import styles from './table-of-contents.module.scss'

type H1 = string
type H2s = Array<string>
type Headings = Array<{|
  heading: H1,
  subs: H2s,
|}>
type Props = { toc: Headings }

function TableOfContents({ toc }: Props) {
  return (
    <div className={styles.tocContainer}>
      <div className={styles.tocContent}>
        <h3>TABLE OF CONTENTS</h3>
        {toc.map(({ heading, subs }) => (
          <ul key={heading}>
            <b>{heading}</b>
            {subs.map(sub => (
              <li key={sub}>{sub}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default TableOfContents
