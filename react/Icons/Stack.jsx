// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/stack.svg` to regenerate
import React from 'react'

import SvgStackTwake from './Stack_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgStack(props) {
  if (isTwakeTheme()) return SvgStackTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M3.243 6.034L.671 4.842a.779.779 0 01-.396-.397c-.197-.496 0-.894.396-1.093L7.792.075c.198-.1.395-.1.594 0l7.12 3.277a.746.746 0 01.494.696.746.746 0 01-.494.695l-2.67 1.291-.594.298-3.856 1.887a.694.694 0 01-.693 0 840.224 840.224 0 00-3.857-1.887l-.593-.298zm12.03 4.807c.78.4.675 1.345-.086 1.756L8.421 15.9a.985.985 0 01-.864 0L.572 12.49a.779.779 0 01-.396-.397c-.197-.497 0-.894.396-1.093l.89-.397 2.472 1.192 3.627 1.73a.984.984 0 00.857-.005l3.725-1.825 2.373-1.19.756.336zm.53-3.218c.197.397 0 .894-.594 1.192l-2.274 1.092-.594.3-4.058 2.036a.98.98 0 01-.883 0l-4.058-2.037-.594-.299L.474 8.815a.777.777 0 01-.396-.398c-.198-.496 0-.894.396-1.092l1.285-.596 2.176.993 3.626 1.73a.986.986 0 00.858-.005l4.12-2.023 1.582-.794 1.286.596a.771.771 0 01.396.397z"
      />
    </svg>
  )
}

export default SvgStack
