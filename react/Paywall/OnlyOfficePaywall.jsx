import React from 'react'
import PropTypes from 'prop-types'

import Paywall from './Paywall'

const OnlyOfficePaywall = ({ onClose, isPublic }) => {
  return <Paywall variant="onlyOffice" onClose={onClose} isPublic={isPublic} />
}

/**
 * Paywall displayed when the user is not authorised to access OnlyOffice
 */
OnlyOfficePaywall.propTypes = {
  /** Callback used when the user close the paywall */
  onClose: PropTypes.func.isRequired,
  /** Whether OnlyOffice access in a public context */
  isPublic: PropTypes.bool
}

OnlyOfficePaywall.defaultProps = {
  isPublic: false
}

export default OnlyOfficePaywall
