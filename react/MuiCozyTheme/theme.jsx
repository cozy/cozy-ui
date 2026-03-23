import { makeTheme } from './makeTheme'

export const lightTheme = makeTheme('light')
export const darkTheme = makeTheme('dark')

const themes = {
  light: lightTheme,
  dark: darkTheme
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
