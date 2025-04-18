// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/permissions/passwords.svg` to regenerate
import React from 'react'

import SvgPasswordsTwake from './Passwords_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgPasswords(props) {
  if (isTwakeTheme()) return SvgPasswordsTwake(props)
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#5d6165" d="M19 24h10v16H19z" />
        <path
          fill="#d6d8da"
          d="M24 28c1.102 0 2 .896 2 2 0 .736-.406 1.374-1 1.72V37c0 .55-.45 1-1 1-.552 0-1-.45-1-1v-5.28c-.596-.346-1-.984-1-1.72a2 2 0 012-2zM6 21v24a3 3 0 003 3h30a3 3 0 003-3V21a3 3 0 00-3-3h-3v-6c0-6.618-5.384-12-12-12-6.618 0-12 5.382-12 12h2c0-5.514 4.484-10 10-10 5.514 0 10 4.486 10 10v6H9a3 3 0 00-3 3z"
        />
      </g>
    </svg>
  )
}

export default SvgPasswords
