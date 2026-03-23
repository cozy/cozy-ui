import { makeTheme } from './makeTheme'

export const lightNormalTheme = makeTheme('light')
export const darkNormalTheme = makeTheme('dark')

const themes = {
  light: lightNormalTheme,
  dark: darkNormalTheme
}

export const getTheme = type => {
  const theme = themes[type]

  if (!theme) {
    const possibleThemes = Object.keys(themes).join(', ')
    throw new Error(
      `[MuiCozyTheme] Unknown theme variant: ${type}. Possible variants are ${possibleThemes}`
    )
  }

  return theme
}
