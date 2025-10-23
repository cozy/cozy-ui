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
  const automaticallyCreatedMention = `// Automatically created, please run \`scripts/generate-svgr-icon.sh ${opts.state.filePath}\` to regenerate`

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

  return typeScriptTpl.ast`${automaticallyCreatedMention}

${imports}
${interfaces}
function ${componentName}(${props}) {
  return ${jsx};
}
${exports}
  `
}
module.exports = defaultTemplate
