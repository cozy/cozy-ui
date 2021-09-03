#!/usr/bin/env node

const { prepareFS, prepareBrowser } = require('./screenshots/prepares')
const screenshotReactStyleguide = require('./screenshots/screenshotReactStyleguide')
const screenshotStackExamples = require('./screenshots/screenshotStackExamples')
const screenshotKSSStyleguide = require('./screenshots/screenshotKSSStyleguide')
const makeParser = require('./screenshots/parser')
const { readConfig, parseViewportArgument } = require('./screenshots/helpers')

let puppeteer
try {
  puppeteer = require('puppeteer')
} catch (e) {
  console.error(e)
  console.log(
    'Could not import puppeteer, you should install it if you want to take screenshots'
  )
  process.exit(1)
}

/**
 * Fetches all components from styleguide and takes a screenshot of each.
 */
const main = async () => {
  const parser = makeParser()
  const config = await readConfig()
  const args = parser.parseArgs()

  const parsedViewport = parseViewportArgument(args.viewport)

  await prepareFS({
    screenshotDir: args.screenshotDir,
    emptyScreenshotDir: args.emptyScreenshotDir
  })
  const { browser, page } = await prepareBrowser(puppeteer, {
    viewport: parsedViewport
  })

  if (args.mode == 'react') {
    await screenshotReactStyleguide(page, args, config)
  } else if (args.mode == 'stack') {
    await screenshotStackExamples(page, args)
  } else if (args.mode == 'kss') {
    await screenshotKSSStyleguide(page, args)
  }

  await browser.close()
}

if (require.main === module) {
  main().catch(e => {
    console.error(e)
    process.exit(1)
  })
}
