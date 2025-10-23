import PropTypes from 'prop-types';
import React from 'react';
import Paywall from "cozy-ui/transpiled/react/Paywall/Paywall";
/**
 * Paywall displayed when user disk space is full
 */

var QuotaPaywall = function QuotaPaywall(_ref) {
  var onClose = _ref.onClose;
  return /*#__PURE__*/React.createElement(Paywall, {
    variant: "quota",
    onClose: onClose
  });
};

QuotaPaywall.propTypes = {
  /** Callback used when the user close the paywall */
  onClose: PropTypes.func.isRequired
};
export default QuotaPaywall;