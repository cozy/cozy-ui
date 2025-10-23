import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["spacing", "tag"];
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
var styles = {
  "Stack--m": "styles__Stack--m___1tSpV",
  "Stack--xs": "styles__Stack--xs___2R5lW",
  "Stack--s": "styles__Stack--s___22WMg",
  "Stack--l": "styles__Stack--l___3oxCJ",
  "Stack--xl": "styles__Stack--xl___3qy-m",
  "Stack--xxl": "styles__Stack--xxl___2KAsb"
};

var Stack = function Stack(_ref) {
  var spacing = _ref.spacing,
      Tag = _ref.tag,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Tag, _extends({}, props, {
    className: cx(props.className, spacing && styles['Stack--' + spacing])
  }));
};

export var spacingProp = PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']);
Stack.propTypes = {
  spacing: spacingProp
};
Stack.defaultProps = {
  spacing: 'm',
  tag: 'div'
};
export default Stack;