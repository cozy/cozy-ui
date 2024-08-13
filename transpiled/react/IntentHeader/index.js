import React from 'react';
import PropTypes from 'prop-types';
var styles = {
  "intentHeader": "styles__intentHeader___m5Qjh",
  "intentHeader-title": "styles__intentHeader-title___1r4ex",
  "intentHeader-icon": "styles__intentHeader-icon___3s30C"
};
import cx from 'classnames';
export var IntentHeader = function IntentHeader(_ref) {
  var appName = _ref.appName,
      appEditor = _ref.appEditor,
      appIcon = _ref.appIcon,
      className = _ref.className;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles['intentHeader'], className)
  }, /*#__PURE__*/React.createElement("h1", {
    className: styles['intentHeader-title']
  }, /*#__PURE__*/React.createElement("img", {
    className: styles['intentHeader-icon'],
    src: appIcon
  }), appEditor && /*#__PURE__*/React.createElement("span", null, appEditor, "\xA0"), appName));
};
IntentHeader.propTypes = {
  appIcon: PropTypes.string,
  appEditor: PropTypes.string,
  appName: PropTypes.string.isRequired
};
IntentHeader.defaultProps = {
  appIcon: '',
  appEditor: '',
  appName: ''
};
export default IntentHeader;