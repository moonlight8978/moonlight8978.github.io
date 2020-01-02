// @flow

import React from 'react'
import type { Node } from 'react'

import styles from './list.module.scss'

type ListProps = { children: Node }

function UnorderedList({ children }: ListProps) {
  return <ul className={styles.list}>{children}</ul>
}

function OrderedList({ children }: ListProps) {
  return <ol className={styles.list}>{children}</ol>
}

type Props = ListProps & {
  ordered: boolean,
}

function List({ ordered, children }: Props) {
  const Component = ordered ? OrderedList : UnorderedList

  return <Component>{children}</Component>
}

export default List
