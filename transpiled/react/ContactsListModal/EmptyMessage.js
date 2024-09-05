import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className"];
import cx from 'classnames';
import React from 'react';
import Typography from "cozy-ui/transpiled/react/Typography";

var EmptyMessage = function EmptyMessage(props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(Typography, _extends({
    className: cx('u-ta-center u-pv-2', className)
  }, rest, {
    variant: "body1"
  }));
};

export default EmptyMessage;