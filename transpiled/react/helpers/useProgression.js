import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState, useEffect } from 'react';
import isTesting from "cozy-ui/transpiled/react/helpers/isTesting";
/**
 * Useful to simulate a progression from 0 to 100.
 * Used in the documentation to simulate the behavior of progression bars or spinners for example.
 * Simulation is disabled during tests, replaced by a fixed value.
 */

var useProgression = function useProgression() {
  var _useState = useState(isTesting() ? 25 : 0),
      _useState2 = _slicedToArray(_useState, 2),
      progression = _useState2[0],
      setProgression = _useState2[1];

  var increment = function increment() {
    var diff = Math.random() * 10;
    setProgression(function (progression) {
      return progression >= 100 ? 0 : Math.min(progression + diff, 100);
    });
  };

  useEffect(function () {
    if (!isTesting()) {
      var interval = setInterval(increment, 500);
      return function () {
        return clearInterval(interval);
      };
    }
  }, []);
  return {
    progression: progression
  };
};

export default useProgression;