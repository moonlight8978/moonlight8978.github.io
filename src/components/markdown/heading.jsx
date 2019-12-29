// @flow

import React, { useMemo } from 'react'
import type { Node, ComponentType } from 'react'

import styles from './heading.module.scss'

type HeadingHtmlProps = {| children: string | Node |}

const H1 = ({ children }: HeadingHtmlProps) => (
  <h1 className={styles.h1}>{children}</h1>
)
const H2 = ({ children }: HeadingHtmlProps) => (
  <h2 className={styles.h2}>{children}</h2>
)
const H3 = ({ children }: HeadingHtmlProps) => (
  <h3 className={styles.h3}>{children}</h3>
)
const H4 = ({ children }: HeadingHtmlProps) => (
  <h4 className={styles.h4}>{children}</h4>
)
const H5 = ({ children }: HeadingHtmlProps) => (
  <h5 className={styles.h5}>{children}</h5>
)
const H6 = ({ children }: HeadingHtmlProps) => (
  <h6 className={styles.h6}>{children}</h6>
)

const headingMap = new Map([
  [1, H1],
  [2, H2],
  [3, H3],
  [4, H4],
  [5, H5],
  [6, H6],
])

type HeadingLevel = $Keys<typeof headingMap>
type HeadingElement = ComponentType<HeadingHtmlProps>

function getHeadingComponent(level: HeadingLevel): HeadingElement {
  return headingMap.get(level) || H6
}

type Props = {
  level: HeadingLevel,
  children: string,
}

export default function Heading({ level, children }: Props) {
  const HeadingComponent = useMemo(() => getHeadingComponent(level), [level])

  return <HeadingComponent>{children}</HeadingComponent>
}
