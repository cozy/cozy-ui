/**
 * Cozy-Ui
 *
 * A [Cozy](http://cozy.io/) apps Ui SDK
 *
 * https://github.com/m4dz/cozy-ui
 * AGPL-3.0 Licensed
 */

'use strict'

var path = require('path')
var stylus = require('stylus')

var plugin = function () {
  return function (style) {
    style.set('include css', true)
    style.define('embed', stylus.url({
      paths: [path.join(__dirname, '../assets')]
    }))
    style.import(require.resolve('normalize.css'))
    style.import(path.join(__dirname, './index.styl'))
    return style
  }
}

plugin.version = require(path.join(__dirname, '../package.json')).version
plugin.path = __dirname

module.exports = plugin
