// istanbul ignore file
// @flow

import * as Sentry from '@sentry/browser'

export default function reportError(error: ?any, errorInfo: ?any) {
  Sentry.withScope(scope => {
    scope.setExtras(errorInfo)
    Sentry.captureException(error)
  })
}
