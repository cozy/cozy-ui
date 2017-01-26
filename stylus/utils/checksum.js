'use strict'

var md5 = require('md5')

var plugin = function () {
  return function (style) {
    style.define('checksum', function (node, long) {
      var nodename = node.toString().replace(/'/g, '')
      var hash = md5(nodename)

      if (!long) {
        hash = hash.slice(0, 6)
      }

      return hash
    })
  }
}

module.exports = plugin
