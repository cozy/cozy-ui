import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState, useCallback } from 'react';
import useEventListener from "cozy-ui/transpiled/react/hooks/useEventListener";
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
    return window && window.navigator && window.navigator.onLine === false;
  }

  var _useState = useState(isOfflineNow),
      _useState2 = _slicedToArray(_useState, 2),
      isOffline = _useState2[0],
      setOfflineSince = _useState2[1];

  var setNavigatorOffline = useCallback(function () {
    return setOfflineSince(new Date());
  }, [setOfflineSince]);
  var setNavigatorOnline = useCallback(function () {
    return setOfflineSince(false);
  }, [setOfflineSince]);
  useEventListener(window, 'online', setNavigatorOnline);
  useEventListener(window, 'offline', setNavigatorOffline);
  return !!isOffline;
}