function defaultTemplate(
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports }
) {
  const plugins = ['jsx']
  if (opts.typescript) {
    plugins.push('typescript')
  }
  const typeScriptTpl = template.smart({ plugins, preserveComments: true })
  const twakeFileName =
    opts.state.filePath.replace(/^.*[\\/]/, '').split('.svg')[0] + '_twake'
  const capTwakeFileName =
    twakeFileName.charAt(0).toUpperCase() + twakeFileName.slice(1)
  const TwakeComponentName = componentName.name + 'Twake'

  const header = `// Automatically created, please run \`scripts/generate-svgr-icon.sh ${opts.state.filePath}\` to regenerate
import { isTwakeTheme } from '../helpers/isTwakeTheme'
import ${TwakeComponentName} from './${capTwakeFileName}'`

  for (let imp of imports) {
    if (imp.source.value !== 'react') {
      continue
    }
    for (let specifier of imp.specifiers) {
      if (
        specifier.type === 'ImportNamespaceSpecifier' &&
        specifier.local.name === 'React'
      ) {
        specifier.type = 'ImportDefaultSpecifier'
      }
    }
  }

  return typeScriptTpl.ast`${header}

${imports}
${interfaces}
function ${componentName}(${props}) {
  if (isTwakeTheme()) return ${TwakeComponentName}(${props})

  return ${jsx};
}
${exports}
  `
}
module.exports = defaultTemplate
