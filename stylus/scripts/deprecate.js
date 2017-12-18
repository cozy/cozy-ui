const nodes = require('stylus/lib/nodes')
const chalk = require('chalk')

const last = function (arr) {
  return arr[arr.length - 1]
}
const plugin = function () {
  return function (style) {
    style.define('deprecate', function (msg) {
      const parentSel = last(this.selectorStack)[0]
      console.log(chalk.yellow('\nDeprecation: ' + parentSel.filename + ':' + parentSel.lineno + '\n' + msg.val))
      return nodes.null
    })
  }
}

module.exports = plugin
