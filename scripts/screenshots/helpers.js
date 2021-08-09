const path = require('path')
const fs = require('fs')

const builtinViewports = {
  mobile: '320x480',
  desktop: '800x600'
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const readConfig = async () => {
  const configPath = path.join(process.cwd(), 'rsgscreenshots.json')
  if (fs.existsSync(configPath)) {
    return JSON.parse(fs.readFileSync(configPath))
  } else {
    return {}
  }
}

const pathArgument = p => {
  if (p.startsWith('/')) {
    return p
  } else {
    return path.join(process.cwd(), p)
  }
}

const urlArgument = rawURL => {
  const c = new URL(rawURL) //eslint-disable-line no-unused-vars
  return rawURL
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
  builtinViewports,
  readConfig,
  parseViewportArgument,
  sleep,
  pathArgument,
  urlArgument
}
