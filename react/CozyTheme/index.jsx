import React, { createContext, useContext } from 'react'
import cx from 'classnames'

import MuiCozyTheme from '../MuiCozyTheme'

export const CozyThemeContext = createContext()

const CozyTheme = ({ variant, children, className }) => (
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

export const useCozyTheme = () => useContext(CozyThemeContext)

export default CozyTheme
