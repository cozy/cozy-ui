const path = require('path')

const LINK_BASE = 'file://'

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

module.exports = screenshotKSSStyleguide
