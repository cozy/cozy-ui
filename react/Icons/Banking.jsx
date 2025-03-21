// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/banking.svg` to regenerate
import React from 'react'

import SvgBankingTwake from './Banking_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgBanking(props) {
  if (isTwakeTheme()) return SvgBankingTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M2 8v5h12V4H2v1h12v3H2zm0-6h12a2 2 0 012 2v9a2 2 0 01-2 2H2a2 2 0 01-2-2V4a2 2 0 012-2z"
      />
    </svg>
  )
}

export default SvgBanking
