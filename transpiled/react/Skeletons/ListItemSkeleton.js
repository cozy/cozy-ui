import React from 'react';
import PropTypes from 'prop-types';
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import Skeleton from "cozy-ui/transpiled/react/Skeleton";
import Divider from "cozy-ui/transpiled/react/Divider";

var ListItemSkeleton = function ListItemSkeleton(_ref) {
  var hasSecondary = _ref.hasSecondary,
      divider = _ref.divider;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ListItem, null, /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Skeleton, {
    className: "u-bdrs-4",
    variant: "rect",
    width: 32,
    height: 32
  })), /*#__PURE__*/React.createElement(ListItemText, {
    primary: /*#__PURE__*/React.createElement(Skeleton, {
      width: "75%",
      height: 13
    }),
    secondary: hasSecondary ? /*#__PURE__*/React.createElement(Skeleton, {
      width: "37%",
      height: 13
    }) : undefined
  })), divider && /*#__PURE__*/React.createElement(Divider, null));
};

ListItemSkeleton.propTypes = {
  /** Show secondary line or not */
  hasSecondary: PropTypes.bool,

  /** Show divider after the ListItem */
  divider: PropTypes.bool
};
export default ListItemSkeleton;