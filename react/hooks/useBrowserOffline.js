import { useState, useCallback } from 'react'
import useEventListener from './useEventListener'

/**
 * Checks if the browser is offline
 *
 * This is done through the browser API. It cannot garantees that the browser
 * is able to contact the serveur, nor that the connection is stable enough.
 *
 * In Nodejs, where this API doesn't exists, always return `false`.
 * @returns {boolean}
 */
export default function useBrowserOffline() {
  function isOfflineNow() {
    return window && window.navigator && window.navigator.onLine === false
  }

  const [isOffline, setOfflineSince] = useState(isOfflineNow)

  const setNavigatorOffline = useCallback(() => setOfflineSince(new Date()), [
    setOfflineSince
  ])
  const setNavigatorOnline = useCallback(() => setOfflineSince(false), [
    setOfflineSince
  ])

  useEventListener(window, 'online', setNavigatorOnline)
  useEventListener(window, 'offline', setNavigatorOffline)

  return !!isOffline
}
