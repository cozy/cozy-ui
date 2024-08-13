import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var styles = {
  "toggle": "styles__toggle___3zVsE",
  "checkbox": "styles__checkbox___3ko96",
  "label": "styles__label___3jY1f"
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';

var Toggle = /*#__PURE__*/function (_Component) {
  _inherits(Toggle, _Component);

  var _super = _createSuper(Toggle);

  function Toggle() {
    _classCallCheck(this, Toggle);

    return _super.apply(this, arguments);
  }

  _createClass(Toggle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.warn("The Toggle component is deprecated, please use the Switch component:\n\n    const handleToggle = toggled => {}\n\n    - import Toggle from 'cozy-ui/transpiled/react/Toggle'\n    + import Switch from 'cozy-ui/transpiled/react/Switch'\n\n    - <Toggle onToggle={handleToggle} />\n    + <Switch onClick={ ev => handleToggle(ev.target.checked) } />");
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      if (this.props.onToggle) {
        this.props.onToggle(e.target.checked);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          _this$props$checked = _this$props.checked,
          checked = _this$props$checked === void 0 ? false : _this$props$checked,
          _this$props$disabled = _this$props.disabled,
          disabled = _this$props$disabled === void 0 ? false : _this$props$disabled;
      return /*#__PURE__*/React.createElement("span", {
        className: styles['toggle']
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        id: id,
        className: styles['checkbox'],
        checked: checked,
        disabled: disabled,
        onChange: this.onChange.bind(this)
      }), /*#__PURE__*/React.createElement("label", {
        htmlFor: id,
        className: styles['label']
      }));
    }
  }]);

  return Toggle;
}(Component);

Toggle.propTypes = {
  id: PropTypes.string.isRequired,
  // A unique id for the toggle, used internally.
  checked: PropTypes.bool,
  // The state of the toggle
  disabled: PropTypes.bool,
  // Guess what...
  onToggle: PropTypes.func // A callback when the state of the toggle changes. Called with the new state as argument.

};
export default Toggle;