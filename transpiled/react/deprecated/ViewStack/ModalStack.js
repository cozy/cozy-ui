import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from 'react';
import Modal from "cozy-ui/transpiled/react/deprecated/Modal";
import { ViewStackContext } from "cozy-ui/transpiled/react/deprecated/ViewStack/context";
import { useStack } from "cozy-ui/transpiled/react/deprecated/ViewStack/hooks";
/**
 * Wraps children so that they can push views that will appear as modals.
 *
 * - Children receive stack{Pop,Push} methods through `useViewStack`.
 * - When stackPush(<View />) is called, a modal containing <View/> is displayed
 * - When stackPop() is called, the modal disappears
 * - Several modals can be stacked in this manner
 * - The <Modal /> element wrapping <View /> can receive props via the 2nd
 * argument of stackPush : `stackPush(<SmallView />, { size: 'xsmall' })`
 *
 * Can be used as a replacement of a <ViewStack /> on mobile
 */

var ModalStack = function ModalStack(_ref) {
  var children = _ref.children;

  var _useStack = useStack(React.Children.toArray(children)),
      _useStack2 = _slicedToArray(_useStack, 4),
      stChildren = _useStack2[0],
      stackPush = _useStack2[2],
      stackPop = _useStack2[3];

  var contextValue = {
    stackPush: stackPush,
    stackPop: stackPop
  };
  return /*#__PURE__*/React.createElement(ViewStackContext.Provider, {
    value: contextValue
  }, stChildren[0], stChildren.slice(1).map(function (child, i) {
    var hasProps = child.length > 1;
    var props = hasProps ? child[1] : null;
    var modalChild = hasProps ? child[0] : child;
    return /*#__PURE__*/React.createElement(Modal, _extends({
      mobileFullscreen: true,
      key: i,
      dismissAction: stackPop
    }, props), modalChild);
  }));
};

export default ModalStack;