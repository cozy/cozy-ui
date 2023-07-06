import React from 'react';
import PropTypes from 'prop-types';
import Paywall from "cozy-ui/transpiled/react/Paywall/Paywall";

var PasswordSharingPaywall = function PasswordSharingPaywall(_ref) {
  var onClose = _ref.onClose;
  return /*#__PURE__*/React.createElement(Paywall, {
    variant: "passwordSharing",
    onClose: onClose,
    isPublic: false
  });
};
/**
 * Paywall displayed when the user is not authorised to share password
 */


PasswordSharingPaywall.propTypes = {
  /** Callback used when the user close the paywall */
  onClose: PropTypes.func.isRequired
};
export default PasswordSharingPaywall;