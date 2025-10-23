import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import once from 'lodash/once';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
var styles = {
  "intentModal": "styles__intentModal___1NbfY",
  "intentModal__cross": "styles__intentModal__cross___1ISTs"
};
import IntentIframe from "cozy-ui/transpiled/react/IntentIframe";
import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
import Modal from "cozy-ui/transpiled/react/deprecated/Modal";
var logIntentModalDepecrated = createDepreciationLogger();
/**
 * Render a modal for the specified intent.
 *
 * The modal for an intent takes the majority of the viewport.
 *
 * @deprecated Please use IntentIframe with Dialog instead
 */

var IntentModal = /*#__PURE__*/function (_Component) {
  _inherits(IntentModal, _Component);

  var _super = _createSuper(IntentModal);

  function IntentModal(props, context) {
    var _this;

    _classCallCheck(this, IntentModal);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "hideCross", function () {
      _this.setState({
        closable: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showCross", function () {
      _this.setState({
        closable: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "dismiss", once(function (evt) {
      var dismissAction = _this.props.dismissAction;
      dismissAction && dismissAction(evt);
    }));

    logIntentModalDepecrated('The IntentModal component has been deprecated and should be replaced by IntentIframe wrapped in Dialog');
    _this.state = {
      closable: true
    };
    return _this;
  }

  _createClass(IntentModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          action = _this$props.action,
          doctype = _this$props.doctype,
          options = _this$props.options,
          onComplete = _this$props.onComplete,
          onError = _this$props.onError,
          create = _this$props.create;
      var modalProps = Object.keys(Modal.propTypes).reduce(function (props, key) {
        return _objectSpread(_objectSpread({}, props), {}, _defineProperty({}, key, _this2.props[key]));
      }, {});
      return /*#__PURE__*/React.createElement(Modal, _extends({}, modalProps, {
        closable: this.state.closable,
        key: "modal",
        className: styles.intentModal,
        closeBtnClassName: styles.intentModal__cross,
        dismissAction: this.dismiss,
        overflowHidden: true
      }), /*#__PURE__*/React.createElement(IntentIframe, {
        action: action,
        create: create,
        data: options,
        onCancel: this.dismiss,
        onError: onError,
        onTerminate: onComplete,
        type: doctype,
        onHideCross: this.hideCross,
        onShowCross: this.showCross
      }));
    }
  }]);

  return IntentModal;
}(Component);

IntentModal.propTypes = _objectSpread(_objectSpread({}, Modal.propTypes), {}, {
  /** What should happen when the intent has completed */
  onComplete: PropTypes.func.isRequired,

  /** What should happen if an intent error occurs */
  onError: PropTypes.func,

  /** Action you want to execute */
  action: PropTypes.string.isRequired,

  /** Doctype on which you want to execute the action */
  doctype: PropTypes.string.isRequired
});
IntentModal.defaultProps = _objectSpread({}, Modal.defaultProps);
export default IntentModal;