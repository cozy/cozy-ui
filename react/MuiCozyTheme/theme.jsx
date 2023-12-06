import { makeTheme } from './makeTheme'

export const lightNormalTheme = makeTheme('light', 'normal')
export const lightInvertedTheme = makeTheme('light', 'inverted')
export const darkNormalTheme = makeTheme('dark', 'normal')
export const darkInvertedTheme = makeTheme('dark', 'inverted')

const themes = {
  light: {
    normal: lightNormalTheme,
    inverted: lightInvertedTheme
  },
  dark: {
    normal: darkNormalTheme,
    inverted: darkInvertedTheme
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
