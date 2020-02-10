// @flow
// reference: https://github.com/withspectrum/spectrum/blob/alpha/src/components/error/ErrorBoundary.js

import React from 'react'
import type { Node, ComponentType } from 'react'

import reportError from '../../services/report-error'

type Props = {
  fallbackComponent: ComponentType<{}>,
  children: Node,
}

type State = {
  error: ?any,
}

class ErrorBoundary extends React.Component<Props, State> {
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
      return <FallbackComponent />
    }

    return children
  }
}

export default ErrorBoundary
