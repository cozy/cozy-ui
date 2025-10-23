import _defineProperty from "@babel/runtime/helpers/defineProperty";
import cx from 'classnames';
import Types from 'prop-types';
import React from 'react';
var styles = {
  "Figure-currency": "Figure__Figure-currency___195-B",
  "Figure-content--positive": "Figure__Figure-content--positive___1qyd8",
  "Figure-content--negative": "Figure__Figure-content--negative___3ACbA",
  "Figure-content--warning": "Figure__Figure-content--warning___1Pn6n",
  "Figure-total": "Figure__Figure-total___MZ7Xt",
  "Figure__currency--withSpacing": "Figure__Figure__currency--withSpacing___2eXTy",
  "Figure--big": "Figure__Figure--big___1b5ml",
  "Figure--clickable": "Figure__Figure--clickable___3i82u",
  "Figure_blur": "Figure__Figure_blur___1p0la",
  "Figure--inline": "Figure__Figure--inline___2L5SE"
};
/**
 * Shows a number, typically a balance or an important financial
 * number in a bold way.
 */

var stylePositive = styles['Figure-content--positive'];
var styleNegative = styles['Figure-content--negative'];
var styleWarning = styles['Figure-content--warning'];
var styleBig = styles['Figure--big'];
var styleClickable = styles['Figure--clickable'];

var Figure = function Figure(props) {
  var _cx;

  var symbol = props.symbol,
      _props$withCurrencySp = props.withCurrencySpacing,
      withCurrencySpacing = _props$withCurrencySp === void 0 ? true : _props$withCurrencySp,
      coloredPositive = props.coloredPositive,
      coloredNegative = props.coloredNegative,
      coloredWarning = props.coloredWarning,
      warningLimit = props.warningLimit,
      signed = props.signed,
      className = props.className,
      total = props.total,
      totalClassName = props.totalClassName,
      currencyClassName = props.currencyClassName,
      size = props.size,
      onClick = props.onClick,
      inline = props.inline,
      blurred = props.blurred;
  var decimalNumbers = props.decimalNumbers;
  decimalNumbers = isNaN(decimalNumbers) ? 2 : decimalNumbers;
  var totalLocalized = typeof total === 'number' ? total.toLocaleString('fr-FR', {
    minimumFractionDigits: decimalNumbers,
    maximumFractionDigits: decimalNumbers
  }) : total;
  var isTotalPositive = total > 0;
  var isTotalInLimit = total > warningLimit;
  var isWarning = !isTotalPositive && !isTotalInLimit && coloredWarning;
  return /*#__PURE__*/React.createElement("div", {
    className: cx((_cx = {}, _defineProperty(_cx, stylePositive, isTotalPositive && coloredPositive), _defineProperty(_cx, styleNegative, total !== 0 && !isTotalPositive && !isWarning && coloredNegative), _defineProperty(_cx, styleWarning, isWarning), _defineProperty(_cx, styleBig, size == 'big'), _defineProperty(_cx, styleClickable, onClick), _defineProperty(_cx, styles.Figure_blur, blurred), _defineProperty(_cx, styles['Figure--inline'], inline), _cx), className),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: cx(styles['Figure-total'], totalClassName)
  }, isTotalPositive && signed && '+', totalLocalized), symbol && /*#__PURE__*/React.createElement("span", {
    className: cx(styles['Figure-currency'], _defineProperty({}, styles['Figure__currency--withSpacing'], withCurrencySpacing), currencyClassName)
  }, symbol));
};

Figure.propTypes = {
  /** Number to display */
  total: Types.oneOfType([Types.number, Types.string]).isRequired,

  /** Class name applied to the element wrapping the number */
  totalClassName: Types.string,

  /** Currency to show */
  symbol: Types.string,
  currencyClassName: Types.string,

  /** Colors positive numbers in green */
  coloredPositive: Types.bool,

  /** Colors negative numbers in red */
  coloredNegative: Types.bool,

  /** Displays the sign */
  signed: Types.bool,

  /** Numbers of decimals to show (default=2) */
  decimalNumbers: Types.number,

  /** Whether to add a specific class to show warning */
  warningLimit: Types.number,

  /** Whether to add some spacing between the figure and the currency or not */
  withCurrencySpacing: Types.bool,

  /** Blur the amount, useful for personal content (banking for example) */
  blurred: Types.bool
};
export default Figure;