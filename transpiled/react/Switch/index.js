import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["icon"];
import MuiSwitch from '@material-ui/core/Switch';
import React from 'react';
import Icon from "cozy-ui/transpiled/react/Icon";
/**
 * @type JSX.Element<HTMLDivElement, import('@material-ui/core/Switch').SwitchProps>
 */

var Switch = function Switch(_ref) {
  var icon = _ref.icon,
      props = _objectWithoutProperties(_ref, _excluded);

  var _icon = /*#__PURE__*/React.createElement("span", {
    className: "cozySwitchThumb"
  }, !!icon && /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    size: 14
  }));

  return /*#__PURE__*/React.createElement(MuiSwitch, _extends({}, props, {
    icon: _icon,
    checkedIcon: _icon
  }));
};

export default Switch;