const getColorSchemeMetaTag = () =>
  document.querySelector('meta[name="color-scheme"]')

export const getColorSchemeMetaTagContent = () =>
  getColorSchemeMetaTag()?.content

const updateColorSchemeMetaTagContent = content => {
  const colorSchemeMetaTag = getColorSchemeMetaTag()
  colorSchemeMetaTag.content = content
}

const createColorSchemeMetaTag = content => {
  const meta = document.createElement('meta')
  meta.name = 'color-scheme'
  meta.content = content

  document.head.prepend(meta)
}

export const createOrUpdateColorSchemeMetaTag = content => {
  const colorSchemeMetaTag = getColorSchemeMetaTag()

  if (!colorSchemeMetaTag) {
    createColorSchemeMetaTag(content)
  } else {
    updateColorSchemeMetaTagContent(content)
  }
}
