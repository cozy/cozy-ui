###
Cozy-Ui

A [Cozy](http://cozy.io/) apps Ui SDK

https://github.com/m4dz/cozy-ui
AGPL-3.0 Licensed
###

path   = require 'path'
__base = path.resolve __dirname, '..', '..'


module.exports = exports = ->
    (style) ->
        style.set 'include css', true
        style.import require.resolve 'normalize.css'
        style.include __dirname

exports.version = require(path.join __base, 'package.json').version
exports.path    = __dirname
