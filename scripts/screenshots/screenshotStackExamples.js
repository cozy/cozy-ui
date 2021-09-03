const path = require('path')
const stackExampleApp = require('../../examples/stack')

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

module.exports = screenshotStackExamples
