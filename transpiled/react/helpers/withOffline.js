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

import React, { Component } from 'react';
/**
 * Provide a `isOffline` props
 * @param {Component} WrappedComponent
 */

var withOffline = function withOffline(WrappedComponent) {
  return /*#__PURE__*/function (_Component) {
    _inherits(OfflineStateHOC, _Component);

    var _super = _createSuper(OfflineStateHOC);

    function OfflineStateHOC() {
      var _this;

      _classCallCheck(this, OfflineStateHOC);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "state", {
        isOnline: window.navigator.onLine
      });

      _defineProperty(_assertThisInitialized(_this), "setOnline", function () {
        return _this.setState({
          isOnline: true
        });
      });

      _defineProperty(_assertThisInitialized(_this), "setOffline", function () {
        return _this.setState({
          isOnline: false
        });
      });

      return _this;
    }

    _createClass(OfflineStateHOC, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        window.addEventListener('online', this.setOnline);
        window.addEventListener('offline', this.setOffline);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('online', this.setOnline);
        window.removeEventListener('offline', this.setOffline);
      }
    }, {
      key: "render",
      value: function render() {
        var isOnline = this.state.isOnline;
        return /*#__PURE__*/React.createElement(WrappedComponent, _extends({
          isOffline: !isOnline
        }, this.props));
      }
    }]);

    return OfflineStateHOC;
  }(Component);
};

export default withOffline;