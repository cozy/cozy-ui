import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
var styles = {
  "c-inputgroup": "styles__c-inputgroup___12OVJ",
  "is-error": "styles__is-error___2dj3S",
  "c-inputgroup--focus": "styles__c-inputgroup--focus___Tk5-Z",
  "c-inputgroup--error": "styles__c-inputgroup--error___1JNbu",
  "c-inputgroup--fullwidth": "styles__c-inputgroup--fullwidth___3nuay",
  "c-inputgroup-main": "styles__c-inputgroup-main___1LP4B",
  "c-inputgroup-side": "styles__c-inputgroup-side___60v0v",
  "c-inputgroup-unit": "styles__c-inputgroup-unit___bFj9a"
};

var InputGroup = /*#__PURE__*/function (_Component) {
  _inherits(InputGroup, _Component);

  var _super = _createSuper(InputGroup);

  function InputGroup(props) {
    var _this;

    _classCallCheck(this, InputGroup);

    _this = _super.call(this, props);
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_this));
    _this.state = {
      focused: false
    };
    return _this;
  }

  _createClass(InputGroup, [{
    key: "handleFocus",
    value: function handleFocus() {
      this.setState({
        focused: true
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.setState({
        focused: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _cx;

      var _this$props = this.props,
          children = _this$props.children,
          prepend = _this$props.prepend,
          append = _this$props.append,
          error = _this$props.error,
          fullwidth = _this$props.fullwidth,
          className = _this$props.className;
      var focused = this.state.focused;
      return /*#__PURE__*/React.createElement("div", {
        className: cx(styles['c-inputgroup'], (_cx = {}, _defineProperty(_cx, styles['c-inputgroup--error'], error), _defineProperty(_cx, styles['c-inputgroup--fullwidth'], fullwidth), _defineProperty(_cx, styles['c-inputgroup--focus'], focused), _cx), className)
      }, prepend && /*#__PURE__*/React.createElement("div", {
        className: styles['c-inputgroup-side']
      }, prepend), /*#__PURE__*/React.createElement("div", {
        className: styles['c-inputgroup-main']
      }, children), append && /*#__PURE__*/React.createElement("div", {
        className: styles['c-inputgroup-side']
      }, append));
    }
  }]);

  return InputGroup;
}(Component);

InputGroup.propTypes = {
  prepend: PropTypes.object,
  append: PropTypes.object,
  error: PropTypes.bool,
  fullwidth: PropTypes.bool,
  className: PropTypes.string
};
InputGroup.defaultProps = {
  error: false,
  fullwidth: false
};

InputGroup.Unit = function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("span", {
    className: styles['c-inputgroup-unit']
  }, children);
};

export default InputGroup;