import defaultValues from './defaultValues'
import makeInvertedTheme from './inverted/invertedTheme'
import makeNormalTheme from './normalTheme'

export const normalTheme = makeNormalTheme()
export const invertedTheme = makeInvertedTheme()

const themes = {
  normal: normalTheme,
  inverted: invertedTheme
}

export const getTheme = variant => {
  const theme = themes[variant]

  if (!theme) {
    const possibleThemes = Object.keys(themes).join(', ')
    throw new Error(
      `[MuiCozyTheme] Unknown theme variant: ${variant}. Possible variants are ${possibleThemes}`
    )
  }

  return theme
}

export { defaultValues }
