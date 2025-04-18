// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/password.svg` to regenerate
import React from 'react'

import SvgPasswordTwake from './Password_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgPassword(props) {
  if (isTwakeTheme()) return SvgPasswordTwake(props)
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        d="M30 4a2 2 0 012 2v20a2 2 0 11-4 0V6a2 2 0 012-2zM12.102 14.434a2.002 2.002 0 01-1.284 2.52l-1.582.514.978 1.344a2.001 2.001 0 01-3.238 2.352L6 19.82l-.978 1.344c-.39.538-1 .824-1.62.824a2.002 2.002 0 01-1.616-3.176l.978-1.344-1.582-.514a2.002 2.002 0 01-1.284-2.52 2.002 2.002 0 012.52-1.284L4 13.664V12a2 2 0 114 0v1.664l1.582-.514a2 2 0 012.52 1.284zm14.2 0a2.002 2.002 0 01-1.284 2.52l-1.582.514.978 1.344a2.001 2.001 0 01-3.238 2.352L20.2 19.82l-.978 1.344c-.39.538-1 .824-1.62.824a2.002 2.002 0 01-1.616-3.176l.978-1.344-1.582-.514a2.002 2.002 0 01-1.284-2.52 2.002 2.002 0 012.52-1.284l1.582.514V12a2 2 0 114 0v1.664l1.582-.514a2 2 0 012.52 1.284z"
      />
    </svg>
  )
}

export default SvgPassword
