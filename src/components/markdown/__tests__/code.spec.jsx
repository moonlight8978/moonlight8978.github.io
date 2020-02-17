import React from 'react'
import { render } from '@testing-library/react'

import Code from '../code'

test('renders code block corresponding to language', () => {
  const language = 'javascript'
  const code = `import React from "react"`
  const { container } = render(<Code language={language} value={code} />)
  expect(container.firstChild).toMatchSnapshot()
})

test('renders plaintext if language is not supported', () => {
  const language = 'invalid'
  const code = `This is an invalid language`
  const { container } = render(<Code language={language} value={code} />)
  expect(container.firstChild).toMatchSnapshot()
})
