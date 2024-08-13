import React from 'react';
import PropTypes from 'prop-types';
import Paywall from "cozy-ui/transpiled/react/Paywall/Paywall";
import withPaywallLocales from "cozy-ui/transpiled/react/Paywall/locales/withPaywallLocales";
/**
 * Paywall displayed when the user reach the maximum days allowed of capture geolocated data
 */

var MaxDaysToCapturePaywall = function MaxDaysToCapturePaywall(_ref) {
  var days = _ref.days,
      onClose = _ref.onClose;
  return /*#__PURE__*/React.createElement(Paywall, {
    variant: "maxDaysToCapture",
    contentInterpolation: {
      smart_count: days
    },
    onClose: onClose
  });
};

MaxDaysToCapturePaywall.propTypes = {
  /** Maximum days allowed of capture geolocated data */
  days: PropTypes.number.isRequired,

  /** Callback used when the user close the paywall */
  onClose: PropTypes.func.isRequired
};
export default withPaywallLocales(MaxDaysToCapturePaywall);