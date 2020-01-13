// @flow

import React from 'react'

import { LinkTitle, Title, Creation } from '../../components/post'
import Tags from '../../components/post/tags'
import Paragraph from '../../components/markdown/paragraph'

import styles from './blog.module.scss'

function BlogPostItem() {
  return (
    <div className="post-list-item">
      <LinkTitle to="/blog/mysql-optimize-where">
        <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Title>
      </LinkTitle>

      <Creation
        author="_MoonLight_"
        updatedAt={Math.round(new Date().getTime())}
      />
      <Tags values={['Javascript', 'Frontend', 'React']} />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in …
      </Paragraph>
    </div>
  )
}

function Blog() {
  return (
    <div className={styles.postList}>
      {Array(10)
        .fill(0)
        .map((element, index) => (
          <div className={styles.postItem} key={index.toString()}>
            <BlogPostItem />
          </div>
        ))}
    </div>
  )
}

export default Blog
