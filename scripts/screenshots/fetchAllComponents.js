const sortBy = require('lodash/sortBy')
const flattenDeep = require('lodash/flattenDeep')
const { sleep } = require('./helpers')

const pushAll = (arr, items) => arr.push.apply(arr, items)

const formatLink = (parsedStyleguideURL, relativeLink) => {
  if (parsedStyleguideURL.protocol === 'file:') {
    return `file://${relativeLink}`
  } else {
    return `${parsedStyleguideURL.toString()}${relativeLink}`
  }
}

const getComponentNameFromTestId = testId => {
  return testId.split('-example-')[0]
}

/**
 * Fetch all available components on the styleguide and returns an array
 * of { name, link } describing each component.
 * Components are sorted by name.
 */
const fetchAllComponents = async (page, args, config) => {
  const styleguideIndexURL = `${args.styleguideUrl}/index.html`

  console.log(`➡️ Opening styleguide ${styleguideIndexURL}`)
  await page.goto(styleguideIndexURL, {
    waitUntil: 'load',
    timeout: 0
  })

  console.log('➡️ Extracting links')

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
      .filter(x => x !== 'Cozy-ui documentation') // see section's name in styleguide.config.js
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

module.exports = fetchAllComponents
