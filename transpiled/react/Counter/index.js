import React from 'react';
import PropTypes from 'prop-types';

var Counter = function Counter(_ref) {
  var count = _ref.count,
      max = _ref.max;
  return /*#__PURE__*/React.createElement("span", null, count > max ? "".concat(max, "+") : count);
};

Counter.propTypes = {
  count: PropTypes.number,
  max: PropTypes.number
};
Counter.defaultProps = {
  count: 0,
  max: 99
};
export default Counter;