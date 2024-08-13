const path = require('path')
const fs = require('fs')

const emptyDirectory = directory => {
  for (const filename of fs.readdirSync(directory)) {
    fs.unlinkSync(path.join(directory, filename))
  }
}

/**
 * Ensure directories are ready for taking screenshots.
 *
 * - Throws if styleguide has not been built
 * - Creates the screenshot dir if it does not exist
 *
 * @param {string} options.screenshotDir - Where to store screenshots
 * @param {boolean} options.emptyScreenshotDir - Whether to empty the screenshot dir
 *
 */
const prepareFS = async options => {
  const { screenshotDir, emptyScreenshotDir } = options
  if (!fs.existsSync(screenshotDir)) {
    console.log(`Creating screenshot directory ${screenshotDir}`)
    fs.mkdirSync(screenshotDir)
  } else if (emptyScreenshotDir) {
    console.log(`Emptying screenshot directory ${screenshotDir}`)
    emptyDirectory(screenshotDir)
  }
}

/**
 * Opens and configure browser and page.
 * Returns { browser, page }
 */
const prepareBrowser = async (puppeteer, options) => {
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()
  // Put Argos in user agent
  await page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36; Argos'
  )
  await page.emulateMediaFeatures([
    { name: 'prefers-reduced-motion', value: 'reduce' }
  ])
  page.setViewport(options.viewport)
  await page.setDefaultNavigationTimeout(0)
  await page.evaluateOnNewDocument(({ type, variant }) => {
    localStorage.clear()
    localStorage.setItem('ui-theme-type', type)
    localStorage.setItem('ui-theme-variant', variant)
  }, options.theme)
  return { browser, page }
}

module.exports = { prepareFS, prepareBrowser }
