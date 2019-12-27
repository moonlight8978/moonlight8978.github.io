export default function getElementsBetween(
  base,
  beginningFn,
  endingFn,
  tagElement = () => null
) {
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
