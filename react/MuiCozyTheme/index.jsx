import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme.js'

const MuiCozyTheme = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default MuiCozyTheme
