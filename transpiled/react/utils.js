import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "className"],
    _excluded2 = ["className"];
import React from 'react';

var mkComponent = function mkComponent(Tag) {
  var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (_ref) {
    var children = _ref.children,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, _excluded);

    var extraClassName = extra.className,
        restExtra = _objectWithoutProperties(extra, _excluded2);

    return /*#__PURE__*/React.createElement(Tag, _extends({}, restExtra, props, {
      className: (className || '') + ' ' + (extraClassName || '')
    }), children);
  };
};

export { mkComponent };