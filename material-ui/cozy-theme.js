import { createMuiTheme } from '@material-ui/core/styles'

export const brown = {
  300: '#875507',
  500: '#C17A0A',
  700: '#cd943b'
}
export const yellow = {
  300: '#ac750d',
  500: '#F7A813',
  700: '#f8b942'
}

// A theme with custom primary and secondary color.
// It's optional.
export const theme = createMuiTheme({
  typography: {
    title: {
      fontFamily: ['TrashHand', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      color: 'white'
    }
  },
  palette: {
    primary: {
      light: brown[300],
      main: brown[500],
      dark: brown[700],
      contrastText: '#fff'
    },
    secondary: {
      light: yellow[300],
      main: yellow[500],
      dark: yellow[700],
      contrastText: '#fff'
    }
  }
})
