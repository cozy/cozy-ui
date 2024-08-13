import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["icon", "iconSize", "title", "text", "children", "className", "centered", "componentsProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Icon, { iconPropType } from "cozy-ui/transpiled/react/Icon";
import Typography from "cozy-ui/transpiled/react/Typography";
var styles = {
  "c-empty": "styles__c-empty___3w5oV",
  "c-empty--centered": "styles__c-empty--centered___2ijsY",
  "c-empty-img": "styles__c-empty-img___2GC4d",
  "c-empty-img--medium": "styles__c-empty-img--medium___1d2Zd",
  "c-empty-img--large": "styles__c-empty-img--large___3s3vC",
  "c-empty-title": "styles__c-empty-title___2HduE",
  "c-empty-text": "styles__c-empty-text___3HnvR"
};
export var Empty = function Empty(_ref) {
  var _icon$props, _icon$props2;

  var icon = _ref.icon,
      iconSize = _ref.iconSize,
      title = _ref.title,
      text = _ref.text,
      children = _ref.children,
      className = _ref.className,
      centered = _ref.centered,
      componentsProps = _ref.componentsProps,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var isReactIconElement = typeof icon === 'object' && !!icon.props;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles['c-empty'], _defineProperty({}, styles['c-empty--centered'], centered), className)
  }, restProps), icon && (isReactIconElement ? /*#__PURE__*/React.cloneElement(icon, _objectSpread({
    className: cx(styles['c-empty-img'], _defineProperty({}, styles["c-empty-img--".concat(iconSize)], iconSize !== 'normal'), (_icon$props = icon.props) === null || _icon$props === void 0 ? void 0 : _icon$props.className),
    size: ((_icon$props2 = icon.props) === null || _icon$props2 === void 0 ? void 0 : _icon$props2.size) || (icon.type === Icon ? '100%' : undefined)
  }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.icon)) : /*#__PURE__*/React.createElement(Icon, _extends({
    className: cx(styles['c-empty-img'], _defineProperty({}, styles["c-empty-img--".concat(iconSize)], iconSize !== 'normal')),
    icon: icon,
    size: "100%"
  }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.icon))), title && /*#__PURE__*/React.createElement(Typography, _extends({
    gutterBottom: true,
    variant: "h3",
    color: "textPrimary"
  }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.title), title), text && /*#__PURE__*/React.createElement(EmptySubTitle, _extends({
    gutterBottom: true
  }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.text), text), /*#__PURE__*/React.createElement("div", _extends({
    className: styles['c-empty-text']
  }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.childrenContainer), children));
};
Empty.propTypes = {
  icon: iconPropType,
  iconSize: PropTypes.oneOf(['normal', 'medium', 'large']),
  title: PropTypes.node,
  text: PropTypes.node,

  /** Sets horizontal and vertical centring. The reference element is that of a fixed position */
  centered: PropTypes.bool,
  children: PropTypes.node,
  componentsProps: PropTypes.shape({
    icon: PropTypes.object,
    title: PropTypes.object,
    text: PropTypes.object,
    childrenContainer: PropTypes.object
  }),
  className: PropTypes.string
};
Empty.defaultProps = {
  iconSize: 'normal'
};
export var EmptySubTitle = function EmptySubTitle(_ref2) {
  var restProps = _extends({}, _ref2);

  return /*#__PURE__*/React.createElement(Typography, _extends({
    variant: "body1",
    color: "textSecondary"
  }, restProps));
};
export default Empty;