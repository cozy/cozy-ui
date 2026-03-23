import PropTypes from 'prop-types'
import React from 'react'

import { getTheme } from './theme'
import { ThemeProvider } from '../styles'

const MuiCozyTheme = ({ type, children }) => {
  const theme = getTheme(type)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

MuiCozyTheme.propTypes = {
  type: PropTypes.oneOf(['light', 'dark'])
}

MuiCozyTheme.defaultProps = {
  type: 'light'
}

export default MuiCozyTheme
