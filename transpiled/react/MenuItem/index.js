import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["component"];
import React, { forwardRef } from 'react';
import MuiMenuItem from '@material-ui/core/MenuItem';
import ListItem, { LitItemPropTypes } from "cozy-ui/transpiled/react/ListItem";
var MenuItem = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var component = _ref.component,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(MuiMenuItem, _extends({
    ref: ref,
    component: ListItem,
    componentElement: component,
    gutters: "disabled"
  }, props));
});
MenuItem.displayName = 'MenuItem';
MenuItem.propTypes = LitItemPropTypes;
export default MenuItem;