import { createMuiTheme } from '@material-ui/core/styles'

import makeTypography from '../typography'
import shadows from '../shadows'
import invertedPalette from './palette'
import makeInvertedThemeOverrides from './overrides'

const makeInvertedTheme = () => {
  const invertedTypography = makeTypography(invertedPalette)
  const invertedTheme = createMuiTheme({
    palette: invertedPalette,
    typography: invertedTypography,
    shadows
  })
  invertedTheme.overrides = makeInvertedThemeOverrides(invertedTheme)

  return invertedTheme
}

export default makeInvertedTheme
