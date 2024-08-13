import React from 'react';
import PropTypes from 'prop-types';
var styles = {
  "intentWrapper": "styles__intentWrapper___1ZMvW",
  "intentHeader": "styles__intentHeader___3TDUp",
  "intentContent": "styles__intentContent___1ilx7"
};
import cx from 'classnames';
import { ModalHeader, ModalContent } from "cozy-ui/transpiled/react/deprecated/Modal";
export var IntentWrapper = function IntentWrapper(_ref) {
  var children = _ref.children,
      appName = _ref.appName,
      appEditor = _ref.appEditor,
      appIcon = _ref.appIcon,
      iconSrc = _ref.iconSrc,
      iconDest = _ref.iconDest,
      className = _ref.className;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles['intentWrapper'], className)
  }, /*#__PURE__*/React.createElement(ModalHeader, {
    appIcon: appIcon,
    appName: appName,
    appEditor: appEditor,
    className: styles['intentHeader']
  }), /*#__PURE__*/React.createElement(ModalContent, {
    className: styles['intentContent'],
    iconSrc: iconSrc,
    iconDest: iconDest
  }, children));
};
IntentWrapper.propTypes = {
  appIcon: PropTypes.string,
  appEditor: PropTypes.string,
  appName: PropTypes.string,
  iconSrc: PropTypes.node,
  iconDest: PropTypes.node
};
export default IntentWrapper;