import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["gutters"],
    _excluded2 = ["gutters"],
    _excluded3 = ["gutters", "ellipsis"],
    _excluded4 = ["className", "gutters", "ellipsis", "componentElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { forwardRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import MuiListItem from '@material-ui/core/ListItem';
import isMuiElement from '@material-ui/core/utils/isMuiElement';
import { makeStyles } from "cozy-ui/transpiled/react/styles";
import { getLastChild, getChildrenCount, getComponentName, getChildren } from "cozy-ui/transpiled/react/utils/react";
var useStyles = makeStyles({
  gutters: {
    paddingLeft: function paddingLeft(_ref) {
      var guttersValue = _ref.guttersValue;
      return guttersValue.left;
    },
    paddingRight: function paddingRight(_ref2) {
      var guttersValue = _ref2.guttersValue;
      return guttersValue.right;
    }
  },
  secondaryAction: {
    paddingRight: function paddingRight(_ref3) {
      var secondaryActionPaddingRight = _ref3.secondaryActionPaddingRight;
      return secondaryActionPaddingRight;
    }
  }
}); // Return secondaryAction padding right

var useSecondaryAction = function useSecondaryAction(_ref4) {
  var gutters = _ref4.gutters,
      props = _objectWithoutProperties(_ref4, _excluded);

  var BUTTON_SIZE = 48;
  var margin = 8;
  var offset = gutters === 'double' ? margin + 16 : margin;
  var lastChild = getLastChild(props);
  var hasSecondaryAction = lastChild && isMuiElement(lastChild, ['ListItemSecondaryAction']) || false;
  return hasSecondaryAction ? getChildrenCount(lastChild.props) * BUTTON_SIZE + offset : 0;
}; // Return gutters size


var useGutters = function useGutters(_ref5) {
  var gutters = _ref5.gutters,
      props = _objectWithoutProperties(_ref5, _excluded2);

  var guttersValue = gutters === 'double' ? 32 : 16;
  var lastChild = getLastChild(props);
  var isLastChildListItemIcon = lastChild ? getComponentName(lastChild).includes('ListItemIcon') : false;
  var gutterRight = isLastChildListItemIcon ? guttersValue - 8 : guttersValue;
  return {
    left: guttersValue,
    right: gutterRight
  };
}; // Add margin on ListItemSecondaryAction when gutters are double
// Propagates ellipsis prop to ListItemText


var useOverridenChildren = function useOverridenChildren(_ref6) {
  var gutters = _ref6.gutters,
      ellipsis = _ref6.ellipsis,
      props = _objectWithoutProperties(_ref6, _excluded3);

  var children = getChildren(props);
  var childrenCount = getChildrenCount(props);
  return React.Children.map(children, function (child, index) {
    var isLastChild = index === childrenCount - 1;
    var isSecondaryAction = isLastChild && isMuiElement(child, ['ListItemSecondaryAction']) || false;
    var isListItemText = getComponentName(child).includes('ListItemText');

    if (isSecondaryAction && gutters === 'double') {
      return /*#__PURE__*/React.cloneElement(child, {
        className: "".concat(child.props.className, " u-mr-1")
      });
    }

    if (isListItemText) {
      return /*#__PURE__*/React.cloneElement(child, {
        ellipsis: ellipsis
      });
    }

    return child;
  });
};

var ListItem = /*#__PURE__*/forwardRef(function (_ref7, ref) {
  var className = _ref7.className,
      gutters = _ref7.gutters,
      ellipsis = _ref7.ellipsis,
      componentElement = _ref7.componentElement,
      props = _objectWithoutProperties(_ref7, _excluded4);

  var secondaryActionPaddingRight = useSecondaryAction(_objectSpread({
    gutters: gutters
  }, props));
  var guttersValue = useGutters(_objectSpread({
    gutters: gutters
  }, props));
  var styles = useStyles({
    secondaryActionPaddingRight: secondaryActionPaddingRight,
    guttersValue: guttersValue
  });
  var overridenChildren = useOverridenChildren(_objectSpread({
    gutters: gutters,
    ellipsis: ellipsis
  }, props));
  return /*#__PURE__*/React.createElement(MuiListItem, _extends({}, props, {
    component: componentElement || props.component,
    ref: ref,
    classes: merge(props.classes, styles),
    className: cx(className, props.size),
    disableGutters: props.disableGutters || gutters === 'disabled'
  }), overridenChildren);
});
ListItem.displayName = 'ListItem';
ListItem.defaultProps = {
  gutters: 'default',
  size: 'medium'
};
export var LitItemPropTypes = {
  gutters: PropTypes.oneOf(['disabled', 'double', 'default']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  ellipsis: PropTypes.bool,

  /** If the `component` prop is already used to return `ListItem`, this prop still allows you to choose a component to render in `ListItem`. cf:`MenuItem` component */
  componentElement: PropTypes.elementType
};
ListItem.propTypes = LitItemPropTypes;
export default ListItem;