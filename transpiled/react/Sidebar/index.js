import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "className"];
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
var styles = {
  "o-sidebar": "styles__o-sidebar___1295j"
};
import { useSetFlagshipUI } from "cozy-ui/transpiled/react/hooks/useSetFlagshipUi/useSetFlagshipUI";
import { useTheme } from '@material-ui/core';

var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var theme = useTheme();
  useSetFlagshipUI({
    bottomBackground: theme.palette.background.default,
    bottomTheme: 'dark'
  }, {
    bottomBackground: theme.palette.background.paper
  }, 'cozy-ui/Sidebar');
  return /*#__PURE__*/React.createElement("aside", _extends({
    id: "sidebar",
    className: cx(styles['o-sidebar'], className)
  }, restProps), children);
};

Sidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
export default Sidebar;