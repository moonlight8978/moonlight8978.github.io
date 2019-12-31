// @flow

import React from 'react'
import ReactMarkdown from 'react-markdown'

import Paragraph from './paragraph'
import Heading from './heading'
import Image from './image'
import Link from './link'
import Strong from './strong'
import styles from './markdown.module.scss'

type Props = {
  content: string,
}

const renderers = {
  paragraph: Paragraph,
  heading: Heading,
  image: Image,
  link: Link,
  strong: Strong,
}

export default function Markdown({ content }: Props) {
  return (
    <div className={styles.markdownBody}>
      <ReactMarkdown renderers={renderers} source={content} />
    </div>
  )
}
