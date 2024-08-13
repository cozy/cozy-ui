import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["selectProps", "innerProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';

var ControlDefault = function ControlDefault(_ref) {
  var onControlClicked = _ref.selectProps.onControlClicked,
      innerProps = _ref.innerProps,
      props = _objectWithoutProperties(_ref, _excluded);

  // onTouchStart is necessary on mobile
  // see https://github.com/JedWatson/react-select/issues/3806#issuecomment-541325710
  var enhancedInnerProps = _objectSpread(_objectSpread({}, innerProps), {}, {
    onClick: onControlClicked,
    onTouchStart: onControlClicked
  });

  return /*#__PURE__*/React.createElement(components.Control, _extends({}, props, {
    innerProps: enhancedInnerProps
  }));
};

ControlDefault.propTypes = {
  selectProps: PropTypes.object.isRequired
};
export default ControlDefault;