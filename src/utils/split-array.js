export default function splitArray(array, splittingFn) {
  if (array.length === 0) {
    return []
  }

  const elements = []
  let target = []

  array.forEach((element, index) => {
    const isSplitter = splittingFn(element)
    if (isSplitter && index === 0) {
      return
    }

    if (isSplitter) {
      elements.push(target)
      target = []
    } else {
      target.push(element)
    }
  })
  elements.push(target)

  return elements
}
