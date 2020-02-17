// @flow

import React from 'react'
import { Switch } from 'react-router-dom'

import ErrorBoundary, { ErrorFallback } from './components/error'
import { paths as screenPaths } from './config'
import BlogScreen from './screens/blog'
import ScreensService from './screens'

const SampleScreen = () => <div>Sample</div>

ScreensService.registerScreen(SampleScreen, {
  path: screenPaths.home,
})
ScreensService.registerScreen(BlogScreen, {
  path: screenPaths.blog,
  props: {
    getPosts: () =>
      Object.keys(ScreensService.metadatas()).map(
        key => ScreensService.metadatas()[key]
      ),
  },
})
ScreensService.registerScreen(SampleScreen, { path: screenPaths.me })

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
