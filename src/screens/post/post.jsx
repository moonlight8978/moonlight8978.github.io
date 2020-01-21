// @flow

import React, { useEffect, useState } from 'react'

import client from '../../api/client'
import getMdTableOfContents from '../../utils/get-md-table-of-contents'
import Markdown from '../../components/markdown'
import type { PostMetadata } from '../screens'
import { defaultNavItems } from '../screens'
import Backdrop, { useBackdrop } from '../../components/backdrop'
import Layout from '../../components/layout'

type Props = {
  metadata: PostMetadata,
}

function MarkdownPage({ metadata }: Props) {
  const [isBackdropHidden, toggleBackDrop] = useBackdrop()

  const navItems = [
    ...defaultNavItems,
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
