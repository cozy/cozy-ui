import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useStack } from "cozy-ui/transpiled/react/deprecated/ViewStack/hooks";
import { ViewStackContext } from "cozy-ui/transpiled/react/deprecated/ViewStack/context"; // This is guessed, I could not see how to interface properly with
// react-swipeable-views's onTransitionEnd

var STEPPER_TRANSITION_DURATION_MS = 500;
/**
 * Wraps children to builds an animated carrousel where children
 * can push/pop views.
 *
 * - Children receive stack{Pop,Push} methods through `useViewStack`.
 * - When stackPush(<View />) is called, the carrousel animates to this view
 * - When stackPop() is called, the carrousel animates to the view just before
 * - It is possible to await on stackPop() to wait for the animation to finish
 */

var ViewStack = function ViewStack(_ref) {
  var children = _ref.children;

  var _useStack = useStack(React.Children.toArray(children), {
    popDelay: STEPPER_TRANSITION_DURATION_MS
  }),
      _useStack2 = _slicedToArray(_useStack, 4),
      stChildren = _useStack2[0],
      curIndex = _useStack2[1],
      stackPush = _useStack2[2],
      stackPop = _useStack2[3];

  var contextValue = {
    stackPush: stackPush,
    stackPop: stackPop
  };
  return /*#__PURE__*/React.createElement(ViewStackContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(SwipeableViews, {
    animateHeight: true,
    disabled: true,
    index: curIndex
  }, stChildren.map(function (child, i) {
    return /*#__PURE__*/React.cloneElement(child, {
      key: i,
      active: i === curIndex
    });
  })));
};

export default ViewStack;