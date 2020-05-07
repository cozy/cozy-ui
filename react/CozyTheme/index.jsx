import React, { createContext, useContext } from 'react'
import MuiCozyTheme from '../MuiCozyTheme'
import styles from './styles.styl'
import paletteStyles from '../../stylus/settings/palette.styl'
import cx from 'classnames'

export const CozyThemeContext = createContext()

const allStyles = {
  ...styles,
  'CozyTheme--normal': paletteStyles['CozyTheme--normal']
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
