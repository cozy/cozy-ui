import { useState, useEffect } from 'react'

import breakpointDefs, {
  getBreakpointsStatus,
  isInsideIframe
} from '../../helpers/breakpoints'

export const useParentBreakpoints = ({ parentBasedIframe }) => {
  const [parentBreakpoints, setParentBreakpoints] = useState()

  const isIframe = parentBasedIframe && isInsideIframe()

  // iframe receives breakpoints from parent window
  useEffect(() => {
    const handleMessage = ev => {
      if (!isIframe) return

      if (
        typeof ev.data === 'string' &&
        ev.data.includes?.('UI-breakpoints-value:')
      ) {
        const parentInnerWidth = ev.data.split(':')[1]

        setParentBreakpoints(
          getBreakpointsStatus(breakpointDefs, parentInnerWidth)
        )
      }
    }

    window.addEventListener('message', handleMessage)

    return () => window.removeEventListener('message', handleMessage)
  }, [isIframe])

  return { parentBreakpoints }
}
