import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import MuiTabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";

var Tabs = function Tabs(props) {
  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  return /*#__PURE__*/React.createElement(MuiTabs, _extends({
    variant: isMobile ? 'fullWidth' : undefined
  }, props));
};

Tabs.defaultProps = {
  textColor: 'primary',
  TabIndicatorProps: {
    color: 'primary'
  }
};
export { Tabs, Tab };