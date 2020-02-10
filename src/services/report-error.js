// istanbul ignore file
// @flow

import * as Sentry from '@sentry/browser'

export default function reportError(error, errorInfo) {
  Sentry.withScope(scope => {
    scope.setExtras(errorInfo)
    Sentry.captureException(error)
  })
}
