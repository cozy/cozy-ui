import PropTypes from 'prop-types'
import React from 'react'

import { getTheme } from './theme'
import { ThemeProvider } from '../styles'

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
