// @flow

import type { CheckElementFn } from './types'

type TagFn<T> = (element: T) => string | null

export type TaggedElements<T> = {
  data: Array<T>,
  tag: string | null,
}

export default function getElementsBetween<T>(
  base: Array<T>,
  beginningFn: CheckElementFn<T>,
  endingFn: CheckElementFn<T>,
  tagElement: TagFn<T> = () => null
): Array<TaggedElements<T>> {
  if (base.length === 0) {
    return []
  }

  const elements = []
  let target
  let skip = true

  base.forEach(element => {
    if (beginningFn(element)) {
      skip = false
      target = { data: [], tag: tagElement(element) }
      return
    }

    if (skip) {
      return
    }

    if (endingFn(element)) {
      skip = true
      elements.push(target)
    } else {
      target.data.push(element)
    }
  })

  return elements
}
