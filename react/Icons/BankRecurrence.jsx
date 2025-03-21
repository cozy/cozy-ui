// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/permissions/bank-recurrence.svg` to regenerate
import React from 'react'

import SvgBankRecurrenceTwake from './BankRecurrence_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgBankRecurrence(props) {
  if (isTwakeTheme()) return SvgBankRecurrenceTwake(props)
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <g fill="none">
        <path
          d="M24 0C10.766 0 0 10.766 0 24c0 13.232 10.766 24 24 24 13.232 0 24-10.768 24-24C48 10.766 37.232 0 24 0z"
          fill="#D6D8DA"
        />
        <path
          d="M29.958 19.735C28.854 18.16 27.417 17 24.875 17c-2.958 0-5.083 2.01-5.917 4.807H17v1.76h1.625c-.042.311-.042.643-.042.954 0 .27 0 .538.021.787H17v1.782h1.896c.812 2.942 2.979 4.91 6.062 4.91 2.375 0 3.855-1.202 5.042-2.921l-1.833-1.347c-.959 1.264-1.792 1.989-3.188 1.989-1.625 0-2.812-.994-3.396-2.631h4.5v-1.782h-4.895c-.021-.27-.021-.539-.021-.829 0-.31 0-.621.041-.911h4.875v-1.761h-4.479c.584-1.554 1.73-2.528 3.209-2.528 1.458 0 2.312.663 3.208 1.885l1.937-1.43z"
          fill="#5D6165"
        />
        <path
          d="M24 6c8.984 0 16.593 6.625 17.829 15.524 1.235 8.9-4.28 17.347-12.925 19.795-8.644 2.448-17.77-1.853-21.384-10.079l-.2-.45a2 2 0 013.64-1.65l.1.23a14 14 0 102.04-14.15 2 2 0 012.33.38l.1.12a2 2 0 01-.13 2.7l-.12.12-6 5a2 2 0 01-3.27-1.39L6 22v-8a2 2 0 013.74-.99A17.98 17.98 0 0124 6z"
          fill="#5D6165"
        />
      </g>
    </svg>
  )
}

export default SvgBankRecurrence
