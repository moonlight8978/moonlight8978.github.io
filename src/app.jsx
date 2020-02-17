// @flow

import React from 'react'
import { Switch } from 'react-router-dom'

import ErrorBoundary, { ErrorFallback } from './components/error'
import { paths as screenPaths } from './config'
import ScreensService from './screens'
import BlogScreen from './screens/blog'
import mysqlOptimizeWhere from './blog/mysql-optimize-where'
import kubernetesIntroduction from './blog/kubernetes-introduction'
import reactMindset from './blog/react-mindset'
import rails6ActionText from './blog/rails6-action-text'
import railwayOrientedProgramming from './blog/railway-oriented-programming'
import atomicInFrontend1 from './blog/atomic-in-frontend-1-pixel'
import atomicInFrontend2 from './blog/atomic-in-frontend-2-dp'

const SampleScreen = () => <div>Sample</div>

ScreensService.registerPost(mysqlOptimizeWhere, { layout: false })
ScreensService.registerPost(kubernetesIntroduction, { layout: false })
ScreensService.registerPost(reactMindset, { layout: false })
ScreensService.registerPost(rails6ActionText, { layout: false })
ScreensService.registerPost(railwayOrientedProgramming, { layout: false })
ScreensService.registerPost(atomicInFrontend1, { layout: false })
ScreensService.registerPost(atomicInFrontend2, { layout: false })

const posts = Object.keys(ScreensService.metadatas()).map(
  key => ScreensService.metadatas()[key]
)

ScreensService.registerScreen(SampleScreen, { path: screenPaths.home })
ScreensService.registerScreen(BlogScreen, {
  path: screenPaths.blog,
  props: { posts },
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
