import throttle from 'lodash/throttle'
import { useEffect } from 'react'

const sendWidthToIframe = iframeWindow =>
  iframeWindow?.postMessage(`UI-breakpoints-value:${window.innerWidth}`, '*')

export const useIframeToSendWidth = ({ iframeWindow }) => {
  // parent window send its innerWidth
  useEffect(() => {
    sendWidthToIframe(iframeWindow)
  }, [iframeWindow])

  // parent window send its innerWidth on resize
  useEffect(() => {
    const handleResize = throttle(() => {
      sendWidthToIframe(iframeWindow)
    }, 100)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [iframeWindow])
}
