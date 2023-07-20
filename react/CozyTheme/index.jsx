import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import MuiCozyTheme from '../MuiCozyTheme'

export const CozyThemeContext = createContext()

export const useCozyTheme = () => useContext(CozyThemeContext)

const CozyTheme = ({ variant, className, children }) => (
  <CozyThemeContext.Provider value={variant}>
    <MuiCozyTheme variant={variant}>
      <div
        className={cx(className, {
          [`CozyTheme--${variant}`]: Boolean(variant)
        })}
      >
        {children}
      </div>
    </MuiCozyTheme>
  </CozyThemeContext.Provider>
)

CozyTheme.propTypes = {
  variant: PropTypes.oneOf(['normal', 'inverted']),
  className: PropTypes.string,
  children: PropTypes.node
}

CozyTheme.defaultProps = {
  variant: 'normal'
}

export default CozyTheme
