import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["select", "SelectProps", "options", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import MuiTextField from '@material-ui/core/TextField';
import React, { forwardRef } from 'react';
import MobileSelect from "cozy-ui/transpiled/react/TextField/MobileSelect";
import Icon from "cozy-ui/transpiled/react/Icon";
import BottomIcon from "cozy-ui/transpiled/react/Icons/Bottom";
import { getRandomUUID } from "cozy-ui/transpiled/react/helpers/getRandomUUID";
import { useBreakpoints } from "cozy-ui/transpiled/react/providers/Breakpoints";
var TextField = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var select = _ref.select,
      SelectProps = _ref.SelectProps,
      options = _ref.options,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  // A11Y, https://v4.mui.com/api/text-field/#props
  var uuid = getRandomUUID();

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile; // options is not required to avoid breaking change but needed to have the mobile behavior


  if (isMobile && select && options) {
    return /*#__PURE__*/React.createElement(MobileSelect, _extends({
      ref: ref,
      id: uuid,
      options: options
    }, props), children);
  }

  return /*#__PURE__*/React.createElement(MuiTextField, _extends({
    ref: ref,
    id: uuid,
    select: select,
    SelectProps: _objectSpread(_objectSpread({}, SelectProps), {}, {
      IconComponent: function IconComponent(iconProps) {
        return /*#__PURE__*/React.createElement(Icon, _extends({}, iconProps, {
          icon: BottomIcon,
          color: props.disabled ? 'var(--disabledTextColor)' : 'var(--iconTextColor)'
        }));
      }
    })
  }, props), children);
});
TextField.displayName = 'TextField';
export default TextField;