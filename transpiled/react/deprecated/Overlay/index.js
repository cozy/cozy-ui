import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import cx from 'classnames';
import omit from 'lodash/omit';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
var styles = {
  "c-overlay": "styles__c-overlay___8W1LN"
};
var ESC_KEYCODE = 27;
var nonDOMProps = ['onEscape', 'children', 'className', 'innerRef'];

var bodyTallerThanWindow = function bodyTallerThanWindow() {
  return document.body.getBoundingClientRect().height > window.innerHeight;
};
/**
 * Display a black overlay on the screen. Stops
 * scrolling on the html/body while displayed.
 *
 * Can react to Escape key
 */


var Overlay = /*#__PURE__*/function (_Component) {
  _inherits(Overlay, _Component);

  var _super = _createSuper(Overlay);

  function Overlay() {
    var _this;

    _classCallCheck(this, Overlay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleKeydown", function (e) {
      if (e.keyCode === ESC_KEYCODE) {
        _this.props.onEscape();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      if (_this.props.onClick && e.target === e.currentTarget) {
        _this.props.onClick();
      }
    });

    return _this;
  }

  _createClass(Overlay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onEscape) {
        document.addEventListener('keydown', this.handleKeydown);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.onEscape) {
        document.removeEventListener('keydown', this.handleKeydown);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          innerRef = _this$props.innerRef;
      var domProps = omit(this.props, nonDOMProps); // We use Overlay when opening an ActionMenu.
      // We don't want to block the scroll on Desktop if the ActionMenu
      // is displayed. So no RemoveScroll if the content is too small
      // @todo Overlay should not RemoveScroll by itself. It should
      // be done by lower component (like ActionMenu / Dialog / Modal...)

      var Wrapper = bodyTallerThanWindow() ? React.Fragment : RemoveScroll;
      return /*#__PURE__*/React.createElement("div", _extends({
        ref: innerRef,
        className: cx(styles['c-overlay'], className),
        onClick: this.handleClick
      }, domProps), /*#__PURE__*/React.createElement(Wrapper, null, children));
    }
  }]);

  return Overlay;
}(Component);

Overlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onEscape: PropTypes.func
};
export default /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Overlay, _extends({
    innerRef: ref
  }, props));
});