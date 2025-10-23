import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
var _excluded = ["children", "href"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
var styles = {
  "BarButton": "styles__BarButton___3z5Er",
  "BarButtonIcon": "styles__BarButtonIcon___1pSOT",
  "BarButton--disabled": "styles__BarButton--disabled___5e3Ll"
};
import Icon from "cozy-ui/transpiled/react/Icon";

var MaybeLink = /*#__PURE__*/function (_PureComponent) {
  _inherits(MaybeLink, _PureComponent);

  var _super = _createSuper(MaybeLink);

  function MaybeLink() {
    _classCallCheck(this, MaybeLink);

    return _super.apply(this, arguments);
  }

  _createClass(MaybeLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          href = _this$props.href,
          restProps = _objectWithoutProperties(_this$props, _excluded);

      return href ? /*#__PURE__*/React.createElement("a", _extends({
        href: href
      }, restProps), children) : /*#__PURE__*/React.createElement("div", restProps, children);
    }
  }]);

  return MaybeLink;
}(PureComponent);

MaybeLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func
};
export var BarButton = /*#__PURE__*/function (_PureComponent2) {
  _inherits(BarButton, _PureComponent2);

  var _super2 = _createSuper(BarButton);

  function BarButton() {
    _classCallCheck(this, BarButton);

    return _super2.apply(this, arguments);
  }

  _createClass(BarButton, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          icon = _this$props2.icon,
          href = _this$props2.href,
          onClick = _this$props2.onClick,
          className = _this$props2.className;
      return /*#__PURE__*/React.createElement(MaybeLink, {
        className: cx(styles.BarButton, disabled && styles['BarButton--disabled'], className),
        href: !disabled ? href : undefined,
        onClick: !disabled ? onClick : undefined
      }, /*#__PURE__*/React.createElement(Icon, {
        icon: icon,
        className: styles.BarButtonIcon
      }));
    }
  }]);

  return BarButton;
}(PureComponent);
BarButton.propTypes = {
  /**
   * Renders the component using a lighter grey color.
   */
  disabled: PropTypes.bool,

  /**
   * Renders the component using a anchor tag
   */
  href: PropTypes.string,

  /**
   * Used to render the internal `<Icon />` component.
   */
  icon: Icon.propTypes.icon,

  /**
   * Click event handler on the component.
   */
  onClick: PropTypes.func,

  /**
   * Custom extra class name
   */
  className: PropTypes.string
};
export default BarButton;