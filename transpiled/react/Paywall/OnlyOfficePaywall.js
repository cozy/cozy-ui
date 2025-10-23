import PropTypes from 'prop-types';
import React from 'react';
import Paywall from "cozy-ui/transpiled/react/Paywall/Paywall";

var OnlyOfficePaywall = function OnlyOfficePaywall(_ref) {
  var onClose = _ref.onClose,
      isPublic = _ref.isPublic;
  return /*#__PURE__*/React.createElement(Paywall, {
    variant: "onlyOffice",
    onClose: onClose,
    isPublic: isPublic
  });
};
/**
 * Paywall displayed when the user is not authorised to access OnlyOffice
 */


OnlyOfficePaywall.propTypes = {
  /** Callback used when the user close the paywall */
  onClose: PropTypes.func.isRequired,

  /** Whether OnlyOffice access in a public context */
  isPublic: PropTypes.bool
};
OnlyOfficePaywall.defaultProps = {
  isPublic: false
};
export default OnlyOfficePaywall;