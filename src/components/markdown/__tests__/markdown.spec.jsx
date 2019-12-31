import React from 'react'
import { render } from '@testing-library/react'

import Markdown from '../markdown'

test('render correctly', () => {
  const content = `# Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

# 1 Lorem Ipsum
## 1.1 Lorem Ipsum
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
### 1.1.1 Lorem Ipsum
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
![Image](https://example.com/example.png)

## 1.2 Lorem Ipsum
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
[Lorem ipsum dolor sit amet](https://example.com)

# 2 Lorem Ipsum`
  const { container, getByText } = render(<Markdown content={content} />)
  expect(getByText('1.2 Lorem Ipsum')).toBeInTheDocument()
  expect(container.firstChild).toMatchSnapshot()
})
