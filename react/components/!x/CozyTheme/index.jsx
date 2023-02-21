import React, { createContext, useContext } from 'react'
import cx from 'classnames'

import MuiCozyTheme from '../../MuiCozyTheme'
import themesStyles from '../../stylus/settings/palette.styl'

export const CozyThemeContext = createContext()

const allStyles = {
  'CozyTheme--normal': themesStyles['CozyTheme--normal'],
  'CozyTheme--inverted': themesStyles['CozyTheme--inverted']
}

const CozyTheme = ({ variant, children, className }) => (
  <CozyThemeContext.Provider value={variant}>
    <MuiCozyTheme variant={variant}>
      <div className={cx(className, allStyles[`CozyTheme--${variant}`])}>
        {children}
      </div>
    </MuiCozyTheme>
  </CozyThemeContext.Provider>
)

export const useCozyTheme = () => useContext(CozyThemeContext)

export default CozyTheme
