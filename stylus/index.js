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

const NODE_MODULES_PATH = path.resolve(__dirname, '../..')

var plugin = function () {
  return function (style) {
    style.set('include css', true)
    style.include(__dirname)
    style.define('embed', stylus.url({
        paths: [path.join(__dirname, '../assets')]
      }))
    style.set('paths', [...style.options.paths, NODE_MODULES_PATH])
    return style
  }
}

plugin.version = require(path.join(__dirname, '../package.json')).version
plugin.path = __dirname

module.exports = plugin
