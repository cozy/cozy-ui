/** Used to resolve relative paths in imports and search/replace in the resolved path  */

const { declare } = require('@babel/helper-plugin-utils')
const { types: t } = require('@babel/core')
const path = require('path')

module.exports = declare((api, options) => {
  api.assertVersion(7)
  return {
    name: 'transform-relative-paths',

    visitor: {
      ImportDeclaration: {
        exit({ node }, state) {
          if (node.source.value.startsWith('.')) {
            const sourcePath = path.dirname(state.file.opts.filename)
            const relativePath = node.source.value
            const absolutePath = path.resolve(sourcePath, relativePath)
            const replaced = absolutePath.replace(options.from, options.to)

            // Do not allow absolute paths
            if (!replaced.startsWith('/')) {
              node.source.value = replaced
            }
          }
        }
      }
    }
  }
})
