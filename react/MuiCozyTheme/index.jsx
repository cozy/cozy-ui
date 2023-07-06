import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from '../styles'
import { getTheme } from './theme'

const MuiCozyTheme = ({ variant, children }) => {
  const theme = getTheme(variant)
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

MuiCozyTheme.propTypes = {
  variant: PropTypes.oneOf(['normal', 'inverted'])
}

MuiCozyTheme.defaultProps = {
  variant: 'normal'
}

export default MuiCozyTheme
