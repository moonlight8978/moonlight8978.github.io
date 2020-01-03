// @flow

import React, { useEffect, useRef } from 'react'
import classnames from 'classnames'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import sql from 'highlight.js/lib/languages/sql'
import plaintext from 'highlight.js/lib/languages/plaintext'
import xml from 'highlight.js/lib/languages/xml'
import scss from 'highlight.js/lib/languages/scss'
import ruby from 'highlight.js/lib/languages/ruby'

import styles from './code.module.scss'

const DEFAULT_LANGUAGE = 'plaintext'
const languages = new Map()
languages.set('javascript', javascript)
languages.set('sql', sql)
languages.set('plaintext', plaintext)
languages.set('xml', xml)
languages.set('ruby', ruby)
languages.set('scss', scss)

languages.forEach((langModule, langName) => {
  hljs.registerLanguage(langName, langModule)
})

type Props = { value: string, language: string }

function Code({ value, language: rawLanguage }: Props) {
  const language = languages.has(rawLanguage) ? rawLanguage : DEFAULT_LANGUAGE

  const codeBlock = useRef()

  useEffect(() => {
    hljs.highlightBlock(codeBlock.current)
  }, [value, language])

  return (
    <pre className={styles.container}>
      <code
        className={classnames(`language-${language}`, styles.code)}
        ref={codeBlock}
      >
        {value}
      </code>
    </pre>
  )
}

export default Code
