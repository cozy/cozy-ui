import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className"],
    _excluded2 = ["className"];
import React from 'react';
import Stack from "cozy-ui/transpiled/react/Stack";
import cx from 'classnames';
var styles = {
  "OrderedList": "styles__OrderedList___17A_o",
  "ListItem": "styles__ListItem___2Lu4a"
};
export var OrderedList = function OrderedList(props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(Stack, _extends({
    tag: "ol",
    className: cx(styles.OrderedList, className)
  }, rest));
};
export var ListItem = function ListItem(props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded2);

  return /*#__PURE__*/React.createElement("li", _extends({
    className: cx(styles.ListItem, className)
  }, rest));
};