import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children"];
import React from 'react';
import FilePath from "cozy-ui/transpiled/react/FilePath";
import Link from "cozy-ui/transpiled/react/Link";

var FilePathLink = function FilePathLink(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Link, _extends({
    color: "textSecondary",
    underline: "hover"
  }, props), /*#__PURE__*/React.createElement(FilePath, null, children));
};

export default FilePathLink;