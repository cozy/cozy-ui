import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["primaryText", "secondaryText", "primaryTextClassName", "secondaryTextClassName", "primary", "secondary", "ellipsis"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import MUIListItemText from '@material-ui/core/ListItemText';
import cx from 'classnames';
import once from 'lodash/once';
import React, { forwardRef, useEffect, useMemo } from 'react';
var logDeprecatedWarning = once(function () {
  console.warn('primaryText/primaryTextClassName and secondaryText/secondaryTextClassName are deprecated. Please use directly the primary prop : primary={<span className="u-error">Error</span>} for example.');
});
var defaultSecondaryTypographyProps = {
  variant: 'caption'
};
var ellipsisClassNames = 'u-db u-ellipsis';

var getTypographyProp = function getTypographyProp(props, className, ellipsis) {
  return !className && !ellipsis ? props : _objectSpread({
    classes: {
      root: cx(className, ellipsis && ellipsisClassNames)
    }
  }, props);
};

var ListItemText = /*#__PURE__*/forwardRef(function (props, ref) {
  var primaryText = props.primaryText,
      secondaryText = props.secondaryText,
      primaryTextClassName = props.primaryTextClassName,
      secondaryTextClassName = props.secondaryTextClassName,
      primaryProp = props.primary,
      secondaryProp = props.secondary,
      ellipsis = props.ellipsis,
      rest = _objectWithoutProperties(props, _excluded);

  useEffect(function () {
    if (primaryText || secondaryText || primaryTextClassName || secondaryTextClassName) {
      logDeprecatedWarning();
    }
  }, [primaryText, secondaryText, primaryTextClassName, secondaryTextClassName]);
  var primary = primaryProp ? primaryProp : primaryText;
  var secondary = secondaryProp ? secondaryProp : secondaryText;
  var primaryTypographyProps = props.primaryTypographyProps,
      secondaryTypographyProps = props.secondaryTypographyProps;
  primaryTypographyProps = useMemo(function () {
    return getTypographyProp(primaryTypographyProps, primaryTextClassName, ellipsis);
  }, [primaryTypographyProps, primaryTextClassName, ellipsis]);
  secondaryTypographyProps = useMemo(function () {
    return getTypographyProp(secondaryTypographyProps || defaultSecondaryTypographyProps, secondaryTextClassName, ellipsis);
  }, [secondaryTypographyProps, secondaryTextClassName, ellipsis]);
  return /*#__PURE__*/React.createElement(MUIListItemText, _extends({
    ref: ref,
    primary: primary,
    secondary: secondary,
    primaryTypographyProps: primaryTypographyProps,
    secondaryTypographyProps: secondaryTypographyProps
  }, rest));
});
ListItemText.displayName = 'ListItemText';
ListItemText.defaultProps = {
  ellipsis: true
};
export default ListItemText;