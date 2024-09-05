import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["actions"],
    _excluded2 = ["className", "components", "disabled", "fullwidth", "styles", "breakpoints", "classNamePrefix", "name"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactSelect, { components } from 'react-select';
import { isIOSApp } from 'cozy-device-helper';
import ControlDefault from "cozy-ui/transpiled/react/SelectBox/ControlDefault";
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
  "FixedGroup": "styles__FixedGroup___2izTc"
};
import Icon from "cozy-ui/transpiled/react/Icon";
import BottomIcon from "cozy-ui/transpiled/react/Icons/Bottom";
import CheckIcon from "cozy-ui/transpiled/react/Icons/Check";
import TopIcon from "cozy-ui/transpiled/react/Icons/Top";
import withBreakpoints from "cozy-ui/transpiled/react/helpers/withBreakpoints";
var heights = {
  tiny: '2rem',
  medium: '2.5rem',
  large: '3rem'
};

var borderStyle = function borderStyle(props, state) {
  if (props.inset) {
    return '.125rem solid var(--paperBackgroundColor)';
  }

  return ".0625rem solid ".concat(state.isFocused ? 'var(--primaryColor)' : 'var(--borderMainColor)');
};

var customStyles = function customStyles(props) {
  return {
    control: function control(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        // The gray background color is managed via the select--disabled
        // class applied below
        backgroundColor: props.disabled ? 'transparent' : 'var(--paperBackgroundColor)',
        border: borderStyle(props, state),
        ':hover': {
          borderColor: props.inset ? 'var(--paperBackgroundColor)' : 'var(--hintTextColor)',
          backgroundColor: props.inset ? 'var(--defaultBackgroundColor)' : 'var(--paperBackgroundColor)',
          cursor: 'pointer'
        },
        borderRadius: '.1875rem',
        boxShadow: 'unset',
        height: heights[props.size],
        minHeight: heights[props.size]
      });
    },
    placeholder: function placeholder(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        color: 'var(--secondaryTextColor)'
      });
    },
    dropdownIndicator: function dropdownIndicator(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        marginRight: '.75rem',
        height: '.875rem',
        width: '.875rem',
        padding: 0
      });
    },
    indicatorSeparator: function indicatorSeparator() {
      return {
        display: 'none'
      };
    },
    valueContainer: function valueContainer(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        color: 'var(--primaryTextColor)'
      });
    },
    singleValue: function singleValue(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        color: 'var(--primaryTextColor)'
      });
    },
    multiValue: function multiValue(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        backgroundColor: 'var(--hintTextColor)'
      });
    },
    menu: function menu(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        backgroundColor: 'var(--paperBackgroundColor)',
        zIndex: 10
      });
    }
  };
};
/**
 * Determines maxHeight property for menuList component. This value is computed
 * with a container element and the current SelectBox element.
 * The container element defines an element which the SelectBox should not
 * overflow.
 * @param  {object} container React reference to an element containing
 * the SelectBox
 * @param  {object} element    React reference to the ReactSelect element
 * @return {object}            A style object, with `menuList` property set.
 */


var computedMenuListHeightStyles = function computedMenuListHeightStyles(container, selectElement) {
  if (!(container && selectElement)) return {};
  var containerPaddingTop = container.style.paddingTop || '0px';
  var containerPaddingBottom = container.style.paddingBottom || '0px';
  return {
    menuList: function menuList(base) {
      var basePaddings = (base.paddingTop || 0) + (base.paddingBottom || 0);
      var spaceLeft = container.getBoundingClientRect().bottom - selectElement.getBoundingClientRect().bottom - basePaddings;
      return _objectSpread(_objectSpread({}, base), {}, {
        // containerPaddingTop and containerPaddingBottom can be in `rem`, so
        // let's use calc()
        maxHeight: "calc(".concat(spaceLeft, "px - ").concat(containerPaddingTop, " - ").concat(containerPaddingBottom, ")")
      });
    }
  };
};

var DropdownIndicator = function DropdownIndicator(props) {
  return /*#__PURE__*/React.createElement(components.DropdownIndicator, props, /*#__PURE__*/React.createElement(Icon, {
    icon: props.selectProps.menuIsOpen ? TopIcon : BottomIcon,
    color: "var(--iconTextColor)",
    width: "20",
    height: "16"
  }));
};

var reactSelectControl = function reactSelectControl(CustomControl) {
  return function (_ref) {
    var innerProps = _ref.innerProps,
        innerRef = _ref.innerRef,
        children = _ref.children;
    return /*#__PURE__*/React.createElement("div", _extends({}, innerProps, {
      ref: innerRef
    }), CustomControl, /*#__PURE__*/React.createElement("div", {
      className: styles['select-control__input']
    }, children));
  };
};

var Option = function Option(_ref2) {
  var _classNames;

  var children = _ref2.children,
      isSelected = _ref2.isSelected,
      isFocused = _ref2.isFocused,
      isDisabled = _ref2.isDisabled,
      innerProps = _ref2.innerProps,
      innerRef = _ref2.innerRef,
      labelComponent = _ref2.labelComponent,
      withCheckbox = _ref2.withCheckbox;
  return /*#__PURE__*/React.createElement("div", _extends({}, innerProps, {
    ref: innerRef,
    className: classNames(styles['select-option'], (_classNames = {}, _defineProperty(_classNames, styles['select-option--selected'], isSelected && !withCheckbox), _defineProperty(_classNames, styles['select-option--focused'], isFocused), _defineProperty(_classNames, styles['select-option--disabled'], isDisabled), _classNames))
  }), withCheckbox && /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    readOnly: true,
    checked: isSelected,
    className: styles['select-option__checkbox']
  }), /*#__PURE__*/React.createElement("span", {
    className: styles['select-option__label']
  }, /*#__PURE__*/React.createElement("span", {
    className: "u-ellipsis"
  }, labelComponent ? labelComponent : children), labelComponent ? children : false), !withCheckbox && /*#__PURE__*/React.createElement("span", {
    className: styles['select-option__checkmark']
  }, isSelected && /*#__PURE__*/React.createElement(Icon, {
    icon: CheckIcon,
    color: "var(--primaryColor)",
    className: "u-ph-half"
  })));
};

Option.propTypes = {
  withCheckbox: PropTypes.bool,
  labelComponent: PropTypes.node
};
Option.defaultProps = {
  withCheckbox: false
};

var CheckboxOption = function CheckboxOption(_ref3) {
  var props = _extends({}, _ref3);

  return /*#__PURE__*/React.createElement(Option, _extends({}, props, {
    withCheckbox: true
  }));
};

CheckboxOption.propTypes = {};

var ActionsOption = function ActionsOption(_ref4) {
  var actions = _ref4.actions,
      props = _objectWithoutProperties(_ref4, _excluded);

  return /*#__PURE__*/React.createElement(Option, _extends({}, props, {
    labelComponent: props.children
  }), /*#__PURE__*/React.createElement("span", {
    className: styles['select-option__actions']
  }, actions.map(function (action, index) {
    return /*#__PURE__*/React.createElement(Icon, _extends({}, action.iconProps, {
      key: index,
      icon: action.icon,
      color: props.isFocused ? 'var(--iconTextColor)' : 'var(--hintTextColor)',
      className: "u-ph-half",
      onClick: function onClick(e) {
        e.stopPropagation();
        action.onClick(props);
      }
    }));
  })));
};

ActionsOption.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    onClick: PropTypes.func,
    iconProps: PropTypes.object
  }))
};
ActionsOption.defaultProps = {
  actions: []
}; // With React, the referenced element is in the current property.
// With Preact, the referenced element is the object

var getNodeFromRef = function getNodeFromRef(ref) {
  return ref && ref.current || ref;
};

var customComponents = {
  Control: ControlDefault,
  DropdownIndicator: DropdownIndicator,
  Option: Option
};

var SelectBox = /*#__PURE__*/function (_Component) {
  _inherits(SelectBox, _Component);

  var _super = _createSuper(SelectBox);

  function SelectBox(props) {
    var _this;

    _classCallCheck(this, SelectBox);

    _this = _super.call(this, props);
    _this.state = {
      isOpen: false
    };
    _this.element = null;
    _this.handleRef = _this.handleRef.bind(_assertThisInitialized(_this));
    _this.handleOpen = _this.handleOpen.bind(_assertThisInitialized(_this));
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SelectBox, [{
    key: "handleOpen",
    value: function handleOpen() {
      this.refreshMenuStyle();
      this.setState({
        isOpen: true
      });
    }
  }, {
    key: "refreshMenuStyle",
    value: function refreshMenuStyle() {
      if (this.props.container && this.controlRef) {
        this.menuStyle = computedMenuListHeightStyles(getNodeFromRef(this.props.container), this.controlRef);
      }
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var inputRef = this.props.inputRef;

      if (ref && ref.select) {
        if (ref.select.controlRef) {
          // Save control ref to use for menu height computation
          this.controlRef = ref.select.controlRef;
        }

        if (ref.select.inputRef && typeof inputRef === 'function') {
          inputRef(ref.select.inputRef);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames2;

      var _this$props = this.props,
          className = _this$props.className,
          components = _this$props.components,
          disabled = _this$props.disabled,
          fullwidth = _this$props.fullwidth,
          reactSelectStyles = _this$props.styles,
          isMobile = _this$props.breakpoints.isMobile,
          classNamePrefix = _this$props.classNamePrefix,
          name = _this$props.name,
          props = _objectWithoutProperties(_this$props, _excluded2);

      var showOverlay = this.state.isOpen && isMobile;
      return /*#__PURE__*/React.createElement(ReactSelect, _extends({
        ref: this.handleRef,
        components: components ? _objectSpread(_objectSpread({}, customComponents), components) : customComponents,
        styles: _objectSpread(_objectSpread(_objectSpread({}, customStyles(this.props)), reactSelectStyles), this.menuStyle || {}),
        onMenuOpen: this.handleOpen,
        onMenuClose: this.handleClose
      }, props, {
        isDisabled: disabled,
        className: classNames((_classNames2 = {}, _defineProperty(_classNames2, styles['select__overlay'], showOverlay), _defineProperty(_classNames2, styles['select--autowidth'], !fullwidth), _defineProperty(_classNames2, styles['select--disabled'], disabled), _defineProperty(_classNames2, styles['select--fullwidth'], fullwidth), _classNames2), className) // react-select temporarily adds className to its innerComponents
        // but this behavior will soon be removed. For the moment, we
        // cancel it by setting it to empty string
        // needsclick is added only on iOS App since fastclik tries to handle
        // the click and catch the event.
        ,
        classNamePrefix: isIOSApp() ? "needsclick ".concat(classNamePrefix ? classNamePrefix : '') : classNamePrefix ? classNamePrefix : '',
        selectProps: {
          name: name
        }
      }));
    }
  }]);

  return SelectBox;
}(Component);

SelectBox.propTypes = {
  container: PropTypes.object,
  components: PropTypes.object,
  disabled: PropTypes.bool,
  fullwidth: PropTypes.bool,
  inset: PropTypes.bool,
  name: PropTypes.string,
  inputRef: PropTypes.func,
  size: PropTypes.oneOf(['tiny', 'medium', 'large']),
  styles: PropTypes.object
};
SelectBox.defaultProps = {
  components: {},
  fullwidth: false,
  inset: false,
  size: 'large',
  styles: {}
};
export default withBreakpoints()(SelectBox);
export { Option, CheckboxOption, ActionsOption, computedMenuListHeightStyles, reactSelectControl, components, SelectBox };