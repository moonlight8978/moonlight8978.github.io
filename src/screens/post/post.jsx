// @flow

import React, { useEffect, useState } from 'react'

import client from '../../api/client'
import getMdTableOfContents from '../../utils/get-md-table-of-contents'
import Markdown from '../../components/markdown'
import type { PostMetadata } from '../screens'
import Backdrop from '../../components/backdrop'
import Layout from '../../components/layout'

type Props = {
  metadata: PostMetadata,
}

const screenPaths = {
  home: '/',
  blog: '/blog',
  post: '/blog/:name',
  me: '/me',
}

function MarkdownPage({ metadata }: Props) {
  const [isBackdropHidden, setIsBackdropHidden] = useState(true)
  const toggleBackDrop = () => setIsBackdropHidden(!isBackdropHidden)

  const navItems = [
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
    {
      icon: 'bars',
      activeIcon: 'times',
      label: 'Menu',
      activeLabel: 'Close',
      key: 'menu',
      isDisabled: path => !path.match(/\/blog\/.+/),
      onClick: toggleBackDrop,
    },
  ]

  const { path } = metadata
  const resourcePath = `/contents/${path}.md`
  const [content, setContent] = useState()
  const [toc, setToc] = useState()

  useEffect(() => {
    client
      .get(resourcePath)
      .then(response => {
        setContent(response.data.replace(/\\n/g, '\n'))
        setToc(t => t || getMdTableOfContents(response.data))
      })
      .catch(error => console.log(error))
  }, [resourcePath])

  return (
    <Layout navItems={navItems}>
      <Backdrop hidden={isBackdropHidden}>
        {toc && (
          <div>
            <h3>Table of contents</h3>
            {toc.map(({ h1, h2s }, index1) => (
              <ul key={index1.toString()}>
                <b>{h1[0]}</b>
                {h2s.map((h2, index2) => (
                  <li key={index2.toString()}>{h2[0]}</li>
                ))}
              </ul>
            ))}
          </div>
        )}
      </Backdrop>
      {content ? <Markdown content={content} /> : <div>Loading</div>}
    </Layout>
  )
}

export default MarkdownPage
