/**
 * Layout components that know how to handle the keyboard.
 *
 * Work when the webview does not resize when the keyboard appears.
 *
 * https://github.com/ionic-team/cordova-plugin-ionic-keyboard
 * <preference name="KeyboardResize" value="false" />
 */

import React from 'react'
import { useKeyboardInfo } from './keyboard'
import styles from './styles.styl'
import useBreakpoints from '../providers/Breakpoints'

const TOP_BAR_HEIGHT = 48
const BOTTOM_BAR_HEIGHT = 48

/**
 * Returns the min-height CSS property for the Page
 *
 * The goal is for the Page to fill all the screen that is visible to the user.
 * Since the keyboard appearing does not have any effect on the layout of the
 * page (), we have to remove its height from the available space when it appears.
 *
 * Also handles fixed bars space:
 *
 * - topBar height is removed from the real estate available.
 * - bottomBar height is removed from the real estate available, unless the
 *   keyboard is visible : since the bottom bar is expected to be hidden
 *   when an input is focused (to prevent iOS flickers), it does not take space
 *   when the keyboard is visible.
 */
const contentHeight = ({
  topBarHeight = TOP_BAR_HEIGHT,
  bottomBarHeight = BOTTOM_BAR_HEIGHT,
  extraHeight = 0,
  keyboardState,
  keyboardHeight
} = {}) => {
  const removedSpace =
    topBarHeight +
    (keyboardState === 'showing' ? 0 : bottomBarHeight) +
    // Surprisingly, vh changes when keyboard appears and 1 keyboard is added
    // to the vh, this is why instead of adding 1 keyboardHeight, we add 2.
    (keyboardState === 'showing' ? 2 * keyboardHeight : 0) +
    extraHeight
  return `calc(100vh ${removedSpace > 0 ? '-' : '+'} ${Math.abs(
    removedSpace
  )}px)`
}

/**
 * Empty container, that has the same height as the keyboard when it is opened,
 * used as a "cushion" upon which the PageFooter rests when the keyboard is opened.
 */
const KeyboardSpace = () => {
  const { keyboardState, keyboardHeight } = useKeyboardInfo()
  return (
    <div
      style={{
        height: keyboardState === 'showing' ? keyboardHeight : 0
      }}
    >
      {' '}
    </div>
  )
}

export const MobilePageLayout = ({ children, extraHeight = 0 }) => {
  const { keyboardState, keyboardHeight } = useKeyboardInfo()
  const minHeight = contentHeight({
    keyboardState,
    keyboardHeight,
    extraHeight
  })
  return (
    <>
      <div
        className={styles.PageLayout}
        style={{
          minHeight
        }}
      >
        {children}
      </div>
      <KeyboardSpace />
    </>
  )
}

/**
 * - On mobile, wraps into MobilePageLayout.
 * - On desktop, wraps into a simple div.
 */
export const PageLayout = React.memo(({ ...props }) => {
  const { isMobile } = useBreakpoints()
  return isMobile ? (
    <MobilePageLayout {...props} />
  ) : (
    <div>{props.children}</div>
  )
})

export const PageContent = React.memo(({ children }) => (
  <div className={styles.PageContent}>{children}</div>
))

export const PageFooter = ({ children }) => (
  <div className={styles.PageFooter}>{children}</div>
)
