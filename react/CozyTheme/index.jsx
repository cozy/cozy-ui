import React, { createContext, useContext } from 'react'
import MuiCozyTheme from '../MuiCozyTheme'

export const CozyThemeContext = createContext()

const CozyTheme = ({ variant, children }) => (
  <CozyThemeContext.Provider value={variant}>
    <MuiCozyTheme variant={variant}>{children}</MuiCozyTheme>
  </CozyThemeContext.Provider>
)

export const useCozyTheme = () => useContext(CozyThemeContext)

export default CozyTheme
