const externalUrlRegexes = [
  /^https?:\/\//,
  /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/,
]

export default function isExternalUrl(url) {
  if (!url || typeof url !== 'string' || !url.trim()) {
    throw new Error(`${url} is not a valid URL.`)
  }

  return externalUrlRegexes.some(regex => url.match(regex))
}
