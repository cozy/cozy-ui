import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className"];
import cx from 'classnames';
import React from 'react';
var styles = {
  "NarrowContent": "styles__NarrowContent___2rvIN"
};

var NarrowContent = function NarrowContent(props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles.NarrowContent, className)
  }, rest));
};

export default NarrowContent;