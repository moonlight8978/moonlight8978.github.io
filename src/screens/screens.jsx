// @flow

import React from 'react'
import type { ComponentType } from 'react'
import { Route } from 'react-router-dom'

type ScreenOptions = {
  path: string,
  exact: boolean,
}

type ScreenInfo = ScreenOptions & { component: any }

type Props = {}

type ScreensObj = {
  screens: Array<ScreenInfo>,
  registerScreen: (component: any, options: ScreenOptions) => void,
  createComponent: () => ComponentType<Props>,
}

const service: ScreensObj = {
  screens: [],
  registerScreen: function registerScreen(component, { exact = true, path }) {
    this.screens.push({ component, exact, path })
  },
  createComponent: function createComponent() {
    const { screens } = this

    return function Screens() {
      return screens.map(({ path, exact, component: Component }) => (
        <Route path={path} exact={exact} key={path}>
          <Component />
        </Route>
      ))
    }
  },
}

export default service
