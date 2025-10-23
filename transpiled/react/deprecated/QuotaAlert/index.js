import React from 'react';
import { QuotaPaywall } from "cozy-ui/transpiled/react/Paywall";
import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
var logDeprecatedComponent = createDepreciationLogger();
/**
 * @deprecated This component is depreacated, please use [QuotaPaywall](#/Paywall) instead.
 */

var QuotaAlert = function QuotaAlert(_ref) {
  var onClose = _ref.onClose;
  logDeprecatedComponent('QuotaAlert is now exported from the cozy-ui as QuotaPaywall. Please import the component from "cozy-ui/transpiled/react/Paywall"');
  return /*#__PURE__*/React.createElement(QuotaPaywall, {
    onClose: onClose
  });
};

export default QuotaAlert;