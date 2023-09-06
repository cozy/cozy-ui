import React, { createContext, useContext, useState, useEffect } from 'react'
import throttle from 'lodash/throttle'

import breakpointDefs, {
  getBreakpointsStatus as _getBreakpointsStatus
} from '../../helpers/breakpoints'

const getBreakpointsStatus = () => _getBreakpointsStatus(breakpointDefs)

const BreakpointsCtx = createContext(null)

export const BreakpointsProvider = ({ children }) => {
  const [breakpoints, setBreakpoints] = useState(getBreakpointsStatus())

  useEffect(() => {
    const handleResize = throttle(() => {
      setBreakpoints(getBreakpointsStatus())
    }, 100)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <BreakpointsCtx.Provider value={breakpoints}>
      {children}
    </BreakpointsCtx.Provider>
  )
}

export const useBreakpoints = () => {
  const v = useContext(BreakpointsCtx)
  if (v === null) {
    throw new Error(
      'Cannot use useBreakpoints without BreakpointsProvider. The component must have a BreakpointsProvider above it.'
    )
  }
  return v
}

export default useBreakpoints
