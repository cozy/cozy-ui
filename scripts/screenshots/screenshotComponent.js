const path = require('path')
const { sleep } = require('./helpers')

const rootDirectory = path.join(__dirname, '../')

const formatViewport = viewport => `${viewport.width}x${viewport.height}`

const getDefaultScreenshotName = ({
  component,
  viewport,
  suffix,
  type,
  variant
}) =>
  `${component.testId}-${
    suffix ? `${suffix}-` : ''
  }${type}-${variant}-${formatViewport(viewport)}.png`

/**
 * Screenshot a component to the screenshot directory, taking care of
 * resizing the viewport before-hand so that the viewport fits the
 * component.
 */
const screenshotComponent = async (page, options) => {
  const {
    component,
    screenshotDir,
    viewport,
    type,
    variant,
    componentConfig
  } = options
  const { link, name } = component

  await page.goto(link)
  await sleep(200) // to be sure the page is entirely loaded

  const getScreenshotName =
    options.getScreenshotName || getDefaultScreenshotName

  const screenshot = async suffix => {
    await page.screenshot({
      path: path.join(
        screenshotDir,
        getScreenshotName({ component, viewport, suffix, type, variant })
      ),
      fullPage: componentConfig?.fullPage ?? true,
      optimizeForSpeed: true,
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
    console.log(
      `Screenshotting ${name} for ${type}-${variant} theme at ${formatViewport(
        viewport
      )}`
    )
    await screenshot()
  }
}

module.exports = screenshotComponent
