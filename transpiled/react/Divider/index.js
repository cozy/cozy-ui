import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import MuiDivider from '@material-ui/core/Divider';
import React, { forwardRef } from 'react';
import TextDivider from "cozy-ui/transpiled/react/Divider/TextDivider";
import { withStyles } from "cozy-ui/transpiled/react/styles";
/**
 * @desc If this component is provided a string children, it will render a `<TextDivider>` component
 * and will handle the `textAlign` prop that accepts a `"center"` or undefined value
 */

var Divider = /*#__PURE__*/forwardRef(function (props, ref) {
  return typeof props.children === 'string' ? /*#__PURE__*/React.createElement(TextDivider, _extends({}, props, {
    ref: ref
  })) : /*#__PURE__*/React.createElement(MuiDivider, _extends({}, props, {
    ref: ref
  }));
});
Divider.displayName = 'Divider';
Divider.propTypes = _objectSpread({}, TextDivider.propTypes);
export default Divider;
var defaultValues = {
  borderRadius: 6,
  dialog: {
    sm: {
      padding: 16
    },
    md: {
      padding: 32
    }
  }
};
export var DeprecatedDivider = withStyles(function (theme) {
  var _root;

  return {
    /**
     * calcs are made since we have defaultMargin on the Dialog so
     * we need to remove the left margin and add the width of 2 margins
     * in order to have the divider takes the full width of the Modal
     */
    root: (_root = {}, _defineProperty(_root, theme.breakpoints.down('md'), {
      width: "calc(100% + ".concat(defaultValues.dialog.sm.padding, "*2px)"),
      marginLeft: "-".concat(defaultValues.dialog.sm.padding, "px")
    }), _defineProperty(_root, theme.breakpoints.up('md'), {
      width: "calc(100% + ".concat(defaultValues.dialog.md.padding, "*2px)"),
      marginLeft: "-".concat(defaultValues.dialog.md.padding, "px")
    }), _root)
  };
})(Divider);