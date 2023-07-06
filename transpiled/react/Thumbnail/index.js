import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "isStacked", "children"];
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
var styles = {
  "container": "Thumbnail__container___2Eg5o",
  "wrapper": "Thumbnail__wrapper___ZoPVg",
  "stacked": "Thumbnail__stacked___2RrRR"
};
/**
 * Wrap an element with an outline or a stacked outline
 * @param {object} params
 * @param {string} params.className
 * @param {boolean} params.isStacked - Either we want the stacking effect
 * @param {node} params.children
 * @returns Wrapped element
 */

var Thumbnail = function Thumbnail(_ref) {
  var className = _ref.className,
      isStacked = _ref.isStacked,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: cx(className, styles['container']),
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: cx(styles['wrapper'], _defineProperty({}, styles['stacked'], isStacked))
  }, children)));
};

Thumbnail.propTypes = {
  className: PropTypes.string,
  isStacked: PropTypes.bool,
  children: PropTypes.node
};
export default Thumbnail;