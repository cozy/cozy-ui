import merge from 'lodash/merge'

import { makeLightOverrides } from './makeLightOverrides'

export const makeDarkOverrides = theme => {
  const makeOverridesForDarkTheme = theme => ({
    MuiAppBar: {
      colorDefault: {
        backgroundColor: theme.palette.primary.main
      }
    }
  })

  const DarkOverrides = merge(
    makeLightOverrides(theme),
    makeOverridesForDarkTheme(theme)
  )

  return DarkOverrides
}
