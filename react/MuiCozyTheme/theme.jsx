import { makeTheme } from './makeTheme'

export const normalTheme = makeTheme('light', 'normal')
export const invertedTheme = makeTheme('light', 'inverted')

const themes = {
  light: {
    normal: normalTheme,
    inverted: invertedTheme
  }
}

export const getTheme = (type, variant) => {
  const theme = themes[type]?.[variant]

  if (!theme) {
    const possibleThemes = Object.keys(themes).join(', ')
    throw new Error(
      `[MuiCozyTheme] Unknown theme variant: ${variant}. Possible variants are ${possibleThemes}`
    )
  }

  return theme
}
