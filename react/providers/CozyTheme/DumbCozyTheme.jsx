import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { CozyThemeContext } from './index'
import MuiCozyTheme from '../../MuiCozyTheme'
import useMediaQuery from '../../hooks/useMediaQuery'

const DumbCozyTheme = ({
  variant,
  className,
  ignoreItself,
  settingsThemeType,
  children
}) => {
  const uiThemeType = localStorage.getItem('ui-theme-type') // use only for cozy-ui documentation and argos screenshots
  const uiThemeVariant = localStorage.getItem('ui-theme-variant') // use only for cozy-ui documentation and argos screenshots
  const uiThemeName = localStorage.getItem('ui-theme-name') || 'Cozy'

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
            [`${uiThemeName}Theme--${selfThemeType}-${selfThemeVariant}`]:
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

DumbCozyTheme.propTypes = {
  variant: PropTypes.oneOf(['normal', 'inverted']),
  /** Causes this element's children to appear as if they were direct children of the element's parent, ignoring the element itself. */
  ignoreItself: PropTypes.bool,
  className: PropTypes.string,
  /** Theme type from io.cozy.settings.instance */
  settingsThemeType: PropTypes.oneOf(['light', 'dark', 'auto']),
  children: PropTypes.node
}

export default DumbCozyTheme
