import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "className", "monoColumn"],
    _excluded2 = ["children"],
    _excluded3 = ["children"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
var styles = {
  "o-layout": "styles__o-layout___3TSz9",
  "o-layout-2panes": "styles__o-layout-2panes___1CDQw"
};
import cx from 'classnames';
export var Layout = function Layout(_ref) {
  var children = _ref.children,
      className = _ref.className,
      monoColumn = _ref.monoColumn,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(monoColumn ? styles['o-layout'] : styles['o-layout-2panes'], className)
  }, rest), children);
};
export var Main = function Main(_ref2) {
  var children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement("main", rest, children);
};
export var Content = /*#__PURE__*/function (_Component) {
  _inherits(Content, _Component);

  var _super = _createSuper(Content);

  function Content() {
    _classCallCheck(this, Content);

    return _super.apply(this, arguments);
  }

  _createClass(Content, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, _excluded3);

      return /*#__PURE__*/React.createElement("div", _extends({
        role: "main"
      }, rest), children);
    }
  }]);

  return Content;
}(Component);
Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  monoColumn: PropTypes.bool
};
Layout.defaultProps = {
  monoColumn: false
};