import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children"];
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import ActionsMenuItem from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem";
import Divider from "cozy-ui/transpiled/react/Divider";
import useBreakpoints from "cozy-ui/transpiled/react/hooks/useBreakpoints";
var ActionsMenuMobileHeader = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile; // To make accessibility work, we need to return a displayed item.
  // The trick is to return an empty one with no padding to simulate a display none.
  // Otherwise it will be impossible to use keyboard navigation for example
  // probably due to the inner workings of Mui


  if (!isMobile) {
    return /*#__PURE__*/React.createElement(ActionsMenuItem, _extends({}, props, {
      ref: ref,
      className: "u-p-0"
    }));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActionsMenuItem, _extends({}, props, {
    ref: ref,
    isListItem: true
  }), children), /*#__PURE__*/React.createElement(Divider, {
    className: "u-mv-half"
  }));
});
ActionsMenuMobileHeader.propTypes = {
  children: PropTypes.node
};
export default ActionsMenuMobileHeader;