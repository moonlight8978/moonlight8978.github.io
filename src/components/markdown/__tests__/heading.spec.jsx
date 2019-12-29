import React from 'react'
import { render } from '@testing-library/react'

import Heading from '../heading'

describe('h1', () => {
  test('renders h1 with react node', () => {
    const children = <span>Hello</span>
    const { container } = render(<Heading level={1}>{children}</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders h1 with plaintext', () => {
    const children = 'Hello'
    const { container } = render(<Heading level={1}>{children}</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('h2', () => {
  test('renders h2 with react node', () => {
    const children = <span>Hello</span>
    const { container } = render(<Heading level={2}>{children}</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders h2 with plaintext', () => {
    const children = 'Hello'
    const { container } = render(<Heading level={2}>{children}</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('h3', () => {
  test('renders h3 with react node', () => {
    const children = <span>Hello</span>
    const { container } = render(<Heading level={3}>{children}</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders h3 with plaintext', () => {
    const children = 'Hello'
    const { container } = render(<Heading level={3}>{children}</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('h4', () => {
  test('renders h4 with react node', () => {
    const children = <span>Hello</span>
    const { container } = render(<Heading level={4}>{children}</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders h4 with plaintext', () => {
    const children = 'Hello'
    const { container } = render(<Heading level={4}>{children}</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('h5', () => {
  test('renders h5 with react node', () => {
    const children = <span>Hello</span>
    const { container } = render(<Heading level={5}>{children}</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders h5 with plaintext', () => {
    const children = 'Hello'
    const { container } = render(<Heading level={5}>{children}</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('h6', () => {
  test('renders h6 with react node', () => {
    const children = <span>Hello</span>
    const { container } = render(<Heading level={6}>{children}</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders h6 with plaintext', () => {
    const children = 'Hello'
    const { container } = render(<Heading level={6}>{children}</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('invalid heading level', () => {
  test('renders h6 with react node', () => {
    const children = <span>Hello</span>
    const { container } = render(<Heading level="abc">{children}</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders h6 with plaintext', () => {
    const children = 'Hello'
    const { container } = render(<Heading level="abc">{children}</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
