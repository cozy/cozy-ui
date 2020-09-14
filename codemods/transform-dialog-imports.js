const transformImports = require('@cozy/codemods/src/transform-imports')

const transformDialogImports = (file, api) => {
  const j = api.jscodeshift
  const root = j(file.source)

  transformImports(j, root, {
    imports: {
      Dialog: {
        importPath: 'cozy-ui/transpiled/react/Dialog',
        defaultImport: true
      },
      DialogFile: {
        importPath: 'cozy-ui/transpiled/react/Dialog',
        defaultImport: false
      },
      DialogContent: {
        importPath: 'cozy-ui/transpiled/react/Dialog',
        defaultImport: false
      },
      DialogTitle: {
        importPath: 'cozy-ui/transpiled/react/Dialog',
        defaultImport: false
      },
      DialogActions: {
        importPath: 'cozy-ui/transpiled/react/Dialog',
        defaultImport: false
      },
      DialogContentText: {
        importPath: 'cozy-ui/transpiled/react/Dialog',
        defaultImport: false
      },
      DialogCloseButton: {
        importPath: 'cozy-ui/transpiled/react/Dialog',
        defaultImport: false
      }
    }
  })

  return root.toSource({ quote: 'single' })
}

module.exports = transformDialogImports
