// @flow

import React from 'react'
import { Switch } from 'react-router-dom'

import ErrorBoundary, { ErrorFallback } from './components/error'
import mysqlOptimizeWhere from './blog/mysql-optimize-where'
import BlogScreen from './screens/blog'
import ScreensService from './screens'
import { paths as screenPaths } from './config'

const SampleScreen = () => <div>Sample</div>

ScreensService.registerScreen(SampleScreen, { path: screenPaths.home })
ScreensService.registerScreen(BlogScreen, { path: screenPaths.blog })
ScreensService.registerScreen(SampleScreen, { path: screenPaths.me })
ScreensService.registerPost(mysqlOptimizeWhere, { layout: false })

const Screens = ScreensService.createComponent()

function App() {
  return (
    <ErrorBoundary fallbackComponent={ErrorFallback}>
      <Switch>
        <Screens />
      </Switch>
    </ErrorBoundary>
  )
}

export default App
