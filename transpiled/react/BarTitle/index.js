import PropTypes from 'prop-types';
import React from 'react';
var styles = {
  "BarTitle": "styles__BarTitle___I5r2e"
};
import Typography from "cozy-ui/transpiled/react/Typography";

var BarTitle = function BarTitle(_ref) {
  var noWrap = _ref.noWrap,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.BarTitle
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h5",
    component: "h1",
    noWrap: noWrap
  }, children));
};

BarTitle.defaultProps = {
  noWrap: false
};
BarTitle.propTypes = {
  /** Add an ellipsis like `noWrap` prop on Typography component does */
  noWrap: PropTypes.bool
};
export default BarTitle;