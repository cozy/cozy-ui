import _extends from "@babel/runtime/helpers/extends";

/**
 * Layout components that know how to handle the keyboard.
 *
 * Work when the webview does not resize when the keyboard appears.
 *
 * https://github.com/ionic-team/cordova-plugin-ionic-keyboard
 * <preference name="KeyboardResize" value="false" />
 */
import React from 'react';
import { useKeyboardInfo } from "cozy-ui/transpiled/react/Page/keyboard";
var styles = {
  "PageFooter": "styles__PageFooter___2IFCx",
  "PageContent": "styles__PageContent___DbPFL",
  "PageLayout": "styles__PageLayout___1ptQY"
};
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
var TOP_BAR_HEIGHT = 48;
var BOTTOM_BAR_HEIGHT = 48;
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

var contentHeight = function contentHeight() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$topBarHeight = _ref.topBarHeight,
      topBarHeight = _ref$topBarHeight === void 0 ? TOP_BAR_HEIGHT : _ref$topBarHeight,
      _ref$bottomBarHeight = _ref.bottomBarHeight,
      bottomBarHeight = _ref$bottomBarHeight === void 0 ? BOTTOM_BAR_HEIGHT : _ref$bottomBarHeight,
      _ref$extraHeight = _ref.extraHeight,
      extraHeight = _ref$extraHeight === void 0 ? 0 : _ref$extraHeight,
      keyboardState = _ref.keyboardState,
      keyboardHeight = _ref.keyboardHeight;

  var removedSpace = topBarHeight + (keyboardState === 'showing' ? 0 : bottomBarHeight) + ( // Surprisingly, vh changes when keyboard appears and 1 keyboard is added
  // to the vh, this is why instead of adding 1 keyboardHeight, we add 2.
  keyboardState === 'showing' ? 2 * keyboardHeight : 0) + extraHeight;
  return "calc(100vh ".concat(removedSpace > 0 ? '-' : '+', " ").concat(Math.abs(removedSpace), "px)");
};
/**
 * Empty container, that has the same height as the keyboard when it is opened,
 * used as a "cushion" upon which the PageFooter rests when the keyboard is opened.
 */


var KeyboardSpace = function KeyboardSpace() {
  var _useKeyboardInfo = useKeyboardInfo(),
      keyboardState = _useKeyboardInfo.keyboardState,
      keyboardHeight = _useKeyboardInfo.keyboardHeight;

  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: keyboardState === 'showing' ? keyboardHeight : 0
    }
  }, ' ');
};

export var MobilePageLayout = function MobilePageLayout(_ref2) {
  var children = _ref2.children,
      _ref2$extraHeight = _ref2.extraHeight,
      extraHeight = _ref2$extraHeight === void 0 ? 0 : _ref2$extraHeight;

  var _useKeyboardInfo2 = useKeyboardInfo(),
      keyboardState = _useKeyboardInfo2.keyboardState,
      keyboardHeight = _useKeyboardInfo2.keyboardHeight;

  var minHeight = contentHeight({
    keyboardState: keyboardState,
    keyboardHeight: keyboardHeight,
    extraHeight: extraHeight
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: styles.PageLayout,
    style: {
      minHeight: minHeight
    }
  }, children), /*#__PURE__*/React.createElement(KeyboardSpace, null));
};
/**
 * - On mobile, wraps into MobilePageLayout.
 * - On desktop, wraps into a simple div.
 */

export var PageLayout = /*#__PURE__*/React.memo(function (_ref3) {
  var props = _extends({}, _ref3);

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  return isMobile ? /*#__PURE__*/React.createElement(MobilePageLayout, props) : /*#__PURE__*/React.createElement("div", null, props.children);
});
export var PageContent = /*#__PURE__*/React.memo(function (_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.PageContent
  }, children);
});
export var PageFooter = function PageFooter(_ref5) {
  var children = _ref5.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.PageFooter
  }, children);
};