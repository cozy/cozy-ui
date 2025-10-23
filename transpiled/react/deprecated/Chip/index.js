import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "className", "rounded", "component", "onClick", "disabled", "size", "variant", "theme"],
    _excluded2 = ["children", "className", "disabled"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import cx from 'classnames';
import React from 'react';
var styles = {
  "c-chip": "styles__c-chip___3sc2k",
  "c-chip--round": "styles__c-chip--round___2_oss",
  "c-chip--tinySize": "styles__c-chip--tinySize___3Dsfw",
  "c-chip--smallSize": "styles__c-chip--smallSize___lf4ip",
  "c-chip--normalSize": "styles__c-chip--normalSize___ZCdYE",
  "c-chip--outlinedVariant": "styles__c-chip--outlinedVariant___1j_bo",
  "c-chip--dashedVariant": "styles__c-chip--dashedVariant___3pDfw",
  "c-chip--normalTheme": "styles__c-chip--normalTheme___gBU5V",
  "c-chip--primaryTheme": "styles__c-chip--primaryTheme___2ra2n",
  "c-chip--errorTheme": "styles__c-chip--errorTheme___1v_aF",
  "c-chip--hoverableNormalTheme": "styles__c-chip--hoverableNormalTheme___3VGJe",
  "c-chip--hoverablePrimaryTheme": "styles__c-chip--hoverablePrimaryTheme___2EiKE",
  "c-chip--normalPrimaryTheme": "styles__c-chip--normalPrimaryTheme___BNWJ3",
  "c-chip--hoverableErrorTheme": "styles__c-chip--hoverableErrorTheme___1sVT6",
  "c-chip--outlinedNormalTheme": "styles__c-chip--outlinedNormalTheme___2H2PP",
  "c-chip--clickable": "styles__c-chip--clickable___1Bews",
  "c-chip-separator": "styles__c-chip-separator___2C0c5",
  "c-chip-button": "styles__c-chip-button___3ocF4",
  "c-chip-button--disabled": "styles__c-chip-button--disabled___3T0Bs"
};

var Chip = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Chip, _React$PureComponent);

  var _super = _createSuper(Chip);

  function Chip() {
    _classCallCheck(this, Chip);

    return _super.apply(this, arguments);
  }

  _createClass(Chip, [{
    key: "render",
    value: function render() {
      var _cx;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          rounded = _this$props.rounded,
          Component = _this$props.component,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled,
          size = _this$props.size,
          variant = _this$props.variant,
          theme = _this$props.theme,
          restProps = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement(Component, _extends({
        className: cx(styles['c-chip'], styles["c-chip--".concat(size, "Size")], styles["c-chip--".concat(variant, "Variant")], styles["c-chip--".concat(theme, "Theme")], 'u-breakword', (_cx = {}, _defineProperty(_cx, styles['c-chip--outlinedNormalTheme'], variant === 'outlined' && theme === 'normal'), _defineProperty(_cx, styles['c-chip--hoverableNormalTheme'], variant !== 'normal' && theme === 'normal'), _defineProperty(_cx, styles['c-chip--hoverablePrimaryTheme'], variant !== 'normal' && theme === 'primary'), _defineProperty(_cx, styles['c-chip--normalPrimaryTheme'], variant === 'normal' && theme === 'primary'), _defineProperty(_cx, styles['c-chip--hoverableErrorTheme'], variant !== 'normal' && theme === 'error'), _defineProperty(_cx, styles['c-chip--round'], rounded), _defineProperty(_cx, styles['c-chip--clickable'], onClick && !disabled), _defineProperty(_cx, styles['c-chip-button--disabled'], onClick && disabled), _cx), className),
        onClick: onClick,
        disabled: disabled
      }, restProps), children);
    }
  }]);

  return Chip;
}(React.PureComponent);

_defineProperty(Chip, "defaultProps", {
  component: 'div',
  size: 'normal',
  variant: 'normal',
  theme: 'normal'
});

export default Chip;
export var RoundChip = function RoundChip(props) {
  return /*#__PURE__*/React.createElement(Chip, _extends({}, props, {
    rounded: true
  }));
};
var disabledChipButtonStyle = styles['c-chip-button--disabled'];
export var ChipButton = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(ChipButton, _React$PureComponent2);

  var _super2 = _createSuper(ChipButton);

  function ChipButton() {
    _classCallCheck(this, ChipButton);

    return _super2.apply(this, arguments);
  }

  _createClass(ChipButton, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          restProps = _objectWithoutProperties(_this$props2, _excluded2);

      return /*#__PURE__*/React.createElement(RoundChip, _extends({
        className: cx(styles['c-chip-button'], className, _defineProperty({}, disabledChipButtonStyle, disabled))
      }, restProps), children);
    }
  }]);

  return ChipButton;
}(React.PureComponent);
Chip.Button = ChipButton;
Chip.Round = RoundChip;

Chip.Separator = function (_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement("span", {
    className: cx(styles['c-chip-separator'], className)
  });
};