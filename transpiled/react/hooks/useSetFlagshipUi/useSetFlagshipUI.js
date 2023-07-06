import { useEffect } from 'react';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
import isEmpty from 'lodash/isEmpty';
import isObject from 'lodash/isObject';
import { useWebviewIntent } from 'cozy-intent';
export var ThemeColor;

(function (ThemeColor) {
  ThemeColor["Dark"] = "dark";
  ThemeColor["Light"] = "light";
})(ThemeColor || (ThemeColor = {}));

export var parseArg = function parseArg(webviewIntent, arg, caller) {
  if (!webviewIntent) return;
  var sanitized = isObject(arg) && pickBy(arg, identity);
  var validUI = !isEmpty(sanitized) && sanitized;
  validUI && webviewIntent.call('setFlagshipUI', validUI, caller);
};
export var useSetFlagshipUI = function useSetFlagshipUI(onMount, onUnmount, caller) {
  var webviewIntent = useWebviewIntent();
  useEffect(function () {
    parseArg(webviewIntent, onMount, "".concat(caller || 'unknown', " (onMount)"));
    return function () {
      return parseArg(webviewIntent, onUnmount, "".concat(caller || 'unknown', " (onUnmount)"));
    };
    /**
     * We don't want to listen to onMount/onUnmount arguments
     * It will create far too many unwanted calls
     * We only care about webviewIntent presence,
     * which should be undefined on first call (not guaranteed)
     */
  }, [webviewIntent]); // eslint-disable-line react-hooks/exhaustive-deps
};