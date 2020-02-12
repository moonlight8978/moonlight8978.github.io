// @flow

import React from 'react'
import type { ComponentType } from 'react'
import { Route } from 'react-router-dom'
import yaml from 'js-yaml'
import _ from 'lodash'

import Layout from '../components/layout'
import type { NavItemDefinition } from '../components/layout/navbar'
import { paths as screenPaths } from '../config'

import Post from './post'

const parseYaml = yaml.safeLoad

type ScreenOptions = {
  path?: string,
  exact?: boolean,
  layout?: boolean,
}

type ScreenInfo = ScreenOptions & { component: any }

type Props = {}

export type PostMetadata = {
  path: string,
  title: string,
  tags: Array<string>,
  updatedAt: string,
  author: string,
}

type ScreensObj = {
  screens: Array<ScreenInfo>,
  registerScreen: (component: any, options: ScreenOptions) => void,
  createComponent: () => ComponentType<Props>,
  parseMetadata: (metadata: string) => PostMetadata,
  registerPost: (metadata: string, screenOptions: ScreenOptions) => void,
}

export const defaultNavItems: Array<NavItemDefinition> = [
  {
    icon: 'home',
    label: 'Home',
    key: 'home',
    isActive: path => path === screenPaths.home,
    onClick: (event, history) => history.push(screenPaths.home),
  },
  {
    icon: 'rss',
    label: 'Blog',
    key: 'blog',
    isActive: path => path === screenPaths.blog,
    onClick: (event, history) => history.push(screenPaths.blog),
  },
  {
    icon: 'user',
    label: 'Author',
    key: 'about',
    isActive: path => path === screenPaths.me,
    onClick: (event, history) => history.push(screenPaths.me),
  },
]

const ScreensService: ScreensObj = {
  screens: [],
  postsMetadata: {},
  registerScreen(component, { exact = true, path, layout = true }) {
    this.screens.push({ component, exact, path, layout })
  },
  createComponent() {
    const { screens } = this

    return function Screens() {
      return screens.map(({ path, exact, component: Component, layout }) => (
        <Route path={path} exact={exact} key={path}>
          {layout ? (
            <Layout navItems={defaultNavItems}>
              <Component />
            </Layout>
          ) : (
            <Component />
          )}
        </Route>
      ))
    }
  },
  parseMetadata: metadata => parseYaml(metadata),
  saveMetadata(metadata) {
    this.postsMetadata[metadata.path] = metadata
    const sorted = _.sortBy(Object.values(this.postsMetadata), meta => [
      new Date(meta.createdAt),
      meta.title,
    ]).reduce((metas, meta) => {
      metas[meta.path] = meta
      return metas
    }, {})
    this.postsMetadata = sorted
  },
  registerPost(rawMetadata, screenOptions) {
    const metadata = this.parseMetadata(rawMetadata)

    this.saveMetadata(metadata)
    this.registerScreen(() => <Post metadata={metadata} />, {
      ...screenOptions,
      path: metadata.path,
    })
  },
}

export default ScreensService
