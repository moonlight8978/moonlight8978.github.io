import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import 'highlight.js/styles/github.css'
import 'purecss/build/pure-min.css'

import Markdown from '../src/components/markdown'
import '../src/index.scss'

export default {
  title: 'Markdown',
}

const renderPage = (content, renderer) => {
  const md = <Markdown content={content} />

  return renderer ? renderer(md) : md
}

const paragraphContent = `Khi thực hiện truy vấn với những index loại này, với
mỗi possible key (có thể sử dụng EXPLAIN để check), MySQL sẽ tiến hành extract
range condition.

Những điều kiện không thể cấu thành range condition sẽ bị loại
bỏ, những điều kiện có thể bị overlap sẽ được gộp với nhau`
export const paragraph = () => renderPage(paragraphContent)
paragraph.story = { name: 'Paragraph' }

const headingContent = `# H1
## H2
### H3
#### H4
##### H5
###### H6`
export const heading = () => renderPage(headingContent)
heading.story = { name: 'Heading' }

const imageContent =
  '![Galaxy](https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&w=1000&q=80)'
export const image = () => renderPage(imageContent)
image.story = { name: 'Image' }

const linkContent = `[Google](https://google.com.vn)\n[To another screen](/screen)`
export const link = () =>
  renderPage(linkContent, md => <MemoryRouter>{md}</MemoryRouter>)
link.story = { name: 'Link' }

const strongContent = `**This is a bold text**`
export const strong = () => renderPage(strongContent)
strong.story = { name: 'Strong' }

const blockquoteContent = `> Blockquote  \nexpand to multiple lines`
export const blockquote = () => renderPage(blockquoteContent)
blockquote.story = { name: 'Blockquote' }

const inlineCodeContent =
  '`map` function: `[1, 2].map(number => number * number)`'
export const inlineCode = () => renderPage(inlineCodeContent)
inlineCode.story = { name: 'Inline Code' }

const codeContent = `\`\`\`javascript
import React, { useState } from 'react'

export default function Button() {
  const [count, setCount] = useState(0)

  return <button onClick={() => setCount(count + 1)}>Click me!</button>
}
\`\`\``
export const code = () => renderPage(codeContent)
code.story = { name: 'Code' }

const unorderedListContent = `- Item 1
  - Item 1.1
  - Item 1.2
    - Item 1.2.1
    - Item 1.2.2
      - Item 1.2.1.1
      - Item 1.2.1.2
- Item 2
  - Item 2.1`
export const unordererdList = () => renderPage(unorderedListContent)
unordererdList.story = { name: 'Unordered List' }

const orderedListContent = `1. Item 1
  1. Item 1.1
  2. Item 1.2
    1. Item 1.2.1
        1. Item 1.2.1.1
        2. Item 1.2.1.2
    2. Item 1.2.2
2. Item 2
  1. Item 2.1`
export const ordererdList = () => renderPage(orderedListContent)
ordererdList.story = { name: 'Ordered List' }
