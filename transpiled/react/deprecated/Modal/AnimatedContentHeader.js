import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { Component } from 'react';

var AnimatedContentHeader = /*#__PURE__*/function (_Component) {
  _inherits(AnimatedContentHeader, _Component);

  var _super = _createSuper(AnimatedContentHeader);

  function AnimatedContentHeader() {
    _classCallCheck(this, AnimatedContentHeader);

    return _super.apply(this, arguments);
  }

  _createClass(AnimatedContentHeader, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimatedContentHeader;
}(Component);

export default AnimatedContentHeader;