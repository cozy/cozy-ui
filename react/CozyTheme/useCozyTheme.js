import { useContext } from 'react'

import CozyThemeContext from './CozyThemeContext'

export default function useCozyTheme() {
  return useContext(CozyThemeContext)
}
