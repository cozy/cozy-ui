import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import cx from 'classnames';
var styles = {
  "PercentageLine": "PercentageLine__PercentageLine___VIEsK"
};
import PropTypes from 'prop-types';
/**
 * @deprecated Use [Progress](#/Progress)
 */

var PercentageLine = function PercentageLine(_ref) {
  var value = _ref.value,
      color = _ref.color,
      className = _ref.className,
      style = _ref.style;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(className, styles.PercentageLine),
    style: _objectSpread({
      transform: "scaleX(".concat(value / 100, ")"),
      backgroundColor: color
    }, style)
  });
};

PercentageLine.propTypes = {
  /** @type Value in percent */
  value: PropTypes.number.isRequired,

  /** @type CSS color or CSS variable */
  color: PropTypes.string.isRequired,

  /** @type Additional className */
  className: PropTypes.string,

  /** @type Custom style */
  style: PropTypes.object
};
export default PercentageLine;