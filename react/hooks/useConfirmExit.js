import { useCallback, useRef } from 'react'
import useEventListener from './useEventListener'

/**
 * When provided a message, will warn the user before exiting the page
 *
 * Warning: The confirmation message is required but will usually
 * be replaced by an internal message by the browser, and never displayed.
 *
 * A falsy error message would deactivate to confirmation popup.
 *
 * @param {string|null} message - Confirmation message
 * @param {function} callback - will be executed before returning
 */
export default function useConfirmExit(message, callback) {
  // Using a ref in order to have an event listener that does not
  // need to be deregistered, recreated and registered again at each
  // message or callback change. If not, the lag introduced by the
  // useEffect inside useEventListener may create wrong behaviours
  // for fast changing calls to useConfirmExit.
  const state = useRef()
  state.current = { message, callback }
  const beforeunload = useCallback(event => {
    state.current.callback && state.current.callback()
    const returnValue = state.current.message || null
    if (returnValue) event.returnValue = returnValue
    return returnValue
  }, [])
  useEventListener(window, 'beforeunload', beforeunload)
}
