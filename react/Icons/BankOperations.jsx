// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/permissions/bank-operations.svg` to regenerate
import React from 'react'

import SvgBankOperationsTwake from './BankOperations_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgBankOperations(props) {
  if (isTwakeTheme()) return SvgBankOperationsTwake(props)
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          d="M24 0C10.766 0 0 10.766 0 24c0 13.232 10.766 24 24 24 13.232 0 24-10.768 24-24C48 10.766 37.232 0 24 0z"
          fill="#d6d8da"
          fillRule="nonzero"
        />
        <path
          d="M33.933 16.376C32.149 13.856 29.827 12 25.72 12c-4.779 0-8.211 3.215-9.558 7.69H13v2.818h2.625c-.067.498-.067 1.028-.067 1.525 0 .431 0 .862.033 1.26H13v2.85h3.063C17.375 32.852 20.875 36 25.855 36c3.836 0 6.226-1.923 8.144-4.674l-2.962-2.155c-1.548 2.022-2.894 3.183-5.149 3.183-2.625 0-4.543-1.592-5.485-4.21h7.27v-2.851h-7.91c-.033-.431-.033-.862-.033-1.326 0-.497 0-.995.067-1.459h7.875v-2.817h-7.235c.942-2.487 2.793-4.045 5.182-4.045 2.356 0 3.736 1.061 5.183 3.017l3.13-2.287z"
          fill="#5d6165"
        />
      </g>
    </svg>
  )
}

export default SvgBankOperations
