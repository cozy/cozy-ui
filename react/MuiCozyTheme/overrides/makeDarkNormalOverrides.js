import merge from 'lodash/merge'

import { makeLightNormalOverrides } from './makeLightNormalOverrides'

export const makeDarkNormalOverrides = theme => {
  const makeOverridesForDarkTheme = theme => ({
    MuiAppBar: {
      colorDefault: {
        backgroundColor: theme.palette.primary.main
      }
    }
  })

  const DarkNormalOverrides = merge(
    makeLightNormalOverrides(theme),
    makeOverridesForDarkTheme(theme)
  )

  return DarkNormalOverrides
}
