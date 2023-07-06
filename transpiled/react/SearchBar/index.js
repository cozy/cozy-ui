import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["placeholder", "className", "defaultValue", "elevation", "disabled", "onChange", "onFocus", "onBlur"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { forwardRef, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import debounce from 'lodash/debounce';
import { useI18n } from "cozy-ui/transpiled/react/I18n";
import withOnlyLocales from "cozy-ui/transpiled/react/SearchBar/locales/withOnlyLocales";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
import Paper from "cozy-ui/transpiled/react/Paper";
import InputBase from "cozy-ui/transpiled/react/InputBase";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import Icon from "cozy-ui/transpiled/react/Icon";
import MagnifierIcon from "cozy-ui/transpiled/react/Icons/Magnifier";
import CrossCircleIcon from "cozy-ui/transpiled/react/Icons/CrossCircle";
var useStyles = makeStyles(function (theme) {
  return {
    root: {
      display: 'flex',
      boxSizing: 'border-box',
      position: 'relative',
      alignItems: 'center',
      height: 40,
      flex: 1,
      borderRadius: 99,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'transparent',
      '&:hover': {
        '&:not($disabled):not($focused)': {
          '& $focusHighlight': {
            opacity: 1
          }
        }
      }
    },
    flat: {
      backgroundColor: theme.palette.background.contrast
    },
    inputBase: {
      flex: 1
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
var SearchBar = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _cx;

  var placeholderProp = _ref.placeholder,
      className = _ref.className,
      defaultValue = _ref.defaultValue,
      elevation = _ref.elevation,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var classes = useStyles();

  var _useState = useState(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      currentValue = _useState2[0],
      setCurrentValue = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFocused = _useState4[0],
      setIsFocused = _useState4[1];

  var placeholder = placeholderProp || t('search.placeholder');
  var delayedOnChange = useMemo(function () {
    return debounce(function (event) {
      return onChange(event);
    }, 375);
  }, [onChange]);

  var handleChange = function handleChange(ev) {
    var value = ev.target.value;

    if (value.length >= 1) {
      delayedOnChange(ev);
      setCurrentValue(value);
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
    elevation: elevation ? 1 : 0,
    className: cx(className, classes.root, (_cx = {}, _defineProperty(_cx, classes.flat, !elevation), _defineProperty(_cx, classes.elevation, elevation), _defineProperty(_cx, classes.focused, isFocused), _defineProperty(_cx, classes.disabled, disabled), _cx)),
    ref: ref
  }, props), /*#__PURE__*/React.createElement(Icon, {
    className: classes.icon,
    icon: MagnifierIcon
  }), /*#__PURE__*/React.createElement(InputBase, {
    className: classes.inputBase,
    placeholder: disabled ? null : placeholder,
    value: disabled ? placeholder : currentValue,
    disabled: disabled,
    "aria-label": placeholder,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur
  }), currentValue && /*#__PURE__*/React.createElement(IconButton, {
    size: "medium",
    onClick: handleClear
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: CrossCircleIcon
  })), /*#__PURE__*/React.createElement("span", {
    className: cx(classes.commonHighlight, classes.focusHighlight)
  }), disabled && /*#__PURE__*/React.createElement("span", {
    className: cx(classes.commonHighlight, classes.disableHighlight)
  }));
});
SearchBar.displayName = 'SearchBar';
SearchBar.defaultProps = {
  elevation: true,
  defaultValue: '',
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {}
};
SearchBar.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  elevation: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};
export default withOnlyLocales(SearchBar);