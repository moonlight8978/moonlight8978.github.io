// @flow

import React from 'react'
import type { ComponentType } from 'react'
import { Route } from 'react-router-dom'
import yaml from 'js-yaml'
import orderBy from 'lodash/orderBy'

import Layout from '../components/layout'

import Post from './post'
import { defaultNavItems } from './nav'

const parseYaml = yaml.safeLoad

type ScreenOptions = {
  path?: string,
  exact?: boolean,
  layout?: boolean,
  props?: { [key: string]: ?any },
}

type ScreenInfo = ScreenOptions & { component: any }

type Props = {}

export type PostMetadata = {
  path: string,
  title: string,
  tags: Array<string>,
  updatedAt: string,
  createdAt: string,
  author: string,
}

type ScreensObj = {
  screens: Array<ScreenInfo>,
  registerScreen: (component: any, options: ScreenOptions) => void,
  createComponent: () => ComponentType<Props>,
  registerPost: (metadata: string, screenOptions: ScreenOptions) => void,
  metadatas: () => { [key: string]: PostMetadata },
}

const ScreensService: ScreensObj = {
  screens: [],
  postsMetadata: {},
  registerScreen(component, { exact = true, path, layout = true, props = {} }) {
    this.screens.push({ component, exact, path, layout, props })
  },
  createComponent() {
    const { screens } = this

    return function Screens() {
      return screens.map(
        ({ path, exact, component: Component, layout, props }) => (
          <Route path={path} exact={exact} key={path}>
            {layout ? (
              <Layout navItems={defaultNavItems}>
                <Component {...props} />
              </Layout>
            ) : (
              <Component {...props} />
            )}
          </Route>
        )
      )
    }
  },
  parseMetadata: metadata => parseYaml(metadata),
  sortMetadata() {
    this.postsMetadata = orderBy(
      Object.values(this.postsMetadata),
      [meta => new Date(meta.createdAt), meta => meta.title],
      ['desc', 'asc']
    ).reduce((metas, meta) => {
      // eslint-disable-next-line no-param-reassign
      metas[meta.path] = meta
      return metas
    }, {})
  },
  saveMetadata(metadata) {
    this.postsMetadata[metadata.path] = metadata
    this.sortMetadata()
  },
  registerPost(rawMetadata, screenOptions = {}) {
    const metadata = this.parseMetadata(rawMetadata)
    this.saveMetadata(metadata)
    this.registerScreen(() => <Post metadata={metadata} />, {
      ...screenOptions,
      path: metadata.path,
    })
  },
  metadatas() {
    return this.postsMetadata
  },
}

export default ScreensService
