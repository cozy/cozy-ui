import PropTypes from 'prop-types';
import React from 'react';
import Paywall from "cozy-ui/transpiled/react/Paywall/Paywall";
import withPaywallLocales from "cozy-ui/transpiled/react/Paywall/locales/withPaywallLocales";
/**
 * Paywall displayed when the user reach the maximum accounts allowed for all konnectors
 */

var MaxAccountsPaywall = function MaxAccountsPaywall(_ref) {
  var max = _ref.max,
      onClose = _ref.onClose;
  return /*#__PURE__*/React.createElement(Paywall, {
    variant: "maxAccounts",
    contentInterpolation: {
      smart_count: max
    },
    onClose: onClose
  });
};

MaxAccountsPaywall.propTypes = {
  /** Maximum accounts allowed for all konnectors */
  max: PropTypes.number.isRequired,

  /** Callback used when the user close the paywall */
  onClose: PropTypes.func.isRequired
};
export default withPaywallLocales(MaxAccountsPaywall);