// @flow

// TODO: Zoom in/out image

import React from 'react'

import styles from './image.module.scss'

type Props = { src: string, alt: string }

function Image({ src, alt }: Props) {
  return (
    <figure className={styles.container}>
      <img
        className={styles.image}
        src={src}
        alt={alt}
        data-testid="markdown-image"
      />

      <figcaption className={styles.caption}>{alt}</figcaption>
    </figure>
  )
}

export default Image
