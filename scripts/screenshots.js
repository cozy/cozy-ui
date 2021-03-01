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
const flattenDeep = require('lodash/flattenDeep')
const stackExampleApp = require('../examples/stack')
const { ArgumentParser } = require('argparse')

const rootDirectory = path.join(__dirname, '../')

const emptyDirectory = directory => {
  for (const filename of fs.readdirSync(directory)) {
    fs.unlinkSync(path.join(directory, filename))
  }
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const defaultGetScreenshotName = ({ component, viewport, suffix }) =>
  `${component.testId}-${suffix ? `${suffix}-` : ''}${formatViewport(
    viewport
  )}.png`

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

  const screenshot = async suffix => {
    await page.screenshot({
      path: path.join(
        screenshotDir,
        getScreenshotName({ component, viewport, suffix })
      ),
      fullPage: true
    })
  }

  await page.bringToFront()

  if (options.componentConfig && options.componentConfig.script) {
    const componentScript = require(path.join(
      rootDirectory,
      options.componentConfig.script
    ))
    console.log(`Executing custom script for ${name}`)
    await componentScript(page, screenshot)
  } else {
    console.log(`Screenshotting ${name} at ${formatViewport(viewport)}`)
    await screenshot()
  }
}

const getComponentNameFromTestId = testId => {
  return testId.split('-example-')[0]
}

const LINK_BASE = 'file://'

const formatLink = (parsedStyleguideURL, relativeLink) => {
  if (parsedStyleguideURL.protocol === 'file:') {
    return `file://${relativeLink}`
  } else {
    return `${parsedStyleguideURL.toString()}${relativeLink}`
  }
}

/**
 * Fetch all available components on the styleguide and returns an array
 * of { name, link } describing each component.
 * Components are sorted by name.
 */
const fetchAllComponents = async (page, args, config) => {
  const styleguideIndexURL = `${args.styleguideUrl}/index.html`

  console.log(`Opening styleguide ${styleguideIndexURL}`)
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
  const parsedStyleguideURL = new URL(args.styleguideUrl)
  for (const cate of sortedCategoriesNames) {
    await page.goto(cate.link, { waitUntil: 'load', timeout: 0 })
    await sleep(100)

    const componentLinks = flattenDeep(
      await page.evaluate(config => {
        const componentSectionSelector = '.rsg--root-23'
        const exampleToolbarSelector = '.rsg--toolbar-41'
        const componentToolbarSelector = '.rsg--toolbar-11'
        const openIsolatedButtonSelector = '.rsg--button-21'
        const componentContainers = document.querySelectorAll(
          componentSectionSelector
        )

        return Array.from(componentContainers, componentContainer => {
          const componentId = componentContainer.dataset.testid.replace(
            '-container',
            ''
          )
          const perExampleScreenshot =
            config[componentId] && config[componentId].perExampleScreenshot

          const isolateButtons = componentContainer.querySelectorAll(
            `${
              perExampleScreenshot
                ? exampleToolbarSelector
                : componentToolbarSelector
            } ${openIsolatedButtonSelector}`
          )
          return Array.from(isolateButtons).map(btn => {
            const testId = btn.dataset.testid.replace('-isolate-button', '')
            return {
              testId,
              link: btn.getAttribute('href')
            }
          })
        })
      }, config)
    )

    pushAll(
      allLinks,
      componentLinks.map(link => ({
        ...link,
        link: formatLink(parsedStyleguideURL, link.link),
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

const loadJSON = filename => {
  try {
    return JSON.parse(fs.readFileSync(filename).toString())
  } catch {
    return null
  }
}

const cacheToDisk = (fnToCache, options) =>
  async function() {
    const { cacheFile } = options
    let res
    if (cacheFile) {
      res = loadJSON(cacheFile)
    }
    if (res) {
      options.onLoadCache && options.onLoadCache()
    } else {
      res = await fnToCache.apply(this, arguments)
      if (cacheFile) {
        fs.writeFileSync(cacheFile, JSON.stringify(res, null, 2))
        options.onSaveCache && options.onSaveCache()
      }
    }
    return res
  }

const screenshotReactStyleguide = async (page, args, config) => {
  const cachedFetchAllComponents = cacheToDisk(fetchAllComponents, {
    cacheFile: args.cacheFile,
    onLoadCache: () =>
      console.log(`Using cached component list from ${args.cacheFile}`),
    onSaveCache: () => console.log(`Saved component list to ${args.cacheFile}`)
  })
  let components = await cachedFetchAllComponents(page, args, config)
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
      : parseViewportArgument(args.viewport)
    await page.setViewport(componentViewport)
    await screenshotComponent(page, {
      component,
      componentConfig,
      screenshotDir: args.screenshotDir,
      viewport: componentViewport
    })
  }
}

const screenshotStackExamples = async (page, args) => {
  return new Promise(async (resolve, reject) => {
    try {
      const port = 3000
      const examples = [
        { name: 'connection', url: 'connection' },
        { name: 'connection-red', url: 'connection?theme=red' }
      ]
      const server = stackExampleApp.listen(port, async () => {
        console.log(
          `Stack examples server listening at http://localhost:${port}`
        )

        for (let example of examples) {
          await page.goto(`http://localhost:3000/${example.url}`, {
            waitUntil: 'load',
            timeout: 0
          })

          await page.bringToFront()
          await page.screenshot({
            path: path.join(
              args.screenshotDir,
              `stack-example-${example.name}.png`
            ),
            fullPage: true
          })
        }

        server.close()
        resolve()
      })
    } catch (e) {
      reject(e)
    }
  })
}

const screenshotKSSStyleguide = async (page, args) => {
  const resolveLink = relativePage =>
    `${LINK_BASE}${path.join(args.kssDir, relativePage)}`
  const kssPage = resolveLink('index.html')
  await page.goto(kssPage)

  // We do not screenshot utilities because
  //  - their screenshots are huge
  //  - they do not change often and the probability of mistake is low
  const ignore = [/^utilities/]

  const WIDTH = 800
  await page.setViewport({ width: WIDTH, height: 800 })
  const links = await page.evaluate(() => {
    const navLinks = Array.from(
      document.querySelectorAll('.kss-nav > .kss-nav__item > a[href]')
    )
    return navLinks.map(node => node.getAttribute('href'))
  })

  for (const link of links) {
    await page
    await page.goto(resolveLink(link))

    const sections = Array.from(await page.$$('.kss-section--depth-2')).concat(
      Array.from(await page.$$('.kss-section--depth-3'))
    )
    for (let section of sections) {
      const idProp = await section.getProperty('id')
      const idValue = await idProp.jsonValue()
      const id = idValue.replace('kssref-', '')
      const ref = await section.$eval('.kss-section__ref', el => el.textContent)

      if (ignore.filter(rx => rx.exec(id)).length > 0) {
        console.log('Ignoring', id)
        continue
      }

      // Need to resize the viewport otherwise screenshots are blank
      const body = await page.$('body')
      const bodySize = await body.boundingBox()
      await page.setViewport({
        height: Math.ceil(bodySize.height),
        width: WIDTH
      })

      console.log('Screenshotting section', idValue)
      await page.screenshot({
        clip: await section.boundingBox(),
        path: path.join(args.screenshotDir, `kss-${ref}-${id}.png`)
      })
    }
  }
}

const urlArgument = rawURL => {
  const c = new URL(rawURL)
  return rawURL
}

/**
 * Fetches all components from styleguide and takes a screenshot of each.
 */
const main = async () => {
  const parser = new ArgumentParser()

  parser.addArgument('--mode', {
    choices: ['react', 'stack', 'kss'],
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

  const config = await readConfig()
  const args = parser.parseArgs()

  const parsedViewport = parseViewportArgument(args.viewport)

  await prepareFS({
    screenshotDir: args.screenshotDir,
    emptyScreenshotDir: args.emptyScreenshotDir
  })
  const { browser, page } = await prepareBrowser({ viewport: parsedViewport })

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
