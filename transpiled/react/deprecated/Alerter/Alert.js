import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from "cozy-ui/transpiled/react/deprecated/Button";
var styles = {
  "c-btn--alert-error": "styles__c-btn--alert-error___3uH5i",
  "c-btn--alert-info": "styles__c-btn--alert-info___1xAkg",
  "c-btn--alert-success": "styles__c-btn--alert-success___3PgiM",
  "c-alert": "styles__c-alert___dJvZ8",
  "c-alert-wrapper": "styles__c-alert-wrapper___1VWFK",
  "c-alert--hidden": "styles__c-alert--hidden___2HD9e",
  "c-alert-title": "styles__c-alert-title___229Am",
  "c-alert--error": "styles__c-alert--error___g5tIs",
  "c-alert--success": "styles__c-alert--success___2DGDO",
  "c-alert--info": "styles__c-alert--info___2EDwe",
  "spin": "styles__spin___10b55",
  "shake": "styles__shake___JTDyQ"
};
import cx from 'classnames';
export var Alert = /*#__PURE__*/function (_Component) {
  _inherits(Alert, _Component);

  var _super = _createSuper(Alert);

  function Alert() {
    var _this;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hidden: true
    });

    _defineProperty(_assertThisInitialized(_this), "notifyClosed", function () {
      _this.props.onClose();
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      if (_this.closeTimer) clearTimeout(_this.closeTimer);

      _this.beginClosing();
    });

    _defineProperty(_assertThisInitialized(_this), "buttonAction", function () {
      var buttonAction = _this.props.buttonAction; // pass a way to dismiss the alerter from the button

      if (typeof buttonAction === 'function') buttonAction(_this.close);
    });

    return _this;
  }

  _createClass(Alert, [{
    key: "computeDuration",
    value: function computeDuration() {
      var words = this.props.message.split(/\W/).filter(Boolean);
      var minDuration = this.props.minDuration;
      return Math.max(minDuration, words.length / 3 * 1000);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.duration !== Infinity) {
        this.closeTimer = setTimeout(function () {
          _this2.beginClosing();
        }, this.props.duration === 'auto' ? this.computeDuration() : this.props.duration);
      } // Delay to trigger CSS transition after the first render.
      // Totally open for a better way to achieve this.


      setTimeout(function () {
        _this2.setState({
          hidden: false
        });
      }, 20);
    }
  }, {
    key: "beginClosing",
    value: function beginClosing() {
      this.base.addEventListener('transitionend', this.notifyClosed, false);
      this.setState({
        hidden: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.base.removeEventListener('transitionend', this.notifyClosed, false);
      this.setState({
        hidden: false
      });

      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          message = _this$props.message,
          type = _this$props.type,
          buttonText = _this$props.buttonText;
      var hidden = this.state.hidden;
      return /*#__PURE__*/React.createElement("div", {
        ref: function ref(c) {
          return _this3.base = c;
        },
        className: cx(styles['c-alert'], hidden ? styles['c-alert--hidden'] : ''),
        role: "alert"
      }, /*#__PURE__*/React.createElement("div", {
        className: cx(styles['c-alert-wrapper'], styles["c-alert--".concat(type)])
      }, /*#__PURE__*/React.createElement("p", null, message), buttonText && /*#__PURE__*/React.createElement(Button, {
        onClick: this.buttonAction,
        className: styles["c-btn--alert-".concat(type)],
        label: buttonText,
        size: "tiny"
      })));
    }
  }]);

  return Alert;
}(Component);
Alert.propTypes = {
  /** @type string - Controls the style of the error */
  type: PropTypes.oneOf(['success', 'info', 'error']),

  /** @type {string} - Message to display */
  message: PropTypes.string.isRequired,

  /** @type {function} - Callback when is dismissed */
  onClose: PropTypes.func,

  /** @type {function} - Text of the button, if absent, no button is displayed */
  buttonText: PropTypes.string,

  /** @type {function} - Callback when clicking on the button */
  buttonAction: PropTypes.func
};
Alert.defaultProps = {
  type: 'info',
  onClose: function onClose() {},
  buttonText: undefined,
  buttonAction: function buttonAction() {},
  duration: 'auto'
};
export default Alert;