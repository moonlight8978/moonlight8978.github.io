// @flow
// reference: https://github.com/withspectrum/spectrum/blob/alpha/src/components/error/ErrorBoundary.js

import React from 'react'
import type { Node, ComponentType } from 'react'

import reportError from '../../services/report-error'

import ErrorFallback from './error-fallback'

type Props = {
  fallbackComponent?: ComponentType<{}>,
  children: Node,
}

type State = {
  error: ?any,
}

class ErrorBoundary extends React.Component<Props, State> {
  static defaultProps = {
    fallbackComponent: ErrorFallback,
  }

  state = {
    error: null,
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error })
    console.error(error)
    reportError(error, errorInfo)
  }

  render() {
    const { fallbackComponent: FallbackComponent, children } = this.props
    const { error } = this.state

    if (error) {
      if (FallbackComponent) {
        return <FallbackComponent />
      }

      return null
    }

    return children
  }
}

export default ErrorBoundary
