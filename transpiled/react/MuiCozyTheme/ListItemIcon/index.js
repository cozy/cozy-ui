import React from 'react';
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
var logDeprecatedComponent = createDepreciationLogger();

var DeprecatedComponent = function DeprecatedComponent(props) {
  logDeprecatedComponent('ListItemIcon is now exported from the cozy-ui ListItemIcon folder. Please change the import path to "cozy-ui/transpiled/react/ListItemIcon"');
  return /*#__PURE__*/React.createElement(ListItemIcon, props);
};

export default DeprecatedComponent;