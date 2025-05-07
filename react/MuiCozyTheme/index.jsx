import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import { useClient } from 'cozy-client'

import { getTheme } from './theme'
import { ThemeProvider } from '../styles'

const MuiCozyTheme = ({ type, variant, children }) => {
  const client = useClient()
  const [theme, setTheme] = useState(undefined)

  useEffect(() => {
    const initTheme = async () => {
      if (client.plugins.flags) {
        await client.plugins.flags.initializing
      }
      const computedTheme = getTheme(type, variant)

      setTheme(computedTheme)
    }

    if (client) initTheme()
  }, [client, type, variant])

  if (!theme) return null

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
