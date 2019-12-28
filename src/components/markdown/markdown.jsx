// @flow

import React from 'react'
import ReactMarkdown from 'react-markdown'

import Paragraph from './paragraph'
import Heading from './heading'

type Props = {
  renderers?: any,
  content: string,
}

export default function Markdown({ renderers, content }: Props) {
  return (
    <ReactMarkdown
      renderers={{ paragraph: Paragraph, heading: Heading }}
      source={content}
    />
  )
}

Markdown.defaultProps = {
  renderers: undefined,
}
