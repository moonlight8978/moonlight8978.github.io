import yaml from 'js-yaml'
import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import MarkdownIt from 'markdown-it'

import client from '../../api/client'

const md = new MarkdownIt()

function parseYaml(text) {
  return yaml.safeLoad(text)
}

function makePost(metadata, Component) {
  const { path } = parseYaml(metadata)
  const resourcePath = `/contents${path}.md`

  function MarkdownPage() {
    const [content, setContent] = useState()

    useEffect(() => {
      client
        .get(resourcePath)
        .then(response => {
          setContent(response.data)
          const tokens = md.parse(response.data)
        })
        .catch(error => console.log(error))
    }, [])

    return content ? <ReactMarkdown source={content} /> : <div>Loading</div>
  }

  return MarkdownPage
}

export default makePost
