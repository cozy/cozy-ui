import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className"],
    _excluded2 = ["className"];
import cx from 'classnames';
import React from 'react';
var styles = {
  "UnorderedList": "styles__UnorderedList___2uFFY",
  "ListItem": "styles__ListItem___3cRoI"
};
import Stack from "cozy-ui/transpiled/react/Stack";
export var UnorderedList = function UnorderedList(props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(Stack, _extends({
    tag: "ul",
    className: cx(styles.UnorderedList, className)
  }, rest));
};
export var ListItem = function ListItem(props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded2);

  return /*#__PURE__*/React.createElement("li", _extends({
    className: cx(styles.ListItem, className)
  }, rest));
};