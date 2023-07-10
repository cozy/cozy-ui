import React from 'react'

import createDepreciationLogger from '../../helpers/createDepreciationLogger'
import { QuotaPaywall } from '../../Paywall'

const logDeprecatedComponent = createDepreciationLogger()

/**
 * @deprecated This component is depreacated, please use [QuotaPaywall](#/Paywall) instead.
 */
const QuotaAlert = ({ onClose }) => {
  logDeprecatedComponent(
    'QuotaAlert is now exported from the cozy-ui as QuotaPaywall. Please import the component from "cozy-ui/transpiled/react/Paywall"'
  )
  return <QuotaPaywall onClose={onClose} />
}

export default QuotaAlert
