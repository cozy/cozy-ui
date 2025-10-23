import throttle from 'lodash/throttle'
import { useEffect } from 'react'

/**
 * To send window innerWidth to first iframe
 * @returns
 */
const sendWidthToIframe = () =>
  window.frames[1].postMessage(`UI-breakpoints-value:${window.innerWidth}`, '*')

export const useIframeToSendWidth = ({ hasIframe }) => {
  // parent window send its innerWidth
  useEffect(() => {
    if (hasIframe) {
      sendWidthToIframe()
    }
  }, [hasIframe])

  // parent window send its innerWidth on resize
  useEffect(() => {
    const handleResize = throttle(() => {
      if (hasIframe) {
        sendWidthToIframe()
      }
    }, 100)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [hasIframe])
}
