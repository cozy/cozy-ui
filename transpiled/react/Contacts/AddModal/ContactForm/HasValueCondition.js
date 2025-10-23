/*
  Wrapper for react-final-form field that renders it children only if the field
  with the given name has a truthy value or if the other condition is fulfilled
*/
import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'react-final-form';

var HasValueCondition = function HasValueCondition(_ref) {
  var children = _ref.children,
      otherCondition = _ref.otherCondition,
      name = _ref.name;
  return /*#__PURE__*/React.createElement(Field, {
    name: name,
    subscription: {
      value: true
    }
  }, function (_ref2) {
    var value = _ref2.input.value;
    return otherCondition !== undefined && otherCondition || value ? children : null;
  });
};

HasValueCondition.defaultProps = {
  otherCondition: undefined
};
HasValueCondition.propTypes = {
  children: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  otherCondition: PropTypes.bool
};
export default HasValueCondition;