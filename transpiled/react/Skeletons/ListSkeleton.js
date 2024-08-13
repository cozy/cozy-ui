import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import React from 'react';
import PropTypes from 'prop-types';
import List from "cozy-ui/transpiled/react/List";
import ListSubheader from "cozy-ui/transpiled/react/ListSubheader";
import ListItemSkeleton from "cozy-ui/transpiled/react/Skeletons/ListItemSkeleton";

var ListSkeleton = function ListSkeleton(_ref) {
  var count = _ref.count,
      hasSecondary = _ref.hasSecondary,
      withSubheader = _ref.withSubheader,
      divider = _ref.divider;
  return /*#__PURE__*/React.createElement(List, {
    subheader: withSubheader ? /*#__PURE__*/React.createElement(ListSubheader, null, "\xA0") : undefined
  }, _toConsumableArray(Array(count).keys()).map(function (_, idx) {
    return /*#__PURE__*/React.createElement(ListItemSkeleton, {
      key: idx,
      hasSecondary: hasSecondary,
      divider: divider
    });
  }));
};

ListSkeleton.propTypes = {
  /** Show secondary line or not */
  hasSecondary: PropTypes.bool,

  /** Number of element to show */
  count: PropTypes.number,

  /** Show divider between ListItems */
  divider: PropTypes.bool
};
ListSkeleton.defaultProps = {
  count: 1
};
export default ListSkeleton;