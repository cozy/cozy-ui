import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from "cozy-ui/transpiled/react/Icon";
import BottomIcon from "cozy-ui/transpiled/react/Icons/Bottom";
import SelectBox from "cozy-ui/transpiled/react/SelectBox";
var styles = {
  "Dropdown__icon": "DropdownFilter__Dropdown__icon___19QZN",
  "Dropdown": "DropdownFilter__Dropdown___afcWb",
  "Select__control": "DropdownFilter__Select__control___3-04c",
  "Select__menu": "DropdownFilter__Select__menu___XLfYX"
};

var SmallArrow = function SmallArrow() {
  return /*#__PURE__*/React.createElement(Icon, {
    className: cx(styles.DropdownFilter__icon, 'u-mr-1'),
    icon: BottomIcon,
    color: "var(--coolGrey)",
    width: 16,
    height: 16
  });
};
/**
 * Renders a generic dropdown
 */


export var DropdownFilter = /*#__PURE__*/function (_Component) {
  _inherits(DropdownFilter, _Component);

  var _super = _createSuper(DropdownFilter);

  function DropdownFilter() {
    _classCallCheck(this, DropdownFilter);

    return _super.apply(this, arguments);
  }

  _createClass(DropdownFilter, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          options = _this$props.options,
          defaultValue = _this$props.defaultValue;
      return /*#__PURE__*/React.createElement("div", {
        className: styles.Dropdown
      }, /*#__PURE__*/React.createElement(SelectBox, {
        classNamePrefix: "sto-sections-select",
        options: options,
        onChange: this.props.onChange,
        defaultValue: defaultValue,
        components: {
          DropdownIndicator: SmallArrow
        },
        isSearchable: false,
        fullwidth: true
      }));
    }
  }]);

  return DropdownFilter;
}(Component);
DropdownFilter.propTypes = {
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.object
};
export default DropdownFilter;