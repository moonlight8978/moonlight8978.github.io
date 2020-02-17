// @flow

import React from 'react'

import { LinkTitle, Title, Creation } from '../../components/post'
import Tags from '../../components/post/tags'
import type { PostMetadata } from '../screens'

import styles from './blog.module.scss'

type BlogPostItemProps = {
  post: PostMetadata,
}

function BlogPostItem({ post }: BlogPostItemProps) {
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
    </div>
  )
}

type Props = {
  posts: Array<PostMetadata>,
}

function Blog({ posts }: Props) {
  return (
    <div className={styles.postList}>
      {posts.map(post => (
        <div className={styles.postItem} key={post.title}>
          <BlogPostItem post={post} />
        </div>
      ))}
    </div>
  )
}

export default Blog
