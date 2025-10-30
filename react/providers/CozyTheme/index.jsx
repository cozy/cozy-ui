import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { createContext, useContext } from 'react'

import log from 'cozy-logger'

import MuiCozyTheme from '../../MuiCozyTheme'
import useMediaQuery from '../../hooks/useMediaQuery'

export const CozyThemeContext = createContext()

/**
 * @returns {{ type: 'light'|'dark', variant: 'normal'|'inverted', isLight: boolean, name: 'Twake'|'Cozy' }}
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

const CozyTheme = ({
  variant,
  className,
  ignoreItself,
  settingsThemeType,
  children
}) => {
  const uiThemeType = localStorage.getItem('ui-theme-type') // use only for cozy-ui documentation and argos screenshots
  const uiThemeVariant = localStorage.getItem('ui-theme-variant') // use only for cozy-ui documentation and argos screenshots

  const deviceThemeType = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light'
  const filteredSettingsThemeType = ['light', 'dark'].includes(
    settingsThemeType
  )
    ? settingsThemeType
    : undefined

  const selfThemeType =
    uiThemeType || filteredSettingsThemeType || deviceThemeType
  const selfThemeVariant = uiThemeVariant || variant

  return (
    <CozyThemeContext.Provider
      value={{
        type: selfThemeType,
        variant: selfThemeVariant,
        isLight: selfThemeType === 'light'
      }}
    >
      <MuiCozyTheme type={selfThemeType} variant={selfThemeVariant}>
        <div
          className={cx(className, {
            [`TwakeTheme--${selfThemeType}-${selfThemeVariant}`]:
              Boolean(selfThemeVariant),
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
  variant: PropTypes.oneOf(['normal', 'inverted']),
  /** Causes this element's children to appear as if they were direct children of the element's parent, ignoring the element itself. */
  ignoreItself: PropTypes.bool,
  /** Theme type from io.cozy.settings.instance */
  settingsThemeType: PropTypes.oneOf(['light', 'dark', 'auto']),
  className: PropTypes.string,
  children: PropTypes.node
}

CozyTheme.defaultProps = {
  variant: 'normal',
  ignoreItself: true
}

export default CozyTheme
