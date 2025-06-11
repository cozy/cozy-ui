import { useEffect, useState } from 'react'

import { isInsideIframe } from '../../helpers/breakpoints'

export const useIframeConnection = ({ parentBasedIframe }) => {
  const [hasIframe, setHasIframe] = useState(false)

  const isIframe = parentBasedIframe && isInsideIframe()

  // parent window receives from iframe to give breakpoints
  useEffect(() => {
    const handleMessage = ev => {
      if (ev.data === 'UI-breakpoints-needParentBreakpoints') {
        setHasIframe(true)
      }
    }

    window.addEventListener('message', handleMessage)

    return () => window.removeEventListener('message', handleMessage)
  }, [])

  // iframe send to parent window ask for its breakpoints
  useEffect(() => {
    if (isIframe) {
      window.parent.postMessage('UI-breakpoints-needParentBreakpoints', '*')
    }
  }, [isIframe])

  return { hasIframe }
}
