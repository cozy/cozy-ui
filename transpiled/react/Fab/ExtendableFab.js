import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["label", "icon", "follow", "topLimit", "scrollOptions"];
import React from 'react';
import Icon from "cozy-ui/transpiled/react/Icon";
import useScroll from "cozy-ui/transpiled/react/hooks/useScroll";
import Fab from "cozy-ui/transpiled/react/Fab";

var ExtendableFab = function ExtendableFab(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      follow = _ref.follow,
      _ref$topLimit = _ref.topLimit,
      topLimit = _ref$topLimit === void 0 ? 50 : _ref$topLimit,
      scrollOptions = _ref.scrollOptions,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useScroll = useScroll(follow, scrollOptions),
      scrollTop = _useScroll.scrollTop;

  var isBelowTopLimit = scrollTop < topLimit;
  return /*#__PURE__*/React.createElement(Fab, _extends({
    "aria-label": label,
    variant: isBelowTopLimit ? 'extended' : 'circular'
  }, rest), /*#__PURE__*/React.createElement(Icon, _extends({
    icon: icon
  }, isBelowTopLimit && {
    className: 'u-mr-half'
  })), isBelowTopLimit && label);
};

export default ExtendableFab;