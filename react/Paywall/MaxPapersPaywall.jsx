import React from 'react'
import PropTypes from 'prop-types'

import Paywall from './Paywall'
import withPaywallLocales from './locales/withPaywallLocales'

/**
 * Paywall displayed when the user reaches the maximum number of papers created via the Mespapiers application.
 *
 * @param {number} max - Maximum papers allowed
 * @param {function} onClose - Callback used when the user close the paywall
 * @returns {React.Component} - React component
 */
const MaxPapersPaywall = ({ max, onClose }) => {
  return (
    <Paywall
      variant="maxPapers"
      contentInterpolation={{ smart_count: max }}
      onClose={onClose}
    />
  )
}

MaxPapersPaywall.propTypes = {
  max: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired
}

export default withPaywallLocales(MaxPapersPaywall)
