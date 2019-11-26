const oldToNewPaths = {
  // Icons moved from /ui/ folder to /illus/
  'ui/bottom-select': 'illus/bottom-select',
  'ui/check-white': 'illus/check-white',
  'ui/cozy': 'illus/cozy',
  'ui/dash-white': 'illus/dash-white',
  'ui/top-select': 'illus/top-select',

  // Icons moved from /illus/ folder to /ui/
  'illus/magic-trick': 'ui/magic-trick'
}

const oldToNewNames = {
  'arrow-left': 'previous',
  'arrow-right': 'next',
  arrow: 'dropdown',
  back: 'left',
  'check-circleless': 'check',
  'cozy-negative': 'cloud',
  delete: 'trash',
  destroy: 'trash',
  display: 'eye',
  'file-new': 'file-add',
  forward: 'right',
  hide: 'eye-closed',
  mail: 'email',
  'small-arrow': 'bottom'
}

const iconRoot = 'cozy-ui/assets/icons'
const makeSureUseNewPath = source => {
  if (!source.value.startsWith(iconRoot)) {
    return
  }

  const iconPath = source.value.slice(iconRoot.length + 1)
  const newPath = oldToNewPaths[iconPath]

  if (newPath) {
    source.value = iconRoot + '/' + newPath
  }
}

const makeSureUseNewName = source => {
  if (!source.value.startsWith(iconRoot)) {
    return
  }

  const [iconName] = source.value.split('/').reverse()
  const newName = oldToNewNames[iconName]

  if (newName) {
    source.value = source.value.replace(iconName, newName)
  }
}

const updateToNewIcon = (j, jsxComponent) => {
  const iconAttr = jsxComponent.node.attributes.find(
    attr => attr.name.name == 'icon'
  )
  if (!iconAttr) {
    return
  }
  const newName = oldToNewNames[iconAttr.value.value]
  if (newName) {
    iconAttr.value = j.literal(newName)
  }
}

export default function transformer(file, api) {
  const j = api.jscodeshift
  const root = j(file.source)
  const imports = root.find(j.ImportDeclaration)
  imports.forEach(importDeclaration => {
    const iDec = importDeclaration.node
    makeSureUseNewPath(iDec.source)
    makeSureUseNewName(iDec.source)
  })
  const jsxIcons = root.find(j.JSXOpeningElement, { name: { name: 'Icon' } })
  jsxIcons.forEach(jsxIcon => updateToNewIcon(j, jsxIcon))

  const buttons = root.find(j.JSXOpeningElement, { name: { name: 'Button' } })
  buttons.forEach(jsxButton => updateToNewIcon(j, jsxButton))

  return root.toSource()
}
