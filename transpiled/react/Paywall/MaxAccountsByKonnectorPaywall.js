import PropTypes from 'prop-types';
import React from 'react';
import Paywall from "cozy-ui/transpiled/react/Paywall/Paywall";
import withPaywallLocales from "cozy-ui/transpiled/react/Paywall/locales/withPaywallLocales";
/**
 * Paywall displayed when the user reach the maximum accounts allowed for a konnector
 */

var MaxAccountsByKonnectorPaywall = function MaxAccountsByKonnectorPaywall(_ref) {
  var max = _ref.max,
      konnectorName = _ref.konnectorName,
      onClose = _ref.onClose;
  return /*#__PURE__*/React.createElement(Paywall, {
    variant: "maxAccountsByKonnector",
    contentInterpolation: {
      smart_count: max,
      konnectorName: konnectorName
    },
    onClose: onClose
  });
};

MaxAccountsByKonnectorPaywall.propTypes = {
  /** Maximum accounts allowed for the konnector */
  max: PropTypes.number.isRequired,

  /** Name of the konnector */
  konnectorName: PropTypes.string.isRequired,

  /** Callback used when the user close the paywall */
  onClose: PropTypes.func.isRequired
};
export default withPaywallLocales(MaxAccountsByKonnectorPaywall);