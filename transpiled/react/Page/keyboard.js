import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

/**
 * Hooks to access keyboard properties.
 *
 * Works with events sent by cordova-plugin-ionic-keyboard.
 *
 * https://github.com/ionic-team/cordova-plugin-ionic-keyboard
 */
import { useEffect, useState } from 'react';
/**
 * Helper hook that makes writing hooks for keyboard easier.
 *
 * With this hook, you can provide an event handler for a particular
 * keyboard event and its lifecycle will be handled for you (attach events
 * on component mount, removes them on component unmount).
 */

var useKeyboard = function useKeyboard(_ref) {
  var onKeyboardWillShow = _ref.onKeyboardWillShow,
      onKeyboardWillHide = _ref.onKeyboardWillHide,
      onKeyboardHeightWillChange = _ref.onKeyboardHeightWillChange,
      onKeyboardDidHide = _ref.onKeyboardDidHide,
      onKeyboardDidShow = _ref.onKeyboardDidShow;
  useEffect(function () {
    if (!window.Keyboard) {
      console.warn('window.Keyboard is falsy. The `useKeyboard` hook cannot listen to keyboard events if the `cordova-plugin-ionic-keyboard` plugin is not installed.');
    }

    onKeyboardWillShow && window.addEventListener('keyboardWillShow', onKeyboardWillShow);
    onKeyboardWillHide && window.addEventListener('keyboardWillHide', onKeyboardWillHide);
    onKeyboardHeightWillChange && window.addEventListener('keyboardHeightWillChange', onKeyboardHeightWillChange);
    onKeyboardDidHide && window.addEventListener('keyboardDidHide', onKeyboardDidHide);
    onKeyboardDidShow && window.addEventListener('keyboardDidShow', onKeyboardDidShow);
    return function () {
      onKeyboardWillShow && window.removeEventListener('keyboardWillShow', onKeyboardWillShow);
      onKeyboardWillHide && window.removeEventListener('keyboardWillHide', onKeyboardWillHide);
      onKeyboardHeightWillChange && window.removeEventListener('keyboardHeightWillChange', onKeyboardHeightWillChange);
      onKeyboardDidHide && window.removeEventListener('keyboardDidHide', onKeyboardDidHide);
      onKeyboardDidShow && window.removeEventListener('keyboardDidShow', onKeyboardDidShow);
    };
  }, [onKeyboardWillShow, onKeyboardWillHide, onKeyboardHeightWillChange, onKeyboardDidHide, onKeyboardDidShow]);
};
/**
 * Provides keyboardHeight and keyboardState
 *
 * keyboardState can be
 *
 * - will-hide
 * - will-show
 * - hidden
 * - showing
 *
 * More information on the keyboard plugin page:
 * https://github.com/ionic-team/cordova-plugin-ionic-keyboard
 */


var useKeyboardInfo = function useKeyboardInfo() {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      keyboardHeight = _useState2[0],
      setKeyboardHeight = _useState2[1];

  var _useState3 = useState('hidden'),
      _useState4 = _slicedToArray(_useState3, 2),
      keyboardState = _useState4[0],
      setKeyboardState = _useState4[1];

  useKeyboard({
    onKeyboardWillHide: function onKeyboardWillHide() {
      setKeyboardState('will-hide');
    },
    onKeyboardWillShow: function onKeyboardWillShow() {
      setKeyboardState('will-show');
    },
    onKeyboardDidHide: function onKeyboardDidHide() {
      setKeyboardState('hidden');
    },
    onKeyboardDidShow: function onKeyboardDidShow(ev) {
      if (ev.keyboardHeight) {
        setKeyboardHeight(ev.keyboardHeight);
      }

      setKeyboardState('showing');
    }
  });
  return {
    keyboardHeight: keyboardHeight,
    keyboardState: keyboardState
  };
};

export { useKeyboard, useKeyboardInfo };