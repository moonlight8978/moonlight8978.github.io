import React from 'react'
import { render } from '@testing-library/react'

import TableOfContents from '../table-of-contents'

test('it renders table of contents with correct props', () => {
  const toc = [
    { heading: 'Introduction', subs: ['What is it', 'What is it use for'] },
    { heading: 'How it works', subs: ['Basic', 'Advanced', 'Practice'] },
  ]

  const { getByText } = render(<TableOfContents toc={toc} />)

  expect(getByText('TABLE OF CONTENTS')).toBeInTheDocument()

  expect(getByText('Introduction')).toBeInTheDocument()
  expect(getByText('What is it')).toBeInTheDocument()
  expect(getByText('What is it use for')).toBeInTheDocument()

  expect(getByText('How it works')).toBeInTheDocument()
  expect(getByText('Basic')).toBeInTheDocument()
  expect(getByText('Advanced')).toBeInTheDocument()
  expect(getByText('Practice')).toBeInTheDocument()
})
