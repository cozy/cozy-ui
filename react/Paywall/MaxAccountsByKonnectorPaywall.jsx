import React from 'react'
import PropTypes from 'prop-types'

import Paywall from './Paywall'
import { useI18n } from '../I18n'
import withPaywallLocales from './locales/withPaywallLocales'

/**
 * Paywall displayed when the user reach the maximum accounts allowed for a konnector
 */
const MaxAccountsByKonnectorPaywall = ({ max, konnectorName, onClose }) => {
  const { t } = useI18n()

  return (
    <Paywall
      variant="maxAccountsByKonnector"
      contentInterpolation={{
        maxAccount: t('maxAccount', { smart_count: max }),
        konnectorName
      }}
      onClose={onClose}
    />
  )
}

MaxAccountsByKonnectorPaywall.propTypes = {
  /** Maximum accounts allowed for the konnector */
  max: PropTypes.number.isRequired,
  /** Name of the konnector */
  konnectorName: PropTypes.string.isRequired,
  /** Callback used when the user close the paywall */
  onClose: PropTypes.func.isRequired
}

export default withPaywallLocales(MaxAccountsByKonnectorPaywall)
