import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["isListItem"];
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import MenuItem from "cozy-ui/transpiled/react/MenuItem";
import ListItem from "cozy-ui/transpiled/react/ListItem";

var cleanPropsForDOM = function cleanPropsForDOM(props) {
  var nonDOMProps = ['doc'];
  return omit(props, nonDOMProps);
};

var ActionsMenuItem = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var isListItem = _ref.isListItem,
      props = _objectWithoutProperties(_ref, _excluded);

  var Component = isListItem ? ListItem : MenuItem;
  var compProps = cleanPropsForDOM(props);
  return /*#__PURE__*/React.createElement(Component, _extends({}, compProps, {
    ref: ref,
    button: true,
    ellipsis: false
  }));
});
ActionsMenuItem.displayName = 'ActionsMenuItem';
ActionsMenuItem.propTypes = {
  /** Whether the ActionsMenuItem will return a ListItem or MenuItem */
  isListItem: PropTypes.bool
};
export default ActionsMenuItem;