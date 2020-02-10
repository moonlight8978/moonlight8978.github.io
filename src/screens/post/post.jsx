// @flow

import React, { useEffect, useState } from 'react'

import client from '../../api/client'
import getMdTableOfContents from '../../utils/get-md-table-of-contents'
import type { PostMetadata } from '../screens'
import { defaultNavItems } from '../screens'
import Backdrop, { useBackdrop } from '../../components/backdrop'
import Markdown from '../../components/markdown'
import Layout from '../../components/layout'
import { Creation, Tags, Title } from '../../components/post'

import styles from './post.module.scss'

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

  const { path, title, tags, updatedAt, author } = metadata
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
          <div className={styles.tocContainer}>
            <div className={styles.tocContent}>
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
          </div>
        )}
      </Backdrop>
      <div className={styles.postContainer}>
        <Title big>{title}</Title>
        <Creation author={author} updatedAt={updatedAt} />
        <Tags values={tags} />
        {content ? <Markdown content={content} /> : <div>Loading</div>}
      </div>
    </Layout>
  )
}

export default MarkdownPage
