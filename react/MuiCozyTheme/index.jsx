import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider, StyledEngineProvider } from '../styles'
import { getTheme } from './theme'

const MuiCozyTheme = ({ variant, children }) => {
  const theme = getTheme(variant)
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  )
}

MuiCozyTheme.propTypes = {
  variant: PropTypes.oneOf(['normal', 'inverted'])
}

MuiCozyTheme.defaultProps = {
  variant: 'normal'
}

export default MuiCozyTheme
