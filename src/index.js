// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import 'purecss/build/pure-min.css'
import 'highlight.js/styles/github.css'

import './initializers/font-awesome'

import './index.scss'
import App from './app'

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
