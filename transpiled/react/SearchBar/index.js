import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["placeholder", "icon", "size", "type", "label", "componentsProps", "disabledClear", "disabledFocus", "disabledHover", "className", "defaultValue", "value", "elevation", "disabled", "onChange", "onClear", "onFocus", "onBlur"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import cx from 'classnames';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import React, { forwardRef, useState, useMemo } from 'react';
import { locales } from "cozy-ui/transpiled/react/SearchBar/locales/withOnlyLocales";
import ButtonBase from "cozy-ui/transpiled/react/ButtonBase";
import Icon from "cozy-ui/transpiled/react/Icon";
import { iconPropType } from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import CrossIcon from "cozy-ui/transpiled/react/Icons/Cross";
import MagnifierIcon from "cozy-ui/transpiled/react/Icons/Magnifier";
import InputBase from "cozy-ui/transpiled/react/InputBase";
import Paper from "cozy-ui/transpiled/react/Paper";
import Typography from "cozy-ui/transpiled/react/Typography";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var sizeToPixel = {
  small: 40,
  medium: 48,
  large: 56,
  auto: 'auto'
};
var fontSizeToPixel = {
  small: 14,
  medium: 16,
  large: 16,
  auto: 16
};
var radiusBySize = {
  small: 20,
  medium: 24,
  large: 28,
  auto: 24
};
var useStyles = makeStyles(function (theme) {
  return {
    root: {
      display: 'flex',
      boxSizing: 'border-box',
      position: 'relative',
      alignItems: 'center',
      height: function height(_ref) {
        var size = _ref.size;
        return sizeToPixel[size];
      },
      flex: 'auto',
      borderRadius: function borderRadius(_ref2) {
        var size = _ref2.size;
        return radiusBySize[size];
      },
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'transparent',
      backgroundColor: theme.palette.background.default,
      '&:hover': {
        '&:not($disabled):not($focused)': {
          '& $focusHighlight': {
            opacity: 1
          }
        }
      }
    },
    flat: {
      backgroundColor: theme.palette.background.default
    },
    inputBase: {
      flex: 1,
      fontSize: function fontSize(_ref3) {
        var size = _ref3.size;
        return fontSizeToPixel[size];
      },
      paddingLeft: function paddingLeft(_ref4) {
        var icon = _ref4.icon;
        return !icon && '1rem';
      }
    },
    buttonBase: {
      flex: 1,
      justifyContent: 'start',
      height: '100%',
      borderRadius: 99
    },
    typography: {
      color: 'currentColor',
      opacity: 0.42,
      paddingLeft: function paddingLeft(_ref5) {
        var icon = _ref5.icon;
        return !icon && '1rem';
      }
    },
    icon: {
      color: theme.palette.text.secondary,
      padding: '0 1rem'
    },
    commonHighlight: {
      overflow: 'hidden',
      position: 'absolute',
      top: -1,
      right: -1,
      bottom: -1,
      left: -1,
      borderRadius: 'inherit',
      opacity: 0,
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.short
      })
    },
    focusHighlight: {
      pointerEvents: 'none',
      backgroundColor: theme.palette.action.hover
    },
    disableHighlight: {
      backgroundColor: theme.palette.action.disabled
    },
    focused: {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.background.paper
    },
    disabled: {
      '& $icon': {
        color: theme.palette.text.disabled
      },
      '& $disableHighlight': {
        opacity: 1
      }
    }
  };
});
var SearchBar = /*#__PURE__*/forwardRef(function (_ref6, ref) {
  var _cx, _componentsProps$inpu;

  var placeholderProp = _ref6.placeholder,
      icon = _ref6.icon,
      size = _ref6.size,
      type = _ref6.type,
      labelProp = _ref6.label,
      componentsProps = _ref6.componentsProps,
      disabledClear = _ref6.disabledClear,
      disabledFocus = _ref6.disabledFocus,
      disabledHover = _ref6.disabledHover,
      className = _ref6.className,
      defaultValue = _ref6.defaultValue,
      value = _ref6.value,
      elevation = _ref6.elevation,
      disabled = _ref6.disabled,
      onChange = _ref6.onChange,
      onClear = _ref6.onClear,
      onFocus = _ref6.onFocus,
      onBlur = _ref6.onBlur,
      props = _objectWithoutProperties(_ref6, _excluded);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var classes = useStyles({
    size: size,
    type: type,
    icon: icon
  });

  var _useState = useState(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      currentValue = _useState2[0],
      setCurrentValue = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFocused = _useState4[0],
      setIsFocused = _useState4[1];

  var placeholder = placeholderProp || t('SearchBar.placeholder');
  var label = labelProp || t('SearchBar.placeholder');
  var spreadValue = value || currentValue;
  var isSelfControlledComp = typeof value === 'undefined';
  var delayedOnChange = useMemo(function () {
    return debounce(onChange, 375);
  }, [onChange]);

  var handleChange = function handleChange(ev) {
    if (!isSelfControlledComp) return onChange(ev);
    var _value = ev.target.value;

    if (_value.length >= 1) {
      delayedOnChange(ev);
      setCurrentValue(_value);
    } else {
      handleClear(ev);
    }
  };

  var handleClear = function handleClear(ev) {
    onChange(_objectSpread(_objectSpread({}, ev), {}, {
      target: _objectSpread(_objectSpread({}, ev.target), {}, {
        value: ''
      })
    }));
    onClear(ev);
    setCurrentValue('');
  };

  var handleFocus = function handleFocus(ev) {
    onFocus(ev);
    setIsFocused(true);
  };

  var handleBlur = function handleBlur(ev) {
    onBlur(ev);
    setIsFocused(false);
  };

  return /*#__PURE__*/React.createElement(Paper, _extends({
    component: "form",
    elevation: elevation,
    className: cx(className, classes.root, (_cx = {}, _defineProperty(_cx, classes.flat, !elevation), _defineProperty(_cx, classes.elevation, elevation), _defineProperty(_cx, classes.focused, isFocused && !disabledFocus), _defineProperty(_cx, classes.disabled, disabled), _cx)),
    ref: ref
  }, props), type === 'button' ? /*#__PURE__*/React.createElement(ButtonBase, {
    className: classes.buttonBase
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    className: classes.icon,
    icon: icon
  }), typeof label === 'string' ? /*#__PURE__*/React.createElement(Typography, {
    className: classes.typography
  }, label) : label) : /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement(Icon, {
    className: classes.icon,
    icon: icon
  }), /*#__PURE__*/React.createElement(InputBase, _extends({}, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.inputBase, {
    className: cx(classes.inputBase, componentsProps === null || componentsProps === void 0 ? void 0 : (_componentsProps$inpu = componentsProps.inputBase) === null || _componentsProps$inpu === void 0 ? void 0 : _componentsProps$inpu.className),
    placeholder: disabled ? null : placeholder,
    value: disabled ? placeholder : spreadValue,
    disabled: disabled,
    "aria-label": placeholder,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur
  }))), spreadValue && !disabledClear && /*#__PURE__*/React.createElement(IconButton, {
    size: "medium",
    onClick: handleClear
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: CrossIcon
  })), !disabledHover && /*#__PURE__*/React.createElement("span", {
    className: cx(classes.commonHighlight, classes.focusHighlight)
  }), disabled && /*#__PURE__*/React.createElement("span", {
    className: cx(classes.commonHighlight, classes.disableHighlight)
  }));
});
SearchBar.displayName = 'SearchBar';
SearchBar.defaultProps = {
  elevation: 1,
  icon: MagnifierIcon,
  size: 'small',
  type: 'search',
  disabledClear: false,
  disabledFocus: false,
  disabledHover: false,
  defaultValue: '',
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onClear: function onClear() {},
  onBlur: function onBlur() {}
};
SearchBar.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'search']),
  icon: iconPropType,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'auto']),
  componentsProps: PropTypes.shape({
    /** Props spread to InputBase component */
    inputBase: PropTypes.object
  }),

  /** Used to control the component outside of it */
  value: PropTypes.string,

  /** Used only with self-controlled component */
  defaultValue: PropTypes.string,
  disabledClear: PropTypes.bool,
  disabledFocus: PropTypes.bool,
  disabledHover: PropTypes.bool,
  elevation: PropTypes.number,
  placeholder: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onClear: PropTypes.func,
  onBlur: PropTypes.func
};
var SearchBarWithLocales = /*#__PURE__*/forwardRef(function (props, ref) {
  useExtendI18n(locales);
  return /*#__PURE__*/React.createElement(SearchBar, _extends({}, props, {
    ref: ref
  }));
});
export default SearchBarWithLocales;