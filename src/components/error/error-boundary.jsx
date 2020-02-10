// @flow
// reference: https://github.com/withspectrum/spectrum/blob/alpha/src/components/error/ErrorBoundary.js

import React from 'react'
import type { Node, ComponentType } from 'react'
import * as Sentry from '@sentry/browser'

import ErrorFallback from './error-fallback'

type Props = {
  fallbackComponent?: ComponentType,
  capture?: boolean,
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

    const { capture } = this.props
    if (capture) {
      Sentry.withScope(scope => {
        scope.setExtras(errorInfo)
        Sentry.captureException(error)
      })
    }
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
