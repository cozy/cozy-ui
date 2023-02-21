const fs = require('fs')

const themes = require('../../theme/themes')
const { parseViewportArgument } = require('./helpers')
const fetchAllComponents = require('./fetchAllComponents')
const screenshotComponent = require('./screenshotComponent')

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
    for (const theme of Object.keys(themes)) {
      await screenshotComponent(page, {
        component,
        componentConfig,
        screenshotDir: args.screenshotDir,
        viewport: componentViewport,
        theme
      })
    }
  }
}

module.exports = screenshotReactStyleguide
