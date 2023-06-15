import React from 'react'
import PropTypes from 'prop-types'

import Paywall from './Paywall'

const PasswordSharingPaywall = ({ onClose }) => {
  return (
    <Paywall variant="passwordSharing" onClose={onClose} isPublic={false} />
  )
}

/**
 * Paywall displayed when the user is not authorised to share password
 */
PasswordSharingPaywall.propTypes = {
  /** Callback used when the user close the paywall */
  onClose: PropTypes.func.isRequired
}

export default PasswordSharingPaywall
