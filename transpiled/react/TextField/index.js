import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["select", "options", "children"];
import React, { forwardRef } from 'react';
import MuiTextField from '@material-ui/core/TextField';
import Icon from "cozy-ui/transpiled/react/Icon";
import BottomIcon from "cozy-ui/transpiled/react/Icons/Bottom";
import { getRandomUUID } from "cozy-ui/transpiled/react/helpers/getRandomUUID";
import { useBreakpoints } from "cozy-ui/transpiled/react/providers/Breakpoints";
import MobileSelect from "cozy-ui/transpiled/react/TextField/MobileSelect";
var TextField = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var select = _ref.select,
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
    SelectProps: {
      IconComponent: function IconComponent(iconProps) {
        return /*#__PURE__*/React.createElement(Icon, _extends({}, iconProps, {
          icon: BottomIcon,
          color: props.disabled ? 'var(--disabledTextColor)' : 'var(--iconTextColor)'
        }));
      }
    }
  }, props), children);
});
TextField.displayName = 'TextField';
export default TextField;