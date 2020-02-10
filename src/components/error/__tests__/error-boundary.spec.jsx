import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'

import ErrorBoundary from '../error-boundary'

jest.mock('../../../services/report-error')

test('handle unexpected errors on render', () => {
  const ErrorComp = () => {
    const [isError, setIsError] = useState(false)
    if (isError) {
      throw Error('Unexpected Error')
    }
    return (
      <button type="button" onClick={() => setIsError(true)}>
        Click me
      </button>
    )
  }

  const { getByText } = render(
    <ErrorBoundary>
      <ErrorComp />
    </ErrorBoundary>
  )

  expect(getByText('Click me')).toBeInTheDocument()

  fireEvent.click(getByText('Click me'))
  expect(getByText('Unexpected error. Please try again.')).toBeInTheDocument()
})

test('renders component if there is no error', () => {
  const NormalComp = () => {
    return (
      <button type="button" onClick={() => {}}>
        Click me
      </button>
    )
  }

  const { getByText } = render(
    <ErrorBoundary>
      <NormalComp />
    </ErrorBoundary>
  )

  expect(getByText('Click me')).toBeInTheDocument()

  fireEvent.click(getByText('Click me'))
  expect(getByText('Click me')).toBeInTheDocument()
})
