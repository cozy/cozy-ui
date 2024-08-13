import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["htmlFor", "className", "children", "block", "error"];
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
var styles = {
  "c-label": "styles__c-label___o4ozG",
  "is-error": "styles__is-error___2Dwem",
  "c-label--block": "styles__c-label--block___2ZV_7"
};

var Label = function Label(props) {
  var _cx;

  var htmlFor = props.htmlFor,
      className = props.className,
      children = props.children,
      block = props.block,
      error = props.error,
      otherProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: htmlFor,
    className: cx(styles['c-label'], (_cx = {}, _defineProperty(_cx, styles["c-label--block"], block), _defineProperty(_cx, styles["is-error"], error), _cx), className)
  }, otherProps), children);
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool,
  block: PropTypes.bool
};
Label.defaultProps = {
  className: '',
  error: false,
  block: true
};
export default Label;