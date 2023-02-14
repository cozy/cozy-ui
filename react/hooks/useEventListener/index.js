import { useEffect } from 'react'

const useEventListener = (element, event, cb) => {
  useEffect(() => {
    if (element && event && cb) {
      element.addEventListener(event, cb)

      return () => {
        element.removeEventListener(event, cb)
      }
    }
  }, [event, cb, element])
}
export default useEventListener
