import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["onClose", "children"];
import React, { forwardRef, isValidElement, cloneElement, Children } from 'react';
import ActionMenu from "cozy-ui/transpiled/react/deprecated/ActionMenu";
/**
 * Add onClose method on every children, to close the menu when clicking them
 * @deprecated This component is depreacated, please use [ActionsMenu](#/ActionsMenu) instead.
 */

var ActionMenuWithClose = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var onClose = _ref.onClose,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(ActionMenu, _extends({
    anchorElRef: ref,
    onClose: onClose
  }, props), Children.map(children, function (child) {
    if ( /*#__PURE__*/isValidElement(child)) {
      return /*#__PURE__*/cloneElement(child, {
        onClose: onClose
      });
    }

    return null;
  }));
});
ActionMenuWithClose.displayName = 'ActionMenuWithClose';
export default ActionMenuWithClose;