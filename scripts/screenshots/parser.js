const path = require('path')
const { ArgumentParser } = require('argparse')
const { builtinViewports } = require('./helpers')

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

const makeParser = () => {
  const parser = new ArgumentParser()

  parser.addArgument('--mode', {
    choices: ['react', 'kss'],
    defaultValue: 'react'
  })
  parser.addArgument('--screenshot-dir', {
    required: true,
    dest: 'screenshotDir',
    type: pathArgument
  })
  parser.addArgument('--styleguide-url', {
    required: true,
    dest: 'styleguideUrl',
    type: urlArgument
  })
  parser.addArgument('--kss-dir', {
    required: true,
    dest: 'kssDir',
    type: pathArgument
  })
  parser.addArgument('--viewport', {
    defaultValue: builtinViewports.desktop
  })
  parser.addArgument('--no-empty-screenshot-dir', {
    action: 'storeFalse',
    defaultValue: true,
    dest: 'emptyScreenshotDir'
  })
  parser.addArgument('--component')
  parser.addArgument('--cache-file', {
    defaultValue: '/tmp/cozy-ui-e2e-screenshots-cache.json',
    dest: 'cacheFile'
  })
  parser.addArgument('--no-cache', {
    dest: 'cacheFile',
    action: 'storeFalse'
  })

  return parser
}

module.exports = makeParser
