import yaml from 'js-yaml'
import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

function parseYaml(text) {
  return yaml.safeLoad(text)
}

function makePost(metadata, Component) {
  const { path } = parseYaml(metadata)
  const resourcePath = `/contents${path}.md`

  function MarkdownPage() {
    const [content, setContent] = useState()

    useEffect(() => {
      fetch(resourcePath)
        .then(response => response.text())
        .then(data => setContent(data))
        .catch(error => console.log(error))
    }, [])

    return content ? <ReactMarkdown source={content} /> : <div>Loading</div>
  }

  return MarkdownPage
}

export default makePost
