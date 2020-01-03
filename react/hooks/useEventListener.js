import { useEffect } from 'react'

const useEventListener = (element, event, cb) => {
  useEffect(() => {
    element.addEventListener(event, cb)

    return () => {
      element.removeEventListener(event, cb)
    }
  }, [event, cb, element])
}

export default useEventListener
