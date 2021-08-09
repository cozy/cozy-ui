const path = require('path')
const fs = require('fs')

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const readConfig = async () => {
  const configPath = path.join(process.cwd(), 'rsgscreenshots.json')
  if (fs.existsSync(configPath)) {
    return JSON.parse(fs.readFileSync(configPath))
  } else {
    return {}
  }
}

const builtinViewports = {
  mobile: '320x480',
  desktop: '800x600'
}

const parseViewportArgument = viewportStr => {
  viewportStr = builtinViewports[viewportStr] || viewportStr
  const splitted = viewportStr.split('x')
  if (!splitted[1]) {
    console.warn(
      `Viewport format unsupported (${viewportStr}), supported format example: 800x600. You can also use built-in viewport names: ${Object.keys(
        builtinViewports
      ).join(', ')}.`
    )
    throw new Error('Bad viewport format')
  }
  return { width: parseInt(splitted[0]), height: parseInt(splitted[1]) }
}

module.exports = {
  sleep,
  readConfig,
  builtinViewports,
  parseViewportArgument
}
