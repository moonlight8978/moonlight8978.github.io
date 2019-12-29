// @flow

import React from 'react'
import ReactMarkdown from 'react-markdown'

import Paragraph from './paragraph'
import Heading from './heading'

type Props = {
  content: string,
}

const renderers = { paragraph: Paragraph, heading: Heading }

export default function Markdown({ content }: Props) {
  return (
    <div className="markdown-body">
      <ReactMarkdown renderers={renderers} source={content} />
    </div>
  )
}
