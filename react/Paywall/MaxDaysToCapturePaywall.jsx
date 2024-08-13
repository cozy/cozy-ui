import React from 'react'
import PropTypes from 'prop-types'

import Paywall from './Paywall'
import withPaywallLocales from './locales/withPaywallLocales'

/**
 * Paywall displayed when the user reach the maximum days allowed of capture geolocated data
 */
const MaxDaysToCapturePaywall = ({ days, onClose }) => {
  return (
    <Paywall
      variant="maxDaysToCapture"
      contentInterpolation={{ smart_count: days }}
      onClose={onClose}
    />
  )
}

MaxDaysToCapturePaywall.propTypes = {
  /** Maximum days allowed of capture geolocated data */
  days: PropTypes.number.isRequired,
  /** Callback used when the user close the paywall */
  onClose: PropTypes.func.isRequired
}

export default withPaywallLocales(MaxDaysToCapturePaywall)
