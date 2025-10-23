import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
/**
 * Higher Order Component that wraps functional components into stateful components.
 * Defining a stateful component becomes a matter of setting its initial state
 * and writing a handful of reducers on that state. The state and the reducers will
 * be passed as props to the wrapped functional component.
 * Example:
 * const ToggleButton = withState(initialState = {
 *   on: false
 * }, eventHandlers = setState => ({
 *   toggle: () => {
 *     setState(state => ({ on: !state.on })
 *   }
 * }))(
 *   ({ on, toggle }) => (
 *     <button class={on ? 'on' : 'off'} onClick={toggle}>Go!</button>
 *   )
 * )
 */

var withState = function withState(initialState, eventHandlers) {
  return function (WrappedComponent) {
    return /*#__PURE__*/function (_Component) {
      _inherits(StatefulComponent, _Component);

      var _super = _createSuper(StatefulComponent);

      function StatefulComponent(props) {
        var _this;

        _classCallCheck(this, StatefulComponent);

        _this = _super.call(this, props);
        _this.state = initialState;
        _this.handlers = eventHandlers(_this.setState.bind(_assertThisInitialized(_this)));
        return _this;
      }

      _createClass(StatefulComponent, [{
        key: "render",
        value: function render() {
          return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, this.props, this.state, this.handlers));
        }
      }]);

      return StatefulComponent;
    }(Component);
  };
};

export default withState;