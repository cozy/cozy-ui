import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
var styles = {
  "c-actionmenu": "styles__c-actionmenu___IUGX7",
  "c-actionmenu--inline": "styles__c-actionmenu--inline___1RWrO",
  "c-actionmenu-header": "styles__c-actionmenu-header___2p_ke",
  "c-actionmenu-item": "styles__c-actionmenu-item___WzUJQ",
  "c-actionmenu-radio": "styles__c-actionmenu-radio___38gls"
};
import { spacingProp } from "cozy-ui/transpiled/react/Stack";
import { Media, Bd, Img } from "cozy-ui/transpiled/react/deprecated/Media";
export var ActionMenuItem = function ActionMenuItem(_ref) {
  var left = _ref.left,
      children = _ref.children,
      right = _ref.right,
      onClick = _ref.onClick,
      className = _ref.className,
      contentSpacing = _ref.contentSpacing;
  return /*#__PURE__*/React.createElement(Media, {
    className: cx(styles['c-actionmenu-item'], className),
    onClick: onClick,
    align: "top"
  }, left && /*#__PURE__*/React.createElement(Img, {
    className: "u-mh-1"
  }, left), /*#__PURE__*/React.createElement(Bd, {
    className: cx(left ? 'u-mr-1' : 'u-mh-1', "u-stack-".concat(contentSpacing))
  }, children), right && /*#__PURE__*/React.createElement(Img, {
    className: "u-mr-1"
  }, right));
};
ActionMenuItem.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,

  /** Controls spacing between between children of the ActionMenuItem */
  contentSpacing: spacingProp
};
ActionMenuItem.defaultProps = {
  contentSpacing: 'xs'
};