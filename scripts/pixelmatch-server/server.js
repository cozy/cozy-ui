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

const q = new Queue(10)

app.set('pristineDir', path.join(__dirname, '../../old_screenshots'))
app.set('currentDir', path.join(__dirname, '../../screenshots'))
app.set('diffsDir', path.join(__dirname, '../../diffs'))

app.get('/', async (req, res) => {
  const data = await index(req)
  res.send(data)
})

app.use('/screenshots', express.static(app.get('currentDir')))
app.use('/old_screenshots', express.static(app.get('pristineDir')))
app.use(
  '/diffs',
  async (req, res, next) => {
    const filename = req.url.slice(1)
    const currentFile = path.join(app.get('currentDir'), filename)
    const diffFile = path.join(app.get('diffsDir'), filename)
    const shouldDiff = await shouldRegenerateDiff(currentFile, diffFile)
    if (shouldDiff) {
      q.enqueue(() => performDiff(app, filename)).then(next)
    } else {
      next()
    }
  },
  express.static(app.get('diffsDir'))
)

app.listen(port, () => {
  console.log(`Pixelmatch server serving on http://localhost:${port}`)
})
