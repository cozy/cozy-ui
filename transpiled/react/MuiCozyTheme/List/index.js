import React from 'react';
import List from "cozy-ui/transpiled/react/List";
import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
var logDeprecatedComponent = createDepreciationLogger();

var DeprecatedComponent = function DeprecatedComponent(props) {
  logDeprecatedComponent('List is now exported from the cozy-ui List folder. Please change the import path to "cozy-ui/transpiled/react/List"');
  return /*#__PURE__*/React.createElement(List, props);
};

export default DeprecatedComponent;