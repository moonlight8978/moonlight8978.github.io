import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Image from '../image'

test('it render the image correctly', () => {
  const { container, getByText, getByTestId } = render(
    <Image src="/sample.jpg" alt="Sample image" />
  )

  expect(getByText('Sample image')).toBeInTheDocument()

  const image = getByTestId('markdown-image')
  expect(image.getAttribute('src')).toBe('/sample.jpg')

  expect(container.firstChild).toMatchSnapshot()
})
