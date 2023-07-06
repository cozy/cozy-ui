const stylus = require('stylus')
const cozyStylusPlugin = require('./stylus')

const renderStylus = function(css, filename) {
  try {
    return stylus(css)
      .use(cozyStylusPlugin())
      .set('filename', filename)
      .render()
  } catch (e) {
    console.log(e)
  }
}

module.exports = renderStylus
