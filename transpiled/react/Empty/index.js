import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["icon", "iconSize", "title", "text", "children", "className"];
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Icon, { iconPropType } from "cozy-ui/transpiled/react/Icon";
var styles = {
  "c-empty": "styles__c-empty___3w5oV",
  "c-empty-img": "styles__c-empty-img___2GC4d",
  "c-empty-img--medium": "styles__c-empty-img--medium___1d2Zd",
  "c-empty-img--large": "styles__c-empty-img--large___3s3vC",
  "c-empty-title": "styles__c-empty-title___2HduE",
  "c-empty-text": "styles__c-empty-text___3HnvR"
};
import Typography from "cozy-ui/transpiled/react/Typography";
export var Empty = function Empty(_ref) {
  var icon = _ref.icon,
      iconSize = _ref.iconSize,
      title = _ref.title,
      text = _ref.text,
      children = _ref.children,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles['c-empty'], className)
  }, restProps), icon && /*#__PURE__*/React.createElement(Icon, {
    className: cx(styles['c-empty-img'], _defineProperty({}, styles["c-empty-img--".concat(iconSize)], iconSize !== 'normal')),
    icon: icon,
    size: "100%"
  }), title && /*#__PURE__*/React.createElement(Typography, {
    gutterBottom: true,
    variant: "h3",
    color: "textPrimary"
  }, title), text && /*#__PURE__*/React.createElement(EmptySubTitle, {
    gutterBottom: true
  }, text), /*#__PURE__*/React.createElement("div", {
    className: styles['c-empty-text']
  }, children));
};
Empty.propTypes = {
  icon: iconPropType,
  iconSize: PropTypes.oneOf(['normal', 'medium', 'large']),
  title: PropTypes.node,
  text: PropTypes.node,
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