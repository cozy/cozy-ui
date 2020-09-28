const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 3000

const serveStatic = (res, filepath, contentType) => {
  res.contentType(contentType)
  res.send(fs.readFileSync(path.join(__dirname, filepath)))
}

const themes = {
  red: 'custom-ui.red.css'
}

const getStyle = req => {
  const stylesheeetPath = themes[req.query.theme]
  if (!stylesheeetPath) {
    return ''
  } else {
    return fs.readFileSync(path.join(__dirname, stylesheeetPath))
  }
}

app.get('/kitten-avatar.jpg', (req, res) => {
  serveStatic(res, 'kitten-avatar.jpg', 'image/jpeg')
})

app.get('/cozy-ui.min.css', (req, res) => {
  serveStatic(res, '../../dist/cozy-ui.min.css', 'text/css')
})

app.get('/cozy-ui.utils.min.css', (req, res) => {
  serveStatic(res, '../../dist/cozy-ui.utils.min.css', 'text/css')
})

app.get('/connection', (req, res) => {
  const template = fs.readFileSync(path.join(__dirname, 'connection.html'))
  const style = getStyle(req)
  res.send(template.toString().replace('{{ STYLE }}', style))
})

if (require.main === module) {
  app.listen(port, async () => {
    console.log(`Stack examples server listening at http://localhost:${port}`)
  })
}

module.exports = app
