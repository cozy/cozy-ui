import React from 'react';
import PropTypes from 'prop-types';
import Paywall from "cozy-ui/transpiled/react/Paywall/Paywall";
import withPaywallLocales from "cozy-ui/transpiled/react/Paywall/locales/withPaywallLocales";
/**
 * Paywall displayed when the user reaches the maximum number of papers created via the Mespapiers application.
 *
 * @param {number} max - Maximum papers allowed
 * @param {function} onClose - Callback used when the user close the paywall
 * @returns {React.Component} - React component
 */

var MaxPapersPaywall = function MaxPapersPaywall(_ref) {
  var max = _ref.max,
      onClose = _ref.onClose;
  return /*#__PURE__*/React.createElement(Paywall, {
    variant: "maxPapers",
    contentInterpolation: {
      smart_count: max
    },
    onClose: onClose
  });
};

MaxPapersPaywall.propTypes = {
  max: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired
};
export default withPaywallLocales(MaxPapersPaywall);