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

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { getScrollParent } from "cozy-ui/transpiled/react/utils/dom";

var Popover = /*#__PURE__*/function (_Component) {
  _inherits(Popover, _Component);

  var _super = _createSuper(Popover);

  function Popover(props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      style: {}
    });

    _this.defaultStyle = {
      display: 'block',
      visibility: 'hidden',
      position: 'fixed'
    };
    return _this;
  }

  _createClass(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // When the component is ready, then let's do some maths
      requestAnimationFrame(this.computeCoordinates.bind(this));
    }
  }, {
    key: "computeCoordinates",
    value: function computeCoordinates() {
      // Find me & give me my coordinates
      // eslint-disable-next-line react/no-find-dom-node
      var domItem = ReactDOM.findDOMNode(this);
      var domItemCoordinates = domItem.getBoundingClientRect();
      var menuElement = domItem.parentNode;
      var scrollTop = getScrollParent(menuElement);
      var coordinates = menuElement.getBoundingClientRect(); // If we have don't have enough space => maths

      var hasNotEnoughSpace = domItemCoordinates.bottom - scrollTop > window.innerHeight;
      this.setState({
        style: {
          top: hasNotEnoughSpace ? coordinates.top - domItemCoordinates.height : coordinates.top + coordinates.height,
          left: coordinates.left + coordinates.width - domItemCoordinates.width,
          visibility: 'visible'
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          children = _this$props.children;
      return /*#__PURE__*/React.createElement("div", {
        style: _objectSpread(_objectSpread(_objectSpread({}, style), this.defaultStyle), this.state.style),
        className: className
      }, children);
    }
  }]);

  return Popover;
}(Component);

export { Popover as default };
Popover.defaultProps = {
  style: {},
  className: {}
};
Popover.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string
};