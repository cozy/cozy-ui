import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "label", "clearable", "value", "placeholder", "onFocus", "onBlur", "onChange", "minDate", "minDateLabelError", "format", "cancelLabel", "clearLabel", "okLabel", "todayLabel", "showTodayButton", "helperText", "errorLabel", "inputVariant", "inputProps", "KeyboardButtonProps", "enableKeyboard", "mode", "ampm"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker as MuiKeyboardDatePicker, KeyboardTimePicker as MuiKeyboardTimePicker, KeyboardDateTimePicker as MuiKeyboardDateTimePicker, DatePicker as MuiDatePicker, TimePicker as MuiTimePicker, DateTimePicker as MuiDateTimePicker } from '@material-ui/pickers';
import cx from 'classnames';
import formatFNS from 'date-fns/format';
import isBefore from 'date-fns/isBefore';
import LocaleEN from 'date-fns/locale/en-US';
import LocaleFR from 'date-fns/locale/fr';
import subDays from 'date-fns/subDays';
import PropTypes from 'prop-types';
import React, { forwardRef, useState } from 'react';
import { makeFormat } from "cozy-ui/transpiled/react/DatePicker/helpers";
import withOwnLocales from "cozy-ui/transpiled/react/DatePicker/locales/withOwnLocales";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var localesFNS = {
  fr: LocaleFR,
  en: LocaleEN
};
var useStyles = makeStyles(function () {
  return {
    overrides: {
      width: '100%',
      height: function height(isDesktop) {
        return isDesktop ? '5rem' : 'inherit';
      },
      MuiOutlinedInput: {
        '&:focused': {
          notchedOutline: {
            borderColor: 'var(--primaryColor)'
          }
        }
      }
    }
  };
});
var DatePicker = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var className = _ref.className,
      label = _ref.label,
      _ref$clearable = _ref.clearable,
      clearable = _ref$clearable === void 0 ? false : _ref$clearable,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? null : _ref$value,
      placeholder = _ref.placeholder,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      minDate = _ref.minDate,
      minDateLabelError = _ref.minDateLabelError,
      format = _ref.format,
      cancelLabel = _ref.cancelLabel,
      clearLabel = _ref.clearLabel,
      okLabel = _ref.okLabel,
      todayLabel = _ref.todayLabel,
      _ref$showTodayButton = _ref.showTodayButton,
      showTodayButton = _ref$showTodayButton === void 0 ? false : _ref$showTodayButton,
      helperText = _ref.helperText,
      errorLabel = _ref.errorLabel,
      _ref$inputVariant = _ref.inputVariant,
      inputVariant = _ref$inputVariant === void 0 ? 'outlined' : _ref$inputVariant,
      inputProps = _ref.inputProps,
      KeyboardButtonProps = _ref.KeyboardButtonProps,
      enableKeyboard = _ref.enableKeyboard,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? 'date' : _ref$mode,
      ampm = _ref.ampm,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFocused = _useState4[0],
      setIsFocused = _useState4[1];

  var _useBreakpoints = useBreakpoints(),
      isDesktop = _useBreakpoints.isDesktop;

  var classes = useStyles(isDesktop);

  var _useI18n = useI18n(),
      t = _useI18n.t,
      lang = _useI18n.lang;

  var isError = !isFocused && Boolean(error);

  var _helperText = isError ? error : helperText !== null && helperText !== void 0 ? helperText : null;

  var _format = format || makeFormat({
    ampm: ampm,
    mode: mode,
    lang: lang
  });

  var _ampm = ampm !== null && ampm !== void 0 ? ampm : !(mode === 'time' || mode === 'dateTime');

  var _placeholder = placeholder !== null && placeholder !== void 0 ? placeholder : formatFNS(new Date(), _format);

  var _clearLabel = clearLabel || t('clear');

  var _todayLabel = todayLabel || t('today');

  var _cancelLabel = cancelLabel || t('cancel');

  var _okLabel = okLabel || t('ok');

  var _minDateLabelError = minDateLabelError ? minDateLabelError : minDate ? t('minDateLabelError', {
    date: formatFNS(minDate, _format)
  }) : null;

  var _KeyboardButtonProps = _objectSpread({
    'aria-label': label
  }, KeyboardButtonProps);

  var _inputProps = _objectSpread({
    inputMode: 'numeric'
  }, inputProps);

  var handleChange = function handleChange(val) {
    if ((val === null || val === void 0 ? void 0 : val.toString()) !== 'Invalid Date') {
      if (minDate && isBefore(val, subDays(minDate, 1))) {
        setError(_minDateLabelError);
        onChange(val, false);
        return;
      }

      setError(null);
      onChange(val, true);
    } else if (val === '') {
      setError(null);
      onChange(null, true);
    } else {
      setError(errorLabel !== null && errorLabel !== void 0 ? errorLabel : t('invalidDate'));
      onChange(val, false);
    }
  };

  var handleBlur = function handleBlur() {
    setIsFocused(false);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(true);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(false);
  };

  var handleFocus = function handleFocus() {
    setIsFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(true);
  };

  var DatePickerComponent;

  switch (mode) {
    case 'date':
      DatePickerComponent = enableKeyboard ? MuiKeyboardDatePicker : MuiDatePicker;
      break;

    case 'time':
      DatePickerComponent = enableKeyboard ? MuiKeyboardTimePicker : MuiTimePicker;
      break;

    case 'dateTime':
      DatePickerComponent = enableKeyboard ? MuiKeyboardDateTimePicker : MuiDateTimePicker;
      break;
  }

  return /*#__PURE__*/React.createElement(MuiPickersUtilsProvider, {
    utils: DateFnsUtils,
    locale: localesFNS[lang]
  }, /*#__PURE__*/React.createElement(DatePickerComponent, _extends({
    inputRef: ref,
    label: label,
    placeholder: _placeholder,
    value: value,
    helperText: _helperText,
    className: cx(classes.overrides, className),
    minDate: minDate,
    ampm: _ampm,
    format: _format,
    onChange: handleChange,
    error: isError,
    onBlur: handleBlur,
    onFocus: handleFocus,
    inputVariant: inputVariant,
    inputProps: _inputProps,
    KeyboardButtonProps: _KeyboardButtonProps // Modal start
    ,
    showTodayButton: showTodayButton,
    todayLabel: _todayLabel,
    clearable: clearable,
    clearLabel: _clearLabel,
    cancelLabel: _cancelLabel,
    okLabel: _okLabel // Modal end

  }, props)));
});
DatePicker.displayName = 'DatePicker';
DatePicker.prototype = {
  /*
    Classname to override the input style
  */
  className: PropTypes.string,

  /*
    Label of the input
  */
  label: PropTypes.string,

  /*
    Value of th input. If set by default with a Date, isValidDate will be false if the value is empty (KeyboardDatePicker behavior)
  */
  value: PropTypes.string.isRequired,

  /*
    Placeholder of the input
  */
  placeholder: PropTypes.string,

  /*
    Function that returns the value of the input when it changes and if it is a valid Date
  */
  onChange: PropTypes.func.isRequired,

  /*
    Function that returns if the input is blured
  */
  onBlur: PropTypes.func,

  /*
    Function that returns if the input is focused
  */
  onFocus: PropTypes.func,

  /*
    Helper text to display when the input is in error
  */
  helperText: PropTypes.string,

  /*
    Min date selectable with the date picker (exclusive)
  */
  minDate: PropTypes.instanceOf(Date),

  /*
    Error message when the min date is not respected
  */
  minDateLabelError: PropTypes.string,

  /*
    Format of the date
  */
  format: PropTypes.string,

  /*
    Date picker cancellation label
  */
  cancelLabel: PropTypes.string,

  /*
  Show today button
  */
  showTodayButton: PropTypes.bool,

  /*
    Date picker today label
  */
  todayLabel: PropTypes.string,

  /*
    Date picker ok label
  */
  okLabel: PropTypes.string,

  /*
    Show the clear button
  */
  clearable: PropTypes.bool,

  /*
    Date picker clear label
  */
  clearLabel: PropTypes.string,

  /*
    Error message when the date is invalid
  */
  errorLabel: PropTypes.string,

  /*
    Variant of the input
  */
  inputVariant: PropTypes.string,

  /*
    Props to override the input
  */
  inputProps: PropTypes.object,

  /*
    Props to override the keyboard button
  */
  KeyboardButtonProps: PropTypes.object,

  /*
    Enable the keyboard date picker
  */
  enableKeyboard: PropTypes.bool,

  /*
    Mode of the date picker. Default is "date"
  */
  mode: PropTypes.oneOf(['date', 'time', 'dateTime']),

  /*
    Enable the AM/PM selector
  */
  ampm: PropTypes.bool
};
export default withOwnLocales( /*#__PURE__*/React.memo(DatePicker));