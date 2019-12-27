export default function getElementsBetween(
  base,
  beginningFn,
  endingFn,
  tagElement = () => {}
) {
  const elements = []
  let target = []
  let skip = true

  base.forEach(element => {
    if (beginningFn(element)) {
      skip = false
      target = []
      return
    }

    if (skip) {
      return
    }

    if (endingFn(element)) {
      skip = true
      elements.push(target)
    } else {
      target.push(element)
    }
  })

  return elements
}
