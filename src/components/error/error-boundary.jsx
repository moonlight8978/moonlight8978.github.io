// @flow
// reference: https://github.com/withspectrum/spectrum/blob/alpha/src/components/error/ErrorBoundary.js

import React from 'react'
import type { Node, ComponentType } from 'react'

import reportError from '../../services/report-error'

import ErrorFallback from './error-fallback'

type Props = {
  fallbackComponent?: ComponentType,
  children: Node,
}

type State = {
  error: ?any,
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error })
    console.error(error)
    reportError(error, errorInfo)
  }

  render() {
    const { fallbackComponent: FallbackComponent, children } = this.props
    const { error } = this.state

    if (error) {
      return <FallbackComponent />
    }

    return children
  }
}

ErrorBoundary.defaultProps = {
  fallbackComponent: ErrorFallback,
  capture: false,
}

export default ErrorBoundary
