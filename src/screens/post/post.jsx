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
import ErrorBoundary from '../../components/error'

import TableOfContents from './table-of-contents'
import styles from './post.module.scss'

function parseTableOfContents(rawHeadings) {
  return rawHeadings.map(({ h1, h2s }) => ({
    heading: h1[0],
    subs: h2s.map(h2 => h2[0]),
  }))
}

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
        setToc(
          t => t || parseTableOfContents(getMdTableOfContents(response.data))
        )
      })
      .catch(error => console.error(error))
  }, [resourcePath])

  return (
    <Layout navItems={navItems}>
      <ErrorBoundary>
        <Backdrop hidden={isBackdropHidden}>
          {toc && <TableOfContents toc={toc} />}
        </Backdrop>
      </ErrorBoundary>
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
