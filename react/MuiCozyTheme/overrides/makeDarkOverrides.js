import merge from 'lodash/merge'

import { makeLightOverrides } from './makeLightOverrides'
import { alpha } from '../../styles'

export const makeDarkOverrides = theme => {
  const makeOverridesForDarkTheme = theme => ({
    MuiAppBar: {
      colorDefault: {
        backgroundColor: theme.palette.primary.main
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: alpha(theme.palette.common.black, 0.5)
      }
    }
  })

  const DarkOverrides = merge(
    makeLightOverrides(theme),
    makeOverridesForDarkTheme(theme)
  )

  return DarkOverrides
}
