import yaml from 'js-yaml'
import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

import client from '../../api/client'
import getMdTableOfContents from '../../utils/get-md-table-of-contents'

const parseYaml = yaml.safeLoad

function makePost(metadata, Component) {
  const { path } = parseYaml(metadata)
  const resourcePath = `/contents${path}.md`

  function MarkdownPage() {
    const [content, setContent] = useState()
    const [toc, setToc] = useState()

    useEffect(() => {
      client
        .get(resourcePath)
        .then(response => {
          setContent(response.data)
          setToc(getMdTableOfContents(response.data))
        })
        .catch(error => console.log(error))
    }, [])

    return (
      <div>
        {toc && (
          <div>
            <h3>Table of contents</h3>
            {toc.map(([h1, h2s]) => (
              <ul key={h1[0]}>
                <b>{h1[0]}</b>
                {h2s.map(h2 => (
                  <li key={h2[0]}>{h2[0]}</li>
                ))}
              </ul>
            ))}
          </div>
        )}
        {content ? <ReactMarkdown source={content} /> : <div>Loading</div>}
      </div>
    )
  }

  return MarkdownPage
}

export default makePost
