// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/remboursement.svg` to regenerate
import React from 'react'

import SvgRemboursementTwake from './Remboursement_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgRemboursement(props) {
  if (isTwakeTheme()) return SvgRemboursementTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0c4.411 0 8 3.589 8 8s-3.589 8-8 8a8.039 8.039 0 01-7.229-4.571 1 1 0 111.806-.858A6.031 6.031 0 008 14c3.309 0 6-2.691 6-6s-2.691-6-6-6c-1.482 0-2.866.571-3.938 1.507a.989.989 0 01.706.353 1 1 0 01-.037 1.322l-.091.086-3 2.5a1 1 0 01-1.634-.655L0 7V3a1 1 0 011-1c.481 0 .865.348.96.801C3.452 1.08 5.636 0 8 0zm1 4a3.99 3.99 0 012.669 1.02l.159.151-1.414 1.415a1.988 1.988 0 00-3.05.28L7.277 7H9v2H7.278c.347.595.985 1 1.722 1a2 2 0 001.288-.47l.125-.116 1.415 1.415a3.987 3.987 0 01-6.632-1.64L5.142 9H4V7h1.142A3.99 3.99 0 019 4z"
      />
    </svg>
  )
}

export default SvgRemboursement
