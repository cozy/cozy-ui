#!/usr/bin/env node

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
const path = require('path')
const fs = require('fs')
const sortBy = require('lodash/sortBy')
const { ArgumentParser } = require('argparse')

const emptyDirectory = directory => {
  for (const filename of fs.readdirSync(directory)) {
    fs.unlinkSync(path.join(directory, filename))
  }
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const defaultGetScreenshotName = ({ component, viewport }) =>
  `${component.testId}-${formatViewport(viewport)}.png`

const formatViewport = viewport => `${viewport.width}x${viewport.height}`

const pushAll = (arr, items) => arr.push.apply(arr, items)
/**
 * Screenshot a component to the screenshot directory, taking care of
 * resizing the viewport before-hand so that the viewport fits the
 * component.
 */
const screenshotComponent = async (page, options) => {
  const { component, screenshotDir, viewport } = options
  const { link, name } = component
  await page.goto(link, { waitUntil: 'load', timeout: 0 })
  await sleep(100)

  const getScreenshotName =
    options.getScreenshotName || defaultGetScreenshotName

  console.log(`Screenshotting ${name} at ${formatViewport(viewport)}`)
  await page.bringToFront()
  await page.screenshot({
    path: path.join(screenshotDir, getScreenshotName({ component, viewport })),
    fullPage: true
  })
}

const getComponentNameFromTestId = testId => {
  return testId.split('-example-')[0]
}

/**
 * Fetch all available components on the styleguide and returns an array
 * of { name, link } describing each component.
 * Components are sorted by name.
 */
const fetchAllComponents = async (page, styleguideIndexURL) => {
  console.log(`Opening page ${styleguideIndexURL}`)
  await page.goto(styleguideIndexURL, {
    waitUntil: 'load',
    timeout: 0
  })

  console.log('Extracting links')
  // We want to take screenshot for individual example, so we :
  // - extract categories (link from the side menu with no ?id=)
  // - go to category's page
  // - look for `.rsg--controls-40 a` which is the open isolated for examples
  // - look for its closest data-testid to get the name
  const categoriesName = await page.evaluate(() => {
    const sidebarSelector = '.rsg--sidebar-4'
    return Array.from(document.querySelectorAll(`${sidebarSelector} a`))
      .filter(v => !v.href.includes('?id='))
      .map(x => x.text)
  })
  const sortedCategoriesNames = sortBy(
    categoriesName.map(catName => ({
      link: styleguideIndexURL + '#/' + catName,
      name: catName
    })),
    x => x.name
  )
  const allLinks = []
  for (const cate of sortedCategoriesNames) {
    await page.goto(cate.link, { waitUntil: 'load', timeout: 0 })
    await sleep(100)

    const componentLinks = await page.evaluate(() => {
      const componentSectionSelector = '.rsg--root-23'
      const toolbarSelector = '.rsg--toolbar-11'
      const openIsolatedButtonSelector = '.rsg--button-21'
      const componentToolbars = Array.from(
        document.querySelectorAll(
          `${componentSectionSelector} ${toolbarSelector}`
        )
      )
      return componentToolbars.map(toolbar => {
        const isolateLink = toolbar.querySelector(openIsolatedButtonSelector)
        const testId = isolateLink.dataset.testid.replace('-isolate-button', '')
        return {
          testId,
          link: isolateLink.getAttribute('href')
        }
      })
    })

    pushAll(
      allLinks,
      componentLinks.map(link => ({
        ...link,
        link: 'file://' + link.link,
        name: getComponentNameFromTestId(link.testId)
      }))
    )
  }
  return allLinks
}

/**
 * Ensure directories are ready for taking screenshots.
 *
 * - Throws if styleguide has not been built
 * - Creates the screenshot dir if it does not exist
 *
 * @param {string} options.styleguideDir - Where are the HTML pages of the styleguide
 * @param {string} options.screenshotDir - Where to store screenshots
 * @param {boolean} options.emptyScreenshotDir - Whether to empty the screenshot dir
 *
 */
const prepareFS = async options => {
  const { styleguideDir, screenshotDir, emptyScreenshotDir } = options
  if (!fs.existsSync(styleguideDir)) {
    throw new Error(
      `Styleguide does not seem to have been built (searching in ${styleguideDir}). Please run yarn build:doc:react.`
    )
  }

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
const prepareBrowser = async options => {
  const browser = await puppeteer.launch()
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
  console.log('Browser opened and set up')
  return { browser, page }
}

const pathArgument = p => {
  if (p.startsWith('/')) {
    return p
  } else {
    return path.join(process.cwd(), p)
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

const readConfig = async () => {
  const configPath = path.join(process.cwd(), 'rsgscreenshots.json')
  if (fs.existsSync(configPath)) {
    return JSON.parse(fs.readFileSync(configPath))
  } else {
    return {}
  }
}

/**
 * Fetches all components from styleguide and takes a screenshot of each.
 */
const main = async () => {
  const parser = new ArgumentParser()

  parser.addArgument('--screenshot-dir', {
    required: true,
    dest: 'screenshotDir',
    type: pathArgument
  })
  parser.addArgument('--styleguide-dir', {
    required: true,
    dest: 'styleguideDir',
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

  const config = await readConfig()
  const args = parser.parseArgs()

  const parsedViewport = parseViewportArgument(args.viewport)

  await prepareFS({
    styleguideDir: args.styleguideDir,
    screenshotDir: args.screenshotDir,
    emptyScreenshotDir: args.emptyScreenshotDir
  })
  const { browser, page } = await prepareBrowser({ viewport: parsedViewport })

  const styleguideIndexURL = `file://${path.join(
    args.styleguideDir,
    '/index.html'
  )}`
  let components = await fetchAllComponents(page, styleguideIndexURL)
  if (args.component) {
    components = components.filter(component =>
      component.name.includes(args.component)
    )
  }
  console.log('Screenshotting components')
  for (const component of components) {
    const componentConfig = config[component.name] || {}
    const componentViewportSpec =
      (componentConfig.viewports && componentConfig.viewports[args.viewport]) ||
      null
    const componentViewport = componentViewportSpec
      ? parseViewportArgument(componentViewportSpec)
      : parsedViewport
    page.setViewport(componentViewport)
    await screenshotComponent(page, {
      component,
      screenshotDir: args.screenshotDir,
      viewport: componentViewport
    })
  }

  await browser.close()
}

if (require.main === module) {
  main().catch(e => {
    console.error(e)
    process.exit(1)
  })
}
