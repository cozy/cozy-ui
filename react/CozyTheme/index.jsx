import React, { createContext, useContext } from 'react'

export const CozyThemeContext = createContext()

const CozyTheme = ({ theme, children }) => (
  <CozyThemeContext.Provider value={theme}>
    {children}
  </CozyThemeContext.Provider>
)

export const useCozyTheme = () => useContext(CozyThemeContext)

export default CozyTheme
