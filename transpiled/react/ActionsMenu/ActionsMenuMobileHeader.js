import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children"];
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import ActionsMenuItem from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem";
import Divider from "cozy-ui/transpiled/react/Divider";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
var ActionsMenuMobileHeader = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  if (!isMobile) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActionsMenuItem, _extends({}, props, {
    ref: ref,
    isListItem: true
  }), children), /*#__PURE__*/React.createElement(Divider, {
    className: "u-mv-half"
  }));
});
ActionsMenuMobileHeader.displayName = 'ActionsMenuMobileHeader';
ActionsMenuMobileHeader.propTypes = {
  children: PropTypes.node
};
export default ActionsMenuMobileHeader;