import { createMuiTheme } from '@material-ui/core/styles'
import palette from '../../stylus/settings/palette.json'

import MuiButton from './Buttons/theme'

export const theme = createMuiTheme({
  typography: {
    title: {
      fontFamily: ['Lato', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      color: 'white'
    }
  },
  palette: {
    primary: {
      light: palette['frenchPass'],
      main: palette['dodgerBlue'],
      dark: palette['scienceBlue'],
      contrastText: palette['white']
    },
    secondary: {
      light: palette['monza'],
      main: palette['portage'],
      dark: palette['azure'],
      contrastText: palette['white']
    }
  },
  overrides: {
    MuiButton
  }
})

export default theme
