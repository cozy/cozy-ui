import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { getTheme } from './theme'

const MuiCozyTheme = ({ variant, children }) => {
  const theme = getTheme(variant)
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

MuiCozyTheme.propTypes = {
  variant: PropTypes.oneOf(['normal', 'inverted'])
}

MuiCozyTheme.defaultProps = {
  variant: 'normal'
}

export default MuiCozyTheme
