import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

import log from 'cozy-logger'

import { isRsg } from '../../hooks/useSetFlagshipUi/helpers'
import CozyThemeWithQuery from './CozyThemeWithQuery'
import DumbCozyTheme from './DumbCozyTheme'

export const CozyThemeContext = createContext()

/**
 * @returns {{ type: 'light'|'dark', variant: 'normal'|'inverted', isLight: boolean }}
 */
export const useCozyTheme = () => {
  const context = useContext(CozyThemeContext)

  if (!context) {
    log(
      'error',
      '`CozyThemeContext` is missing. `useCozyTheme()` must be used within a `<CozyTheme>`. `light normal` is returned as fallback value.'
    )

    return { type: 'light', variant: 'normal', isLight: true }
  }

  return context
}

const CozyTheme = ({ ignoreCozySettings, ...props }) => {
  const Comp =
    ignoreCozySettings || process.env.NODE_ENV === 'test' || isRsg
      ? DumbCozyTheme
      : CozyThemeWithQuery

  return <Comp {...props} />
}

CozyTheme.propTypes = {
  variant: PropTypes.oneOf(['normal', 'inverted']),
  /** Causes this element's children to appear as if they were direct children of the element's parent, ignoring the element itself. */
  ignoreItself: PropTypes.bool,
  /** Bypasses the request that retrieves the app's settings in order to define the theme type */
  ignoreCozySettings: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
}

CozyTheme.defaultProps = {
  variant: 'normal',
  ignoreCozySettings: false,
  ignoreItself: true
}

export default CozyTheme
