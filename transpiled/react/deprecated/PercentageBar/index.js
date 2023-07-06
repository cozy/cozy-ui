import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["value", "color", "className"];
import React from 'react';
import PercentageLine from "cozy-ui/transpiled/react/deprecated/PercentageLine";
var styles = {
  "PercentageBar": "styles__PercentageBar___1cT4_",
  "PercentageBar__line": "styles__PercentageBar__line___2AheW"
};
import cx from 'classnames';

var PercentageBar = function PercentageBar(props) {
  var value = props.value,
      color = props.color,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles.PercentageBar, className)
  }, rest), /*#__PURE__*/React.createElement(PercentageLine, {
    value: value,
    color: color,
    className: styles.PercentageBar__line
  }));
};

export default PercentageBar;