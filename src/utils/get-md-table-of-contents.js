import MarkdownIt from 'markdown-it'

import getElementsBetween from './get-elements-between'

const md = new MarkdownIt()

export default function getMdTableOfContents(content) {
  const tokens = md.parse(content)

  const headings = getElementsBetween(
    tokens,
    token => token.type === 'heading_open' && ['h1', 'h2'].includes(token.tag),
    token => token.type === 'heading_close' && ['h1', 'h2'].includes(token.tag)
  )

  return headings
}
