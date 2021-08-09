const path = require('path')
const { sleep } = require('./helpers')

const rootDirectory = path.join(__dirname, '../')

const formatViewport = viewport => `${viewport.width}x${viewport.height}`

const defaultGetScreenshotName = ({ component, viewport, suffix }) =>
  `${component.testId}-${suffix ? `${suffix}-` : ''}${formatViewport(
    viewport
  )}.png`

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
      fullPage: true,
      captureBeyondViewport: false
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

module.exports = screenshotComponent
