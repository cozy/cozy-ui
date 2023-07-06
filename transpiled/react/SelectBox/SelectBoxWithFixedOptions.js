import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { components } from 'react-select';
import React from 'react';
import groupBy from 'lodash/groupBy';
import SelectBox from "cozy-ui/transpiled/react/SelectBox/SelectBox";
var styles = {
  "select--disabled": "styles__select--disabled___1W3en",
  "select--fullwidth": "styles__select--fullwidth___2l_xM",
  "select-control__input": "styles__select-control__input___1xDlj",
  "select--autowidth": "styles__select--autowidth___16AEp",
  "select-option": "styles__select-option___ov_IT",
  "select-option--disabled": "styles__select-option--disabled___1du57",
  "select-option__actions": "styles__select-option__actions___2WOjb",
  "select-option--focused": "styles__select-option--focused___1Vpjv",
  "select-option--selected": "styles__select-option--selected___R3_ES",
  "select-option__checkbox": "styles__select-option__checkbox___15WVE",
  "select-option__label": "styles__select-option__label___1Xi5R",
  "select-option__checkmark": "styles__select-option__checkmark___ChXXs",
  "select__overlay": "styles__select__overlay___3H8Jy",
  "MenuList": "styles__MenuList___1H_pH",
  "Group": "styles__Group___J6s7k",
  "FixedGroup": "styles__FixedGroup___2izTc",
  "spin": "styles__spin___1n8EJ",
  "shake": "styles__shake___XcClq"
};

var Group = function Group(props) {
  return /*#__PURE__*/React.createElement(components.Group, _extends({}, props, {
    className: props.data.isFixed ? styles.FixedGroup : styles.Group
  }));
};

var MenuList = function MenuList(props) {
  return /*#__PURE__*/React.createElement(components.MenuList, _extends({}, props, {
    className: styles.MenuList
  }));
};

var Nothing = function Nothing() {
  return null;
};

var groupByFixed = function groupByFixed(options) {
  var _groupBy = groupBy(options, function (o) {
    return o.fixed ? 'fixed' : 'normal';
  }),
      _groupBy$fixed = _groupBy.fixed,
      fixed = _groupBy$fixed === void 0 ? [] : _groupBy$fixed,
      _groupBy$normal = _groupBy.normal,
      normal = _groupBy$normal === void 0 ? [] : _groupBy$normal;

  return [{
    label: 'normal',
    options: normal
  }, {
    label: 'fixed',
    isFixed: true,
    options: fixed
  }];
};

var SelectBoxWithFixedOptions = function SelectBoxWithFixedOptions(props) {
  return /*#__PURE__*/React.createElement(SelectBox, _extends({}, props, {
    options: groupByFixed(props.options),
    styles: _objectSpread({}, props.styles),
    components: _objectSpread({
      MenuList: MenuList,
      GroupHeading: Nothing,
      Group: Group
    }, props.components)
  }));
};

SelectBoxWithFixedOptions.defaultProps = {
  styles: {},
  components: {}
};
export default SelectBoxWithFixedOptions;