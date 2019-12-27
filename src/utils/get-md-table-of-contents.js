import MarkdownIt from 'markdown-it'
import _ from 'lodash'

import getElementsBetween from './get-elements-between'
import splitArray from './split-array'

const md = new MarkdownIt()

export default function getMdTableOfContents(content) {
  const tokens = md.parse(content)

  const headings = getElementsBetween(
    tokens,
    token => token.type === 'heading_open' && ['h1', 'h2'].includes(token.tag),
    token => token.type === 'heading_close' && ['h1', 'h2'].includes(token.tag),
    token => token.tag
  )

  const h1s = headings
    .filter(heading => heading.tag === 'h1')
    .map(heading => heading.data.map(token => token.content))
  const h2s = splitArray(headings, heading => heading.tag === 'h1').map(group =>
    group.map(heading => heading.data.map(token => token.content))
  )

  return _.zip(h1s, h2s)
}
