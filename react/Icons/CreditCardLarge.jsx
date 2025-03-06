// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/illus/credit-card-large.svg` to regenerate
import React from 'react'

import SvgCreditCardLargeTwake from './CreditCardLarge_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgCreditCardLarge(props) {
  if (isTwakeTheme()) return SvgCreditCardLargeTwake(props)
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5h28a2 2 0 012 2v18.23a2 2 0 01-2 2H2a2 2 0 01-2-2V7a2 2 0 012-2z"
        fill="#B2D3FF"
      />
      <path fill="#197BFF" d="M0 9.042h32v6.063H0z" />
    </svg>
  )
}

export default SvgCreditCardLarge
