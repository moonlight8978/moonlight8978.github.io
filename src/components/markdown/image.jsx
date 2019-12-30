// @flow

// TODO: Zoom in/out image

import React from 'react'

import styles from './image.module.scss'

type Props = { src: string, alt: string }

function Image({ src, alt }: Props) {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={src}
        alt={alt}
        data-testid="markdown-image"
      />

      <div className={styles.caption}>{alt}</div>
    </div>
  )
}

export default Image
