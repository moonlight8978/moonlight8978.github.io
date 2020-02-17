// @flow

import type { NavItemDefinition } from '../components/layout/navbar'
import { paths as screenPaths } from '../config'

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
