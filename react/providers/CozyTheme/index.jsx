import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import flag from 'cozy-flags'

import log from 'cozy-logger'

import useMediaQuery from '../../hooks/useMediaQuery'
import MuiCozyTheme from '../../MuiCozyTheme'

export const CozyThemeContext = createContext()

export const useCozyTheme = () => {
  const context = useContext(CozyThemeContext)

  if (!context) {
    log(
      'error',
      '`CozyThemeContext` is missing. `useCozyTheme()` must be used within a `<CozyTheme>`. `light normal` is returned as fallback value.'
    )

    return { type: 'light', variant: 'normal' }
  }

  return context
}

const CozyTheme = ({ variant, className, ignoreItself, children }) => {
  const uiThemeType = localStorage.getItem('ui-theme-type') // use only for cozy-ui documentation and argos screenshots
  const uiThemeVariant = localStorage.getItem('ui-theme-variant') // use only for cozy-ui documentation and argos screenshots

  const isOnlyLight = !!flag('ui.darkmode.enabled') // should be remove when dark mode is validated on all apps
  const deviceThemeType = useMediaQuery('(prefers-color-scheme: dark)')
    ? isOnlyLight
      ? 'dark'
      : 'light'
    : 'light'

  const selfThemeType = uiThemeType || deviceThemeType
  const selfThemeVariant = uiThemeVariant || variant

  return (
    <CozyThemeContext.Provider
      value={{ type: selfThemeType, variant: selfThemeVariant }}
    >
      <MuiCozyTheme type={selfThemeType} variant={selfThemeVariant}>
        <div
          className={cx(className, {
            [`CozyTheme--${selfThemeType}-${selfThemeVariant}`]: Boolean(
              selfThemeVariant
            ),
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
  className: PropTypes.string,
  children: PropTypes.node
}

CozyTheme.defaultProps = {
  variant: 'normal',
  ignoreItself: true
}

export default CozyTheme
