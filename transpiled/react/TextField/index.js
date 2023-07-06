import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children"];
import React, { forwardRef } from 'react';
import MuiTextField from '@material-ui/core/TextField';
import { getRandomUUID } from "cozy-ui/transpiled/react/helpers/getRandomUUID";
var TextField = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  // A11Y, https://v4.mui.com/api/text-field/#props
  var uuid = getRandomUUID();
  return /*#__PURE__*/React.createElement(MuiTextField, _extends({
    ref: ref,
    id: uuid
  }, props), children);
});
TextField.displayName = 'TextField';
export default TextField;