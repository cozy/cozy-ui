#!/usr/bin/env node

const { prepareFS, prepareBrowser } = require('./screenshots/prepares')
const screenshotReactStyleguide = require('./screenshots/screenshotReactStyleguide')
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

  console.log('\n⌛ Preparing screenshot directory...')
  await prepareFS({
    screenshotDir: args.screenshotDir,
    emptyScreenshotDir: args.emptyScreenshotDir
  })
  console.log('✅ Done. Screenshot directory prepared')

  for (const theme of [
    { type: 'light', variant: 'normal' },
    { type: 'light', variant: 'inverted' },
    { type: 'dark', variant: 'normal' },
    { type: 'dark', variant: 'inverted' }
  ]) {
    console.log(
      `\n✨ Running process for '${theme.type} ${theme.variant}' theme...`
    )
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

    console.log(
      `✅ Done. Screenshots completed for '${theme.type} ${theme.variant}' theme.`
    )

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
