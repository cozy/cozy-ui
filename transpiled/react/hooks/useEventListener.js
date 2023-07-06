import { useEffect } from 'react';
import { unRef } from "cozy-ui/transpiled/react/helpers/ref";

var useEventListener = function useEventListener(element, event, cb) {
  useEffect(function () {
    var currentElement = unRef(element);

    if (currentElement && event && cb) {
      currentElement.addEventListener(event, cb);
      return function () {
        currentElement.removeEventListener(event, cb);
      };
    }
  }, [event, cb, element]);
};

export default useEventListener;