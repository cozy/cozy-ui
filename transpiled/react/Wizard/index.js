import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "tag"],
    _excluded2 = ["children"],
    _excluded3 = ["children"],
    _excluded4 = ["children", "narrow", "medium"],
    _excluded5 = ["className"],
    _excluded6 = ["children", "className", "tag", "variant"],
    _excluded7 = ["children", "className", "tag"];
import cx from 'classnames';
import React from 'react';
var styles = {
  "wizard-select": "styles__wizard-select___2-yNW",
  "is-error": "styles__is-error___1X2dc",
  "wizard-select--medium": "styles__wizard-select--medium___kyH-1",
  "wizard-wrapper": "styles__wizard-wrapper___38V4s",
  "wizard-main": "styles__wizard-main___ObvId",
  "wizard-header": "styles__wizard-header___2_r05",
  "wizard-footer": "styles__wizard-footer___-ZrgM",
  "wizard": "styles__wizard___m6AMR",
  "wizard-wrapper--center": "styles__wizard-wrapper--center___EWQI3",
  "wizard-errors": "styles__wizard-errors___1ufSE",
  "wizard--welcome": "styles__wizard--welcome___2Os7m",
  "wizard-logo": "styles__wizard-logo___3Dtx1",
  "wizard-logo-img": "styles__wizard-logo-img___2K1rs",
  "wizard-logo-badge": "styles__wizard-logo-badge___1mcMb",
  "wizard-desc": "styles__wizard-desc___z9QXl",
  "wizard-header-fixed": "styles__wizard-header-fixed___39FT4",
  "wizard-previous": "styles__wizard-previous___2StGt",
  "wizard-brand": "styles__wizard-brand____A68K",
  "wizard-next": "styles__wizard-next___38lPl",
  "wizard-input": "styles__wizard-input___1ltuD",
  "wizard-title": "styles__wizard-title___11Dzr",
  "wizard-dualfield": "styles__wizard-dualfield___254s1",
  "wizard-dualfield--focus": "styles__wizard-dualfield--focus___2Om-l",
  "wizard-dualfield--error": "styles__wizard-dualfield--error___2NR9g",
  "wizard-dualfield-wrapper": "styles__wizard-dualfield-wrapper___VN8PM",
  "wizard-dualfield-input": "styles__wizard-dualfield-input___2z596",
  "wizard-protocol": "styles__wizard-protocol___4g-o1",
  "wizard-select--narrow": "styles__wizard-select--narrow___FTwrG",
  "wizard-notice": "styles__wizard-notice___2g62X",
  "wizard-notice--lost": "styles__wizard-notice--lost___3uoDz",
  "spin": "styles__spin___1yERN",
  "shake": "styles__shake___YNHmI"
};
import Icon from "cozy-ui/transpiled/react/Icon";
import CloudIcon from "cozy-ui/transpiled/react/Icons/Cloud";
import Input from "cozy-ui/transpiled/react/Input";
import Typography from "cozy-ui/transpiled/react/Typography";
import Button from "cozy-ui/transpiled/react/deprecated/Button";
export var Wizard = function Wizard(_ref) {
  var children = _ref.children,
      tag = _ref.tag,
      props = _objectWithoutProperties(_ref, _excluded);

  var Component = tag || 'div';
  return /*#__PURE__*/React.createElement(Component, _extends({
    className: styles['wizard']
  }, props), children);
};
export var WizardWrapper = function WizardWrapper(_ref2) {
  var children = _ref2.children,
      align = _ref2.align;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles['wizard-wrapper'], align == 'center' ? styles['wizard-wrapper--center'] : null)
  }, children);
};
export var WizardFooter = function WizardFooter(_ref3) {
  var children = _ref3.children,
      className = _ref3.className;
  return /*#__PURE__*/React.createElement("footer", {
    className: cx(styles['wizard-footer'], className)
  }, children);
};
export var WizardHeader = function WizardHeader(_ref4) {
  var children = _ref4.children,
      className = _ref4.className;
  return /*#__PURE__*/React.createElement("header", {
    className: cx(styles['wizard-header'], className)
  }, children);
};
export var WizardMain = function WizardMain(_ref5) {
  var children = _ref5.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles['wizard-main']
  }, children);
};
export var WizardDescription = function WizardDescription(_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/React.createElement("p", {
    className: styles['wizard-desc']
  }, children);
};
export var WizardTitle = function WizardTitle(_ref7) {
  var children = _ref7.children,
      tag = _ref7.tag,
      className = _ref7.className;
  return /*#__PURE__*/React.createElement(Typography, {
    variant: tag || 'h3',
    className: cx(styles['wizard-title'], className)
  }, children);
};
export var WizardLogo = function WizardLogo(_ref8) {
  var src = _ref8.src,
      badgeIcon = _ref8.badgeIcon,
      badgeColor = _ref8.badgeColor;
  return /*#__PURE__*/React.createElement("div", {
    className: styles['wizard-logo']
  }, /*#__PURE__*/React.createElement("img", {
    className: styles['wizard-logo-img'],
    src: src,
    alt: "",
    "aria-hidden": "true" // eslint-disable-next-line react/no-unknown-property
    ,
    focusable: "false"
  }), /*#__PURE__*/React.createElement("div", {
    className: styles['wizard-logo-badge']
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: CloudIcon,
    width: badgeIcon,
    height: "20",
    color: badgeColor
  })));
};
export var WizardNextButton = function WizardNextButton(_ref9) {
  var children = _ref9.children,
      props = _objectWithoutProperties(_ref9, _excluded2);

  return /*#__PURE__*/React.createElement(Button, _extends({
    className: styles['wizard-next']
  }, props), children);
};
export var WizardPreviousButton = function WizardPreviousButton(_ref10) {
  var children = _ref10.children,
      props = _objectWithoutProperties(_ref10, _excluded3);

  return /*#__PURE__*/React.createElement(Button, _extends({
    className: styles['wizard-previous']
  }, props), children);
};
export var WizardProtocol = function WizardProtocol(_ref11) {
  var children = _ref11.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles['wizard-protocol']
  }, children);
};
export var WizardSelect = function WizardSelect(_ref12) {
  var _cx;

  var children = _ref12.children,
      narrow = _ref12.narrow,
      medium = _ref12.medium,
      props = _objectWithoutProperties(_ref12, _excluded4);

  return /*#__PURE__*/React.createElement("select", _extends({
    className: cx(styles['wizard-select'], (_cx = {}, _defineProperty(_cx, styles['wizard-select--narrow'], narrow), _defineProperty(_cx, styles['wizard-select--medium'], medium), _cx))
  }, props), children);
};
export var WizardDualField = function WizardDualField(_ref13) {
  var children = _ref13.children,
      hasFocus = _ref13.hasFocus,
      hasError = _ref13.hasError;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles['wizard-dualfield'], hasFocus ? styles['wizard-dualfield--focus'] : null, _defineProperty({}, styles['wizard-dualfield--error'], hasError))
  }, children);
};
export var WizardDualFieldWrapper = function WizardDualFieldWrapper(_ref14) {
  var children = _ref14.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles['wizard-dualfield-wrapper']
  }, children);
};
export var WizardDualFieldInput = function WizardDualFieldInput(_ref15) {
  var className = _ref15.className,
      props = _objectWithoutProperties(_ref15, _excluded5);

  return /*#__PURE__*/React.createElement(Input, _extends({
    className: cx(styles['wizard-dualfield-input'], className)
  }, props));
};
export var WizardNotice = function WizardNotice(_ref16) {
  var children = _ref16.children,
      className = _ref16.className,
      Component = _ref16.tag,
      variant = _ref16.variant,
      props = _objectWithoutProperties(_ref16, _excluded6);

  return /*#__PURE__*/React.createElement(Component, _extends({
    className: cx(styles['wizard-notice'], variant === 'lost' ? styles['wizard-notice--lost'] : null, className)
  }, props), children);
};
export var WizardErrors = function WizardErrors(_ref17) {
  var children = _ref17.children,
      className = _ref17.className,
      Component = _ref17.tag,
      props = _objectWithoutProperties(_ref17, _excluded7);

  return /*#__PURE__*/React.createElement(Component, _extends({
    className: cx(styles['wizard-errors'], 'u-error', className)
  }, props), children);
};