import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as Sentry from '@sentry/browser'

import 'purecss/build/pure-min.css'
import 'highlight.js/styles/github.css'

import './initializers/font-awesome'

import './index.scss'
import App from './app'

Sentry.init({
  dsn: 'https://9ef81538b3af445d8ef3f825324ef41f@sentry.io/2400193',
  defaultIntegrations: false,
})

const appRoot = document.getElementById('app')
/* eslint-disable react/jsx-filename-extension */
if (appRoot !== null) {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    appRoot
  )
}
