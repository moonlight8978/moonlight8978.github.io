import React from 'react'

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
