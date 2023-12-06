import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import log from 'cozy-logger'

import MuiCozyTheme from '../../MuiCozyTheme'

export const CozyThemeContext = createContext()

export const useCozyTheme = () => {
  const context = useContext(CozyThemeContext)

  if (!context) {
    log(
      'error',
      '`CozyThemeContext` is missing. `useCozyTheme()` must be used within a `<CozyTheme>`. `normal` is returned as fallback value.'
    )

    return 'normal'
  }

  return context
}

const CozyTheme = ({ variant, className, ignoreItself, children }) => (
  <CozyThemeContext.Provider value={variant}>
    <MuiCozyTheme variant={variant}>
      <div
        className={cx(className, {
          [`CozyTheme--light-${variant}`]: Boolean(variant),
          'u-dc': ignoreItself
        })}
      >
        {children}
      </div>
    </MuiCozyTheme>
  </CozyThemeContext.Provider>
)

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
