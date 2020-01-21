// @flow

import MarkdownIt from 'markdown-it'

import getElementsBetween from './get-elements-between'
import splitArray from './split-array'

const md = new MarkdownIt()

type H1 = Array<string>
type H2s = Array<Array<string>>
type NestedHeading = {| h1: H1, h2s: H2s |}

export default function getMdTableOfContents(
  content: string
): Array<NestedHeading> {
  const tokens = md.parse(content)

  const headings = getElementsBetween(
    tokens,
    token => token.type === 'heading_open' && ['h1', 'h2'].includes(token.tag),
    token => token.type === 'heading_close' && ['h1', 'h2'].includes(token.tag),
    token => token.tag
  )

  const h1s: Array<H1> = headings
    .filter(heading => heading.tag === 'h1')
    .map(heading => heading.data.map(token => token.content))
  const h2s: Array<H2s> = splitArray(
    headings,
    heading => heading.tag === 'h1'
  ).map(group => group.map(heading => heading.data.map(token => token.content)))

  return h1s.map((heading1, index) => ({ h1: heading1, h2s: h2s[index] }))
}
