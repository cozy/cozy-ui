import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Grid from "cozy-ui/transpiled/react/Grid";
var styles = {
  "gridItem-container": "styles__gridItem-container___2Xeyk"
};

var GridItem = function GridItem(_ref) {
  var _onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 3,
    sm: 2,
    onClick: function onClick() {
      return _onClick && _onClick();
    },
    className: cx(styles['gridItem-container'])
  }, children);
};

GridItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};
export default GridItem;