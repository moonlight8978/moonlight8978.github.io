// @flow

import React from 'react'

import { LinkTitle, Title, Creation } from '../../components/post'
import Tags from '../../components/post/tags'
import Paragraph from '../../components/markdown/paragraph'
import ScreensService from '../screens'

import styles from './blog.module.scss'

function BlogPostItem({ post }) {
  return (
    <div className="post-list-item">
      <LinkTitle to={post.path}>
        <Title>{post.title}</Title>
      </LinkTitle>

      <Creation
        author="_MoonLight_"
        updatedAt={Math.round(new Date(post.createdAt).getTime())}
      />
      <Tags values={post.tags} />
      {/* <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in …
      </Paragraph> */}
    </div>
  )
}

function Blog() {
  console.log(ScreensService.postsMetadata)
  return (
    <div className={styles.postList}>
      {Object.values(ScreensService.postsMetadata).map(metadata => (
        <div className={styles.postItem} key={metadata.title}>
          <BlogPostItem post={metadata} />
        </div>
      ))}
    </div>
  )
}

export default Blog
