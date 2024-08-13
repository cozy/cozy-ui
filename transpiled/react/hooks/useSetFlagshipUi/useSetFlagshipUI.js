import { useEffect } from 'react';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
import isEmpty from 'lodash/isEmpty';
import isObject from 'lodash/isObject';
import { useWebviewIntent } from 'cozy-intent';
import { setRsgFlagshipElements } from "cozy-ui/transpiled/react/hooks/useSetFlagshipUi/helpers";
export var ThemeColor;

(function (ThemeColor) {
  ThemeColor["Dark"] = "dark";
  ThemeColor["Light"] = "light";
})(ThemeColor || (ThemeColor = {}));

export var parseArg = function parseArg(webviewIntent, arg, caller) {
  var sanitized = isObject(arg) ? pickBy(arg, identity) : undefined;
  var validUI = !isEmpty(sanitized) && sanitized;
  setRsgFlagshipElements(sanitized);
  if (!webviewIntent) return;
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