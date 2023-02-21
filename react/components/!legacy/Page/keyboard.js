/**
 * Hooks to access keyboard properties.
 *
 * Works with events sent by cordova-plugin-ionic-keyboard.
 *
 * https://github.com/ionic-team/cordova-plugin-ionic-keyboard
 */

import { useEffect, useState } from 'react'

/**
 * Helper hook that makes writing hooks for keyboard easier.
 *
 * With this hook, you can provide an event handler for a particular
 * keyboard event and its lifecycle will be handled for you (attach events
 * on component mount, removes them on component unmount).
 */
const useKeyboard = ({
  onKeyboardWillShow,
  onKeyboardWillHide,
  onKeyboardHeightWillChange,
  onKeyboardDidHide,
  onKeyboardDidShow
}) => {
  useEffect(() => {
    if (!window.Keyboard) {
      console.warn(
        'window.Keyboard is falsy. The `useKeyboard` hook cannot listen to keyboard events if the `cordova-plugin-ionic-keyboard` plugin is not installed.'
      )
    }
    onKeyboardWillShow &&
      window.addEventListener('keyboardWillShow', onKeyboardWillShow)
    onKeyboardWillHide &&
      window.addEventListener('keyboardWillHide', onKeyboardWillHide)
    onKeyboardHeightWillChange &&
      window.addEventListener(
        'keyboardHeightWillChange',
        onKeyboardHeightWillChange
      )
    onKeyboardDidHide &&
      window.addEventListener('keyboardDidHide', onKeyboardDidHide)
    onKeyboardDidShow &&
      window.addEventListener('keyboardDidShow', onKeyboardDidShow)
    return () => {
      onKeyboardWillShow &&
        window.removeEventListener('keyboardWillShow', onKeyboardWillShow)
      onKeyboardWillHide &&
        window.removeEventListener('keyboardWillHide', onKeyboardWillHide)
      onKeyboardHeightWillChange &&
        window.removeEventListener(
          'keyboardHeightWillChange',
          onKeyboardHeightWillChange
        )
      onKeyboardDidHide &&
        window.removeEventListener('keyboardDidHide', onKeyboardDidHide)
      onKeyboardDidShow &&
        window.removeEventListener('keyboardDidShow', onKeyboardDidShow)
    }
  }, [
    onKeyboardWillShow,
    onKeyboardWillHide,
    onKeyboardHeightWillChange,
    onKeyboardDidHide,
    onKeyboardDidShow
  ])
}

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
const useKeyboardInfo = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0)
  const [keyboardState, setKeyboardState] = useState('hidden')
  useKeyboard({
    onKeyboardWillHide: () => {
      setKeyboardState('will-hide')
    },
    onKeyboardWillShow: () => {
      setKeyboardState('will-show')
    },
    onKeyboardDidHide: () => {
      setKeyboardState('hidden')
    },
    onKeyboardDidShow: ev => {
      if (ev.keyboardHeight) {
        setKeyboardHeight(ev.keyboardHeight)
      }
      setKeyboardState('showing')
    }
  })
  return { keyboardHeight, keyboardState }
}

export { useKeyboard, useKeyboardInfo }
