import React from 'react';
import ListItem from "cozy-ui/transpiled/react/ListItem";
import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
var logDeprecatedComponent = createDepreciationLogger();

var DeprecatedComponent = function DeprecatedComponent(props) {
  logDeprecatedComponent('ListItem is now exported from the cozy-ui ListItem folder. Please change the import path to "cozy-ui/transpiled/react/ListItem"');
  return /*#__PURE__*/React.createElement(ListItem, props);
};

export default DeprecatedComponent;