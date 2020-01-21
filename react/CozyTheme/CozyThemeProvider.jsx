import React, { useContext } from 'react'
import merge from 'lodash/merge'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import CozyThemeContext from './CozyThemeContext'
import stylesFromTheme from './styleFromTheme'
import muiThemeFromCozyTheme from './muiThemeFromCozyTheme'

export default function CozyThemeProvider({ theme, children }) {
  const context = useContext(CozyThemeContext)
  const newTheme = merge({}, theme, context)
  const styles = stylesFromTheme(context.initialized ? theme : newTheme)
  const muiTheme = muiThemeFromCozyTheme(theme, context, newTheme)
  newTheme.initialized = true
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CozyThemeContext.Provider value={newTheme}>
        <div style={styles}>{children}</div>
      </CozyThemeContext.Provider>
    </MuiThemeProvider>
  )
}
