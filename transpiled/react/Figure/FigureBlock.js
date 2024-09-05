import classNames from 'classnames';
import Types from 'prop-types';
import React from 'react';
import Figure from "cozy-ui/transpiled/react/Figure/Figure";
var styles = {
  "FigureBlock": "FigureBlock__FigureBlock___YyBoL",
  "FigureBlock-figure": "FigureBlock__FigureBlock-figure___97C8E"
};
import Typography from "cozy-ui/transpiled/react/Typography";
/**
 * Shows a `Figure` with a label, useful for important numbers.
 *
 * A part from `className` and `label`, takes same properties
 * as `Figure`.
 */

var FigureBlock = function FigureBlock(_ref) {
  var className = _ref.className,
      label = _ref.label,
      total = _ref.total,
      symbol = _ref.symbol,
      coloredPositive = _ref.coloredPositive,
      coloredNegative = _ref.coloredNegative,
      signed = _ref.signed,
      _ref$decimalNumbers = _ref.decimalNumbers,
      decimalNumbers = _ref$decimalNumbers === void 0 ? 0 : _ref$decimalNumbers,
      figureClassName = _ref.figureClassName,
      withCurrencySpacing = _ref.withCurrencySpacing;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(styles['FigureBlock'], className)
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    color: "textSecondary"
  }, label), /*#__PURE__*/React.createElement(Figure, {
    size: "big",
    className: classNames(styles['FigureBlock-figure'], figureClassName),
    total: total,
    symbol: symbol,
    coloredPositive: coloredPositive,
    coloredNegative: coloredNegative,
    signed: signed,
    decimalNumbers: decimalNumbers,
    withCurrencySpacing: withCurrencySpacing
  }));
};

FigureBlock.propTypes = {
  /** Label of the figure */
  label: Types.string.isRequired,

  /** Extra classname */
  className: Types.string
};
export default FigureBlock;