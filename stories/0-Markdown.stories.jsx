import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import Markdown from '../src/components/markdown'

export default {
  title: 'Markdown',
}

const paragraphContent = `Khi thực hiện truy vấn với những index loại này, với
mỗi possible key (có thể sử dụng EXPLAIN để check), MySQL sẽ tiến hành extract
range condition.

Những điều kiện không thể cấu thành range condition sẽ bị loại
bỏ, những điều kiện có thể bị overlap sẽ được gộp với nhau`
export const paragraph = () => <Markdown content={paragraphContent} />
paragraph.story = { name: 'Paragraph' }

const headingContent = `# H1
## H2
### H3
#### H4
##### H5
###### H6`
export const heading = () => <Markdown content={headingContent} />
heading.story = { name: 'Heading' }

const imageContent =
  '![Galaxy](https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&w=1000&q=80)'
export const image = () => <Markdown content={imageContent} />
image.story = { name: 'Image' }

const linkContent = `[Google](https://google.com.vn)


[To another screen](/screen)`
export const link = () => (
  <MemoryRouter>
    <Markdown content={linkContent} />
  </MemoryRouter>
)
link.story = { name: 'Link' }
