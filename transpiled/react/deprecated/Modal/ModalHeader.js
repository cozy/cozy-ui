import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import cx from 'classnames';
import React from 'react';
var styles = {
  "c-modal": "styles__c-modal___dljYk",
  "c-modal-content": "styles__c-modal-content___22N4k",
  "c-modal-header": "styles__c-modal-header___38uqi",
  "c-modal-header--branded": "styles__c-modal-header--branded___17z1P",
  "c-modal-footer": "styles__c-modal-footer___3JCxm",
  "c-modal-container": "styles__c-modal-container___1AAl5",
  "c-modal-wrapper": "styles__c-modal-wrapper___y79-C",
  "c-modal--xsmall": "styles__c-modal--xsmall___VxVzh",
  "c-modal--small": "styles__c-modal--small___3xSfG",
  "c-modal--medium": "styles__c-modal--medium___2Pu0O",
  "c-modal--large": "styles__c-modal--large___2k5qx",
  "c-modal--xlarge": "styles__c-modal--xlarge___ZLRMN",
  "c-modal--xxlarge": "styles__c-modal--xxlarge___18Had",
  "c-modal-wrapper--fullscreen": "styles__c-modal-wrapper--fullscreen___3oSPW",
  "c-modal--fullscreen": "styles__c-modal--fullscreen___4RcnS",
  "c-modal-illu-header": "styles__c-modal-illu-header___2UbH8",
  "c-modal-illu-header--ghost": "styles__c-modal-illu-header--ghost___1gH1t",
  "is-active": "styles__is-active___JlHre",
  "c-modal--small-spacing": "styles__c-modal--small-spacing___1Qal6",
  "c-modal--large-spacing": "styles__c-modal--large-spacing___2ktm1",
  "c-modal-app": "styles__c-modal-app___2FX9h",
  "c-app-editor": "styles__c-app-editor___3FI4Z",
  "c-modal-app-icon": "styles__c-modal-app-icon___3iNz6",
  "c-modal-content-fixed": "styles__c-modal-content-fixed___1F97i",
  "c-modal-footer--button": "styles__c-modal-footer--button___3AdGX",
  "c-modal-section": "styles__c-modal-section___2LJKl",
  "c-modal-close": "styles__c-modal-close___1M8Jn",
  "c-modal--closable": "styles__c-modal--closable___3Wo68",
  "c-modal-close--notitle": "styles__c-modal-close--notitle___3dCIQ",
  "c-modal--overflowHidden": "styles__c-modal--overflowHidden___1QDY9",
  "c-modal-back-button": "styles__c-modal-back-button___AjaZO",
  "spin": "styles__spin___1fJIg",
  "shake": "styles__shake___gVu0K"
};

var ModalHeader = function ModalHeader(_ref) {
  var title = _ref.title,
      children = _ref.children,
      className = _ref.className,
      appIcon = _ref.appIcon,
      appName = _ref.appName,
      appEditor = _ref.appEditor,
      style = _ref.style,
      id = _ref.id;
  var isTitle = typeof children === 'string';
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles['c-modal-header'], className),
    style: style,
    id: id
  }, title && /*#__PURE__*/React.createElement("h2", null, title), isTitle ? /*#__PURE__*/React.createElement("h2", null, children) : children, appName && /*#__PURE__*/React.createElement("h2", {
    className: styles['c-modal-app']
  }, appIcon && /*#__PURE__*/React.createElement("img", {
    className: styles['c-modal-app-icon'],
    src: appIcon
  }), appEditor && /*#__PURE__*/React.createElement("span", {
    className: styles['c-app-editor']
  }, appEditor, "\xA0"), appName));
};

var ModalBrandedHeader = function ModalBrandedHeader(_ref2) {
  var logo = _ref2.logo,
      bg = _ref2.bg,
      className = _ref2.className,
      _ref2$style = _ref2.style,
      style = _ref2$style === void 0 ? {} : _ref2$style;
  return /*#__PURE__*/React.createElement("h2", {
    className: cx(styles['c-modal-header--branded'], className),
    style: _objectSpread({
      background: bg
    }, style)
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: ""
  }));
};

export default ModalHeader;
export { ModalHeader, ModalBrandedHeader };