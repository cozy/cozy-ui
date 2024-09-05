import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import throttle from 'lodash/throttle';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import breakpoints, { getBreakpointsStatus } from "cozy-ui/transpiled/react/helpers/breakpoints";
/**
 * HOC providing the `breakpoints` property to its children to help
 * with responsive web design.
 *
 * `breakpoints` values will reflect if the window.innerWidth is under
 * those breakpoints.
 *
 * @Example
 * ````
 * // here we define `mobile` as a screen under 1000px
 * const B = withBreakpoints({ mobile: 1000 })(A)
 * ````
 *
 * `A` will receive `{ breakpoints: { mobile: true }}` if the screen
 * width is under 1000px.
 *
 * `A` will receive `{ breakpoints: { mobile: false }}` if the screen
 * width is over 1000px;
 *
 *
 */

var withBreakpoints = function withBreakpoints() {
  var bp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : breakpoints;
  return function (Wrapped) {
    var Aware = /*#__PURE__*/function (_Component) {
      _inherits(Aware, _Component);

      var _super = _createSuper(Aware);

      function Aware(props) {
        var _this;

        _classCallCheck(this, Aware);

        _this = _super.call(this, props);
        _this.state = {
          breakpoints: getBreakpointsStatus(bp)
        };
        _this.checkBreakpoints = throttle(function () {
          _this.setState({
            breakpoints: getBreakpointsStatus(bp)
          });
        }, 100, {
          trailing: true
        });
        return _this;
      }

      _createClass(Aware, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          window.addEventListener('resize', this.checkBreakpoints);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener('resize', this.checkBreakpoints);
        }
      }, {
        key: "render",
        value: function render() {
          var props = this.props;
          var breakpoints = this.state.breakpoints;
          return /*#__PURE__*/React.createElement(Wrapped, _extends({}, props, {
            breakpoints: breakpoints
          }));
        }
      }]);

      return Aware;
    }(Component);

    Aware.displayName = "withBreakpoints(".concat(Wrapped.displayName || Wrapped.name, ")");
    return Aware;
  };
};
/**
 * PropTypes to use into the component Proptypes definition
 */


export var breakpointsPropTypes = PropTypes.shape(Object.keys(breakpoints).reduce(function (all, breakpoint) {
  all[breakpoint] = PropTypes.bool.isRequired;
  return all;
}, {}));
export default withBreakpoints;