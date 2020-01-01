import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import Markdown from '../src/components/markdown'

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
