import React from 'react';
import ListItemSecondaryAction from "cozy-ui/transpiled/react/ListItemSecondaryAction";
import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
var logDeprecatedComponent = createDepreciationLogger();

var DeprecatedComponent = function DeprecatedComponent(props) {
  logDeprecatedComponent('ListItemSecondaryAction is now exported from the cozy-ui ListItemSecondaryAction folder. Please change the import path to "cozy-ui/transpiled/react/ListItemSecondaryAction"');
  return /*#__PURE__*/React.createElement(ListItemSecondaryAction, props);
};

export default DeprecatedComponent;