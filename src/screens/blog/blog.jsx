// @flow

import React from 'react'

import { Title, Creation } from '../../components/post'
import Tags from '../../components/post/tags'

function Blog() {
  return (
    <div>
      <Title value="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

      <Creation
        author="_MoonLight_"
        updatedAt={Math.round(new Date().getTime())}
      />

      <div>
        <Tags values={['Javascript', 'Frontend', 'React']} />
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in …
      </p>
    </div>
  )
}

export default Blog
