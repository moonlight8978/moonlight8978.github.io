const fg = require('fast-glob')
const fs = require('fs')
const path = require('path')

const ignoreFilePath = path.join(__dirname, '.clocignore')

const getIgnorePatters = path => {
  const raw = fs.readFileSync(ignoreFilePath).toString()
  return raw.split(/\n|\r\n]/).filter(line => line && !line.match(/^#/))
}

const run = async () => {
  const scanContext = process.argv[2]

  if (!scanContext) {
    console.log('Missing context')
    process.exit(1)
  }

  try {
    const ignorePatterns = getIgnorePatters(ignoreFilePath)
    const options = {
      ignore: ignorePatterns,
      onlyFiles: true,
      dot: true,
    }
    const baseScanPath = path.join(scanContext, '**/*')
    const files = await fg(baseScanPath, options)
    console.log(files.join('\n'))
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

run()
