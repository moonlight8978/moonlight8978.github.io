/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import 'purecss/build/pure-min.css'
import 'highlight.js/styles/github.css'

import './initializers/font-awesome'
import './initializers/sentry'

import './index.scss'
import App from './app'
import ScreensService from './screens'
import mysqlOptimizeWhere from './blog/mysql-optimize-where'
import kubernetesIntroduction from './blog/kubernetes-introduction'
import reactMindset from './blog/react-mindset'
import rails6ActionText from './blog/rails6-action-text'
import railwayOrientedProgramming from './blog/railway-oriented-programming'
import atomicInFrontend1 from './blog/atomic-in-frontend-1-pixel'
import atomicInFrontend2 from './blog/atomic-in-frontend-2-dp'

ScreensService.registerPost(mysqlOptimizeWhere, { layout: false })
ScreensService.registerPost(kubernetesIntroduction, { layout: false })
ScreensService.registerPost(reactMindset, { layout: false })
ScreensService.registerPost(rails6ActionText, { layout: false })
ScreensService.registerPost(railwayOrientedProgramming, { layout: false })
ScreensService.registerPost(atomicInFrontend1, { layout: false })
ScreensService.registerPost(atomicInFrontend2, { layout: false })

const appRoot = document.getElementById('app')
if (appRoot !== null) {
  ReactDOM.render(
    <HashRouter basename="/">
      <App />
    </HashRouter>,
    appRoot
  )
}
