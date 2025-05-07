import { makeTheme } from './makeTheme'

const makeThemes = () => {
  const lightNormalTheme = makeTheme('light', 'normal')
  const lightInvertedTheme = makeTheme('light', 'inverted')
  const darkNormalTheme = makeTheme('dark', 'normal')
  const darkInvertedTheme = makeTheme('dark', 'inverted')

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

  return themes
}

export const getTheme = (type, variant) => {
  const themes = makeThemes()
  const theme = themes[type]?.[variant]

  if (!theme) {
    const possibleThemes = Object.keys(themes).join(', ')
    throw new Error(
      `[MuiCozyTheme] Unknown theme variant: ${variant}. Possible variants are ${possibleThemes}`
    )
  }

  return theme
}
