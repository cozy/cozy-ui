import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { createContext, useContext } from 'react'

import log from 'cozy-logger'

import MuiCozyTheme from '../../MuiCozyTheme'
import useMediaQuery from '../../hooks/useMediaQuery'

export const CozyThemeContext = createContext()

/**
 * @returns {{ type: 'light'|'dark', isLight: boolean }}
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
      isLight: true
    }
  }

  return context
}

const CozyTheme = ({ type, className, ignoreItself, children }) => {
  const uiThemeType = localStorage.getItem('ui-theme') // use only for cozy-ui documentation and argos screenshots

  const deviceThemeType = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light'
  const filteredSettingsThemeType = ['light', 'dark'].includes(type)
    ? type
    : undefined

  const _type = uiThemeType || filteredSettingsThemeType || deviceThemeType

  return (
    <CozyThemeContext.Provider
      value={{
        type: _type,
        isLight: _type === 'light'
      }}
    >
      <MuiCozyTheme type={_type}>
        <div
          className={cx(className, {
            [`TwakeTheme--${_type}`]: Boolean(_type),
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
  /** Causes this element's children to appear as if they were direct children of the element's parent, ignoring the element itself. */
  ignoreItself: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
}

CozyTheme.defaultProps = {
  ignoreItself: true
}

export default CozyTheme
