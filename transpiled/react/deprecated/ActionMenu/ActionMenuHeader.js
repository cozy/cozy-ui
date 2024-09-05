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
export var ActionMenuHeader = function ActionMenuHeader(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles['c-actionmenu-header'], className)
  }, children);
};
ActionMenuHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};