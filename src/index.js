// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import 'purecss/build/pure-min.css'
import 'highlight.js/styles/github.css'

import './initializers/font-awesome'

import './index.scss'
import App from './app'

const appRoot = document.getElementById('app')
if (appRoot !== null) {
  // eslint-disable-next-line react/jsx-filename-extension
  ReactDOM.render(<App />, appRoot)
}
