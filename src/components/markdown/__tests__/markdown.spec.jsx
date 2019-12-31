import React from 'react'
import { render } from '@testing-library/react'

import Markdown from '../markdown'

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
Lorem ipsum dolor sit amet, **consectetur adipiscing elit**, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
[Lorem ipsum dolor sit amet](https://example.com)

# 2 Lorem Ipsum`

test('renders correctly', () => {
  const { container, getByText, getByTestId } = render(
    <Markdown content={content} />
  )

  const heading = getByText('1.2 Lorem Ipsum')
  expect(heading).toBeInTheDocument()
  expect(heading.tagName).toBe('H2')

  const image = getByTestId('markdown-image')
  expect(image.getAttribute('src')).toBe('https://example.com/example.png')
  expect(image.getAttribute('alt')).toBe('Image')
  const imageCaption = getByText('Image')
  expect(imageCaption).toBeInTheDocument()

  const link = getByText('Lorem ipsum dolor sit amet')
  expect(link).toBeInTheDocument()
  expect(link.getAttribute('href')).toBe('https://example.com')

  const strong = getByText('consectetur adipiscing elit')
  expect(strong).toBeInTheDocument()
  expect(strong.tagName).toBe('STRONG')

  expect(container.firstChild).toMatchSnapshot()
})
