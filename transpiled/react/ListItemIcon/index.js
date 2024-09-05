import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className"];
import MuiListItemIcon from '@material-ui/core/ListItemIcon';
import cx from 'classnames';
import React, { forwardRef } from 'react';
export var smallSize = 16;
export var mediumSize = 24;
export var largeSize = 32; // We add a specific class to be able to override the style in makeOverride when used in an other component

var ListItemIcon = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(MuiListItemIcon, _extends({}, props, {
    ref: ref,
    className: cx(className, 'cozyListItemIcon')
  }));
});
ListItemIcon.displayName = 'ListItemIcon';
export default ListItemIcon;