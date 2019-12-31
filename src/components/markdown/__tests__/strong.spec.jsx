import React from 'react'
import { render } from '@testing-library/react'

import Markdown from '../markdown'

test('render correctly', () => {
  const content = '**This is a bold text**'
  const { container } = render(<Markdown content={content} />)
  expect(container.firstChild).toMatchSnapshot()
})
