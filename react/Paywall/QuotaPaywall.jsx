import React from 'react'
import PropTypes from 'prop-types'

import Paywall from './Paywall'

/**
 * Paywall displayed when user disk space is full
 */
const QuotaPaywall = ({ onClose }) => {
  return <Paywall variant="quota" onClose={onClose} />
}

QuotaPaywall.propTypes = {
  /** Callback used when the user close the paywall */
  onClose: PropTypes.func.isRequired
}

export default QuotaPaywall
