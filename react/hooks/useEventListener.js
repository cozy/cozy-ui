import { useEffect } from 'react'
import { unRef } from '../helpers/ref'

const useEventListener = (element, event, cb) => {
  useEffect(() => {
    const currentElement = unRef(element)
    if (currentElement && event && cb) {
      currentElement.addEventListener(event, cb)

      return () => {
        currentElement.removeEventListener(event, cb)
      }
    }
  }, [event, cb, element])
}
export default useEventListener
