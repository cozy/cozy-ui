import React from 'react';
import Divider from "cozy-ui/transpiled/react/Divider";
import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
var logDeprecatedDivider = createDepreciationLogger();

var DeprecatedDivider = function DeprecatedDivider(props) {
  logDeprecatedDivider('Divider is now exported from the cozy-ui Divider folder. Please change the import path to "cozy-ui/transpiled/react/divider"');
  return /*#__PURE__*/React.createElement(Divider, props);
};

export default DeprecatedDivider;