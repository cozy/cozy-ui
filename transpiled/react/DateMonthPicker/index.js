import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';
import format from 'date-fns/format';
import cx from 'classnames';
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import Icon from "cozy-ui/transpiled/react/Icon";
import LeftIcon from "cozy-ui/transpiled/react/Icons/Left";
import RightIcon from "cozy-ui/transpiled/react/Icons/Right";
var styles = {
  "DateMonthPicker__YearControls": "styles__DateMonthPicker__YearControls___1DGlB",
  "DateMonthPicker__YearButton": "styles__DateMonthPicker__YearButton___3zNDK",
  "DateMonthPicker__MonthButton": "styles__DateMonthPicker__MonthButton___3I_Mm",
  "DateMonthPicker__MonthButton--selected": "styles__DateMonthPicker__MonthButton--selected___40hCm",
  "DateMonthPicker__Year": "styles__DateMonthPicker__Year___387bP",
  "DateMonthPicker__MonthGrid": "styles__DateMonthPicker__MonthGrid___TCFg4"
};

var MonthButton = function MonthButton(_ref) {
  var monthNum = _ref.monthNum,
      onClick = _ref.onClick,
      isSelected = _ref.isSelected;

  var _useI18n = useI18n(),
      f = _useI18n.f; // We do not care about year and day since we are creating the date
  // only to be able to format it into a monthName


  var d = new Date(2019, monthNum, 15);

  var handleClick = function handleClick() {
    onClick(monthNum);
  };

  return /*#__PURE__*/React.createElement("button", {
    className: cx(styles.DateMonthPicker__MonthButton, isSelected ? styles['DateMonthPicker__MonthButton--selected'] : null),
    onClick: handleClick
  }, f(d, 'MMM'));
};

var useCounter = function useCounter(initialValue, min, max) {
  var _useState = useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var increment = function increment() {
    return setState(Math.min(state + 1, max));
  };

  var decrement = function decrement() {
    return setState(Math.max(state - 1, min));
  };

  return [state, decrement, increment];
};

var DateMonthPicker = function DateMonthPicker(_ref2) {
  var initialValue = _ref2.initialValue,
      onSelect = _ref2.onSelect;

  var _initialValue$split$m = initialValue.split('-').map(function (x) {
    return parseInt(x, 10);
  }),
      _initialValue$split$m2 = _slicedToArray(_initialValue$split$m, 2),
      initialYear = _initialValue$split$m2[0],
      initialMonth = _initialValue$split$m2[1];

  var _useCounter = useCounter(parseInt(initialYear, 10), 1990, Infinity),
      _useCounter2 = _slicedToArray(_useCounter, 3),
      year = _useCounter2[0],
      decreaseYear = _useCounter2[1],
      increaseYear = _useCounter2[2];

  var handleClickMonth = function handleClickMonth(month) {
    var d = new Date(year, month, 1);
    onSelect(format(d, 'YYYY-MM-DD'));
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: styles.DateMonthPicker__YearControls
  }, /*#__PURE__*/React.createElement("button", {
    className: styles.DateMonthPicker__YearButton,
    title: year - 1,
    onClick: decreaseYear
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: LeftIcon
  })), /*#__PURE__*/React.createElement("div", {
    className: cx(styles.DateMonthPicker__Year)
  }, year), /*#__PURE__*/React.createElement("button", {
    className: styles.DateMonthPicker__YearButton,
    title: year + 1,
    onClick: increaseYear
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: RightIcon
  }))), /*#__PURE__*/React.createElement("div", {
    className: styles.DateMonthPicker__MonthGrid
  }, range(0, 12).map(function (i) {
    return /*#__PURE__*/React.createElement(MonthButton, {
      key: i,
      isSelected: initialMonth - 1 === i && year == initialYear,
      monthNum: i,
      onClick: handleClickMonth
    });
  })));
};

var dateMonthProp = function dateMonthProp(props, propName, componentName) {
  if (!/^[0-9]{4}-[0-9]{2}$/.test(props[propName])) {
    return new Error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Should be in the form YYYY-MM.');
  }
};

DateMonthPicker.propTypes = {
  onSelect: PropTypes.func.isRequired,
  initialValue: dateMonthProp
};
export default DateMonthPicker;