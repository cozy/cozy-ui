'use strict'

var plugin = function () {
  return function (style) {
    return style.define('split', function (delimiter, node) {
      var nodename = node.toString().replace(/'/g, '')
      delimiter = delimiter.toString().replace(/'/g, '')
      return nodename.split(delimiter)
    })
  }
}

module.exports = plugin
