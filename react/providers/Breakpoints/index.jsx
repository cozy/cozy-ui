import throttle from 'lodash/throttle'
import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

import { useIframeConnection } from './useIframeConnection'
import { useIframeToSendWidth } from './useIframeToSendWidth'
import { useParentBreakpoints } from './useParentBreakpoints'
import breakpointDefs, { getBreakpointsStatus } from '../../helpers/breakpoints'

const BreakpointsCtx = createContext(null)

export const BreakpointsProvider = ({ parentBasedIframe, children }) => {
  const [breakpoints, setBreakpoints] = useState(
    getBreakpointsStatus(breakpointDefs)
  )
  const { hasIframe } = useIframeConnection({ parentBasedIframe })
  useIframeToSendWidth({ hasIframe })
  const { parentBreakpoints } = useParentBreakpoints({ parentBasedIframe })

  useEffect(() => {
    const handleResize = throttle(() => {
      setBreakpoints(getBreakpointsStatus(breakpointDefs))
    }, 100)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <BreakpointsCtx.Provider value={parentBreakpoints || breakpoints}>
      {children}
    </BreakpointsCtx.Provider>
  )
}

BreakpointsProvider.defaultProps = {
  parentBasedIframe: false
}

BreakpointsProvider.propTypes = {
  /** Iframes breakpoints are based on parent window inner width instead of iframe inner width  */
  parentBasedIframe: PropTypes.bool
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
