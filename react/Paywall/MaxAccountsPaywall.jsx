import React from 'react'
import PropTypes from 'prop-types'

import Paywall from './Paywall'
import withPaywallLocales from './locales/withPaywallLocales'

/**
 * Paywall displayed when the user reach the maximum accounts allowed for all konnectors
 */
const MaxAccountsPaywall = ({ max, onClose }) => {
  return (
    <Paywall
      variant="maxAccounts"
      contentInterpolation={{ smart_count: max }}
      onClose={onClose}
    />
  )
}

MaxAccountsPaywall.propTypes = {
  /** Maximum accounts allowed for all konnectors */
  max: PropTypes.number.isRequired,
  /** Callback used when the user close the paywall */
  onClose: PropTypes.func.isRequired
}

export default withPaywallLocales(MaxAccountsPaywall)
