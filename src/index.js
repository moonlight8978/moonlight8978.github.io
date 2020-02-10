import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import 'purecss/build/pure-min.css'
import 'highlight.js/styles/github.css'

import './initializers/font-awesome'
import './initializers/sentry'

import './index.scss'
import App from './app'

const appRoot = document.getElementById('app')
/* eslint-disable react/jsx-filename-extension */
if (appRoot !== null) {
  ReactDOM.render(
    <HashRouter basename="/">
      <App />
    </HashRouter>,
    appRoot
  )
}
