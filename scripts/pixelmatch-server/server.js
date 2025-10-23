const fs = require('fs')
const Handlebars = require('handlebars')
const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const Queue = require('./Queue')
const { parsePixelmatchOutput, performDiff } = require('./pixelmatch')

Handlebars.registerHelper('tojson', function(object) {
  return new Handlebars.SafeString(JSON.stringify(object))
})

const tpl = Handlebars.compile(
  fs.readFileSync(path.join(__dirname, './index.hbs')).toString()
)

const softRead = filename => {
  try {
    return fs.readFileSync(filename).toString()
  } catch (e) {
    return ''
  }
}

const index = async req => {
  const components = fs
    .readdirSync(app.get('currentDir'))
    .filter(x => x.endsWith('png'))
    .filter(x => (req.query.filter ? x.includes(req.query.filter) : true))
    .map(x => {
      const pixelmatchData = parsePixelmatchOutput(
        softRead(path.join(app.get('diffsDir'), `${x}.pixelmatch.txt`))
      )
      return {
        pixelmatchData,
        filename: x,
        show:
          (pixelmatchData && pixelmatchData.differentPixels > 0) ||
          !pixelmatchData.ok
      }
    })
  const data = tpl({ components, hasFilter: Boolean(req.query.filter) })
  return data.toString()
}

const shouldRegenerateDiff = async (currentFile, diffFile) => {
  if (!fs.existsSync(diffFile)) {
    return true
  }
  const diffStat = fs.statSync(diffFile)
  const currentStat = fs.statSync(currentFile)
  return diffStat.mtime < currentStat.mtime
}

const fsExistsPromise = filename => {
  return new Promise((resolve, reject) => {
    fs.exists(filename, (res, err) => {
      if (res !== undefined) {
        resolve(res)
      } else {
        console.log(res)
        reject(err)
      }
    })
  })
}

const asyncAssert = async (prom, message) => {
  try {
    const res = await prom
    if (!res) {
      console.error(message)
      process.exit(1)
    }
  } catch (e) {
    console.log('e', e)
    const err = new Error(`Error inside asyncAssert: ${e.message}`)
    err.original = e
    throw err
  }
}

const main = async () => {
  const pristineScreenshotsDir = path.join(
    __dirname,
    '../../pristine_screenshots'
  )
  const currentScreenshotsDir = path.join(__dirname, '../../screenshots')
  const diffsDir = path.join(__dirname, '../../diffs')

  await asyncAssert(
    fsExistsPromise(pristineScreenshotsDir),
    `${pristineScreenshotsDir} does not exist. Please create it and store pristine screenshots there.`
  )
  await asyncAssert(
    fsExistsPromise(currentScreenshotsDir),
    `${currentScreenshotsDir} does not exist. Please create it and store screenshots there.`
  )
  await asyncAssert(
    fsExistsPromise(diffsDir),
    `${diffsDir} does not exist. Please create it.`
  )

  app.set('pristineDir', pristineScreenshotsDir)
  app.set('currentDir', currentScreenshotsDir)
  app.set('diffsDir', diffsDir)

  console.log(
    `Comparing ${pristineScreenshotsDir} against ${currentScreenshotsDir}`
  )

  app.get('/', async (req, res) => {
    const data = await index(req)
    res.send(data)
  })

  app.use('/screenshots', express.static(app.get('currentDir')))
  app.use('/old_screenshots', express.static(app.get('pristineDir')))

  const diffQueue = new Queue(10)
  app.use(
    '/diffs',
    async (req, res, next) => {
      const filename = req.url.slice(1)
      const currentFile = path.join(app.get('currentDir'), filename)
      const diffFile = path.join(app.get('diffsDir'), filename)
      const shouldDiff = await shouldRegenerateDiff(currentFile, diffFile)
      if (shouldDiff) {
        diffQueue.enqueue(() => performDiff(app, filename)).then(next)
      } else {
        next()
      }
    },
    express.static(app.get('diffsDir'))
  )

  app.listen(port, () => {
    console.log(`Pixelmatch server serving on http://localhost:${port}`)
  })
}

if (require.main === module) {
  main().catch(e => {
    console.error(e)
    process.exit(1)
  })
}
