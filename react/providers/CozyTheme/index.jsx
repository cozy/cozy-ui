import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { createContext, useContext } from 'react'

import log from 'cozy-logger'

import MuiCozyTheme from '../../MuiCozyTheme'
import useMediaQuery from '../../hooks/useMediaQuery'

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

    return {
      type: 'light',
      variant: 'normal',
      isLight: true
    }
  }

  return context
}

const CozyTheme = ({ type, variant, className, ignoreItself, children }) => {
  const uiThemeType = localStorage.getItem('ui-theme-type') // use only for cozy-ui documentation and argos screenshots
  const uiThemeVariant = localStorage.getItem('ui-theme-variant') // use only for cozy-ui documentation and argos screenshots

  const deviceThemeType = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light'
  const filteredSettingsThemeType = ['light', 'dark'].includes(type)
    ? type
    : undefined

  const _type = uiThemeType || filteredSettingsThemeType || deviceThemeType
  const _variant = uiThemeVariant || variant

  return (
    <CozyThemeContext.Provider
      value={{
        type: _type,
        variant: _variant,
        isLight: _type === 'light'
      }}
    >
      <MuiCozyTheme type={_type} variant={_variant}>
        <div
          className={cx(className, {
            [`TwakeTheme--${_type}-${_variant}`]: Boolean(_variant),
            'u-dc': ignoreItself
          })}
        >
          {children}
        </div>
      </MuiCozyTheme>
    </CozyThemeContext.Provider>
  )
}

CozyTheme.propTypes = {
  type: PropTypes.oneOf(['light', 'dark', 'auto']),
  variant: PropTypes.oneOf(['normal', 'inverted']),
  /** Causes this element's children to appear as if they were direct children of the element's parent, ignoring the element itself. */
  ignoreItself: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
}

CozyTheme.defaultProps = {
  variant: 'normal',
  ignoreItself: true
}

export default CozyTheme
