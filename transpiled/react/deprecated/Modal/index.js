import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "description", "title", "closable", "dismissAction", "overflowHidden", "className", "closeBtnClassName", "closeBtnColor", "into", "size", "height", "width", "spacing", "mobileFullscreen", "overlayClassName", "wrapperClassName", "primaryText", "primaryAction", "primaryType", "secondaryText", "secondaryAction", "secondaryType", "containerClassName"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Overlay from "cozy-ui/transpiled/react/deprecated/Overlay";
import migrateProps from "cozy-ui/transpiled/react/helpers/migrateProps";
import Portal from "cozy-ui/transpiled/react/Portal";
import uniqueId from 'lodash/uniqueId';
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
import ModalContent from "cozy-ui/transpiled/react/deprecated/Modal/ModalContent";
import ModalSection from "cozy-ui/transpiled/react/deprecated/Modal/ModalSection";
import { ModalHeader, ModalBrandedHeader } from "cozy-ui/transpiled/react/deprecated/Modal/ModalHeader";
import ModalCross from "cozy-ui/transpiled/react/deprecated/Modal/ModalCross";
import ModalFooter from "cozy-ui/transpiled/react/deprecated/Modal/ModalFooter";
import ModalButtons from "cozy-ui/transpiled/react/deprecated/Modal/ModalButtons";
import AnimatedContentHeader from "cozy-ui/transpiled/react/deprecated/Modal/AnimatedContentHeader";
import ModalBackButton from "cozy-ui/transpiled/react/deprecated/Modal/ModalBackButton";
import { ModalEffects } from "cozy-ui/transpiled/react/deprecated/Modal/ModalEffects";
var ModalDescription = ModalContent;

var ModalTitle = function ModalTitle(props) {
  console.log('ModalTitle is a deprecated component, use ModalHeader instead');
  return /*#__PURE__*/React.createElement(ModalHeader, props);
}; // Present on the body when a Modal is shown, changes the
// z-index of alerts so they appear in front of the modal


export var BODY_CLASS = 'has-modal';
/**
 * @deprecated Please use [CozyDialogs](#/CozyDialogs) or [Dialog](#/Dialog).
 */

var Modal = /*#__PURE__*/function (_Component) {
  _inherits(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleOutsideClick", function (e) {
      if (e.target === e.currentTarget && _this.props.dismissAction) _this.props.dismissAction();
    });

    _this.titleID = uniqueId('modal_');
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.title && !this.props['aria-label']) {
        console.warn('If your modal does not provide a `title` prop, please provide the `aria-label` prop for a11y purposes.');
      }

      var hasBodyClass = document.body.classList.contains(BODY_CLASS);

      if (!hasBodyClass) {
        document.body.classList.add(BODY_CLASS);
        this.shouldRemoveBodyClass = true;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Do not remove the class if it was not added by us
      if (this.shouldRemoveBodyClass) {
        document.body.classList.remove(BODY_CLASS);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _cx2;

      var _this$props = this.props,
          children = _this$props.children,
          description = _this$props.description,
          title = _this$props.title,
          closable = _this$props.closable,
          dismissAction = _this$props.dismissAction,
          overflowHidden = _this$props.overflowHidden,
          className = _this$props.className,
          closeBtnClassName = _this$props.closeBtnClassName,
          closeBtnColor = _this$props.closeBtnColor,
          into = _this$props.into,
          size = _this$props.size,
          height = _this$props.height,
          width = _this$props.width,
          spacing = _this$props.spacing,
          mobileFullscreen = _this$props.mobileFullscreen,
          overlayClassName = _this$props.overlayClassName,
          wrapperClassName = _this$props.wrapperClassName,
          primaryText = _this$props.primaryText,
          primaryAction = _this$props.primaryAction,
          primaryType = _this$props.primaryType,
          secondaryText = _this$props.secondaryText,
          secondaryAction = _this$props.secondaryAction,
          secondaryType = _this$props.secondaryType,
          containerClassName = _this$props.containerClassName,
          restProps = _objectWithoutProperties(_this$props, _excluded);

      var titleID = this.titleID;
      var style = Object.assign({}, height && {
        height: height
      }, width && {
        width: width
      });
      return /*#__PURE__*/React.createElement(Portal, {
        into: into
      }, /*#__PURE__*/React.createElement(ModalEffects, null), /*#__PURE__*/React.createElement("div", {
        className: cx(styles['c-modal-container'], containerClassName)
      }, /*#__PURE__*/React.createElement(Overlay, {
        onEscape: closable ? dismissAction : undefined,
        className: overlayClassName
      }, /*#__PURE__*/React.createElement("div", {
        className: cx(styles['c-modal-wrapper'], _defineProperty({}, styles['c-modal-wrapper--fullscreen'], mobileFullscreen), wrapperClassName),
        onClick: closable ? this.handleOutsideClick : undefined
      }, /*#__PURE__*/React.createElement("div", _extends({
        className: cx(styles['c-modal'], styles["c-modal--".concat(size)], (_cx2 = {}, _defineProperty(_cx2, styles['c-modal--overflowHidden'], overflowHidden), _defineProperty(_cx2, styles["c-modal--".concat(spacing, "-spacing")], spacing), _defineProperty(_cx2, styles['c-modal--fullscreen'], mobileFullscreen), _defineProperty(_cx2, styles['c-modal--closable'], closable), _cx2), className),
        style: style,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": title ? titleID : null
      }, restProps), closable && /*#__PURE__*/React.createElement(ModalCross, {
        className: cx(closeBtnClassName, _defineProperty({}, styles['c-modal-close--notitle'], !title)),
        onClick: dismissAction,
        color: closeBtnColor
      }), title && /*#__PURE__*/React.createElement(ModalHeader, {
        title: title,
        id: titleID
      }), description && /*#__PURE__*/React.createElement(ModalDescription, null, description), children, primaryText && primaryAction || secondaryText && secondaryAction ? /*#__PURE__*/React.createElement(ModalFooter, null, /*#__PURE__*/React.createElement(ModalButtons, {
        primaryText: primaryText,
        primaryAction: primaryAction,
        primaryType: primaryType,
        secondaryText: secondaryText,
        secondaryAction: secondaryAction,
        secondaryType: secondaryType
      })) : null)))));
    }
  }]);

  return Modal;
}(Component);

Modal.propTypes = {
  /** Modal title */
  title: PropTypes.node,

  /** Content for simple modals */
  description: PropTypes.node,

  /** Secondary button type */
  secondaryType: PropTypes.string,

  /** Secondary button text */
  secondaryText: PropTypes.string,

  /** Secondary button callback */
  secondaryAction: PropTypes.func,

  /** Primary button type */
  primaryType: PropTypes.string,

  /** Primary button text */
  primaryText: PropTypes.string,

  /** Primary button callback */
  primaryAction: PropTypes.func,

  /** Display the cross and enable click outside and escape key to close */
  closable: PropTypes.bool,

  /** Use overflowHidden when your content may overflow of your modal */
  overflowHidden: PropTypes.bool,

  /** `className` used on the modal, useful if you want to custom its CSS */
  className: PropTypes.string,

  /** `className` used on the cross, useful if you want to custom its CSS */
  closeBtnClassName: PropTypes.string,

  /** `closeBtnColor` to overwrite the default color of the cross button */
  closeBtnColor: PropTypes.string,

  /** If has a value, the modal will be rendered inside a portal and its value will be passed to Portal
   to control the rendering destination of the Modal */
  into: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  height: PropTypes.string,
  width: PropTypes.string,
  spacing: PropTypes.oneOf(['small', 'large']),

  /** If you want your modal taking all the screen on mobile */
  mobileFullscreen: PropTypes.bool,

  /** className to apply to Overlay component */
  overlayClassName: PropTypes.string,

  /** className to apply to wrapper element */
  wrapperClassName: PropTypes.string,

  /** className to apply to the container element */
  containerClassName: PropTypes.string,

  /** A function to be executed when the modal is dismissed */
  dismissAction: PropTypes.func
};
Modal.defaultProps = {
  primaryType: 'regular',
  secondaryType: 'secondary',
  closable: true,
  overflowHidden: false,
  size: 'small',
  into: 'body',
  mobileFullscreen: false
};
ModalBrandedHeader.propTypes = {
  /** `bg` can be any type of color Hexa, RGB(A), HSL(A), gradient… anything that CSS allows for a color really */
  bg: PropTypes.string.isRequired,

  /** `logo` should be a path to any type of image file supported by browsers */
  logo: PropTypes.string.isRequired
};
ModalHeader.propTypes = {
  appIcon: PropTypes.string,
  appEditor: PropTypes.string,
  appName: PropTypes.string
};
ModalContent.propTypes = {
  iconSrc: PropTypes.node,
  iconDest: PropTypes.node,
  fixed: PropTypes.bool
};
var EnhancedModal = migrateProps([{
  src: 'withCross',
  dest: 'closable'
}, // withCross -> closable
{
  src: 'crossClassName',
  dest: 'closeBtnClassName'
}, // crossClassName -> closeBtnClassName
{
  src: 'crossColor',
  dest: 'closeBtnColor'
}, // crossColor -> closeBtnColor
{
  fn: function fn(props) {
    var newProps;

    if (props.secondaryAction && !props.dismissAction) {
      newProps = _objectSpread({}, props);
      newProps.dismissAction = props.secondaryAction;
      var msg = 'In the future, `secondaryAction` will not be bound to closing actions (clicking on cross, clicking outside), please use `dismissAction` for that';
      return [newProps, msg];
    } else {
      return [props, null];
    }
  }
}])(Modal);
EnhancedModal.propTypes = Modal.propTypes;
EnhancedModal.defaultProps = Modal.defaultProps; // to be able to use them in Styleguidist

Object.assign(EnhancedModal, {
  ModalContent: ModalContent,
  ModalSection: ModalSection,
  ModalFooter: ModalFooter,
  ModalHeader: ModalHeader,
  AnimatedContentHeader: AnimatedContentHeader,
  ModalBrandedHeader: ModalBrandedHeader,
  ModalDescription: ModalDescription,
  ModalBackButton: ModalBackButton
});
export default EnhancedModal;
export { ModalContent, ModalSection, ModalFooter, ModalHeader, AnimatedContentHeader, ModalTitle, ModalButtons, ModalBrandedHeader, ModalDescription, ModalBackButton };