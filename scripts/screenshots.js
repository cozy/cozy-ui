#!/usr/bin/env node

const { readConfig, parseViewportArgument } = require('./screenshots/helpers')
const makeParser = require('./screenshots/parser')
const { prepareFS, prepareBrowser } = require('./screenshots/prepares')
const screenshotKSSStyleguide = require('./screenshots/screenshotKSSStyleguide')
const screenshotReactStyleguide = require('./screenshots/screenshotReactStyleguide')

let puppeteer
try {
  puppeteer = require('puppeteer-core')
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

  console.log('\n⌛ Preparing screenshot directory...')
  await prepareFS({
    screenshotDir: args.screenshotDir,
    emptyScreenshotDir: args.emptyScreenshotDir
  })
  console.log('✅ Done. Screenshot directory prepared')

  for (const theme of ['light', 'dark']) {
    console.log(`\n✨ Running process for '${theme}' theme...`)
    console.log('\n⌛ Preparing browser...')

    const { browser, page } = await prepareBrowser(puppeteer, {
      viewport: parsedViewport,
      theme
    })

    console.log('✅ Done. Browser opened and set up')
    console.log('\n⌛ Preparing screenshots...')

    if (args.mode == 'react') {
      await screenshotReactStyleguide(page, args, config, theme)
    } else if (args.mode == 'kss') {
      await screenshotKSSStyleguide(page, args)
    }

    console.log(`✅ Done. Screenshots completed for '${theme}' theme.`)

    await browser.close()
    console.log('Browser closed')
  }
}

if (require.main === module) {
  main().catch(e => {
    console.error(e)
    process.exit(1)
  })
}
