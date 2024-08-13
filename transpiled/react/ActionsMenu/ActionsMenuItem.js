import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["isListItem", "className"];
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cx from 'classnames';
import MenuItem from "cozy-ui/transpiled/react/MenuItem";
import ListItem from "cozy-ui/transpiled/react/ListItem";

var cleanPropsForDOM = function cleanPropsForDOM(props) {
  var nonDOMProps = ['docs', 'action', 't', 'f', 'lang'];
  return omit(props, nonDOMProps);
};

var ActionsMenuItem = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var isListItem = _ref.isListItem,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var Component = isListItem ? ListItem : MenuItem;
  var compProps = cleanPropsForDOM(props);
  return /*#__PURE__*/React.createElement(Component, _extends({}, compProps, {
    className: cx(className, 'cozyActionsItem'),
    ref: ref,
    button: true,
    ellipsis: false
  }));
});
ActionsMenuItem.displayName = 'ActionsMenuItem';
ActionsMenuItem.propTypes = {
  className: PropTypes.string,

  /** Whether the ActionsMenuItem will return a ListItem or MenuItem */
  isListItem: PropTypes.bool
};
export default ActionsMenuItem;