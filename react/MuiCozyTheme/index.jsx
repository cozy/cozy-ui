import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from '../styles'
import { getTheme } from './theme'

const MuiCozyTheme = ({ type, variant, children }) => {
  const theme = getTheme(type, variant)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

MuiCozyTheme.propTypes = {
  type: PropTypes.oneOf(['light', 'dark']),
  variant: PropTypes.oneOf(['normal', 'inverted'])
}

MuiCozyTheme.defaultProps = {
  type: 'light',
  variant: 'normal'
}

export default MuiCozyTheme
