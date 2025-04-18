// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/chess.svg` to regenerate
import React from 'react'

import SvgChessTwake from './Chess_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgChess(props) {
  if (isTwakeTheme()) return SvgChessTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 13a.5.5 0 01.398.197l.05.079 1 2a.498.498 0 01-.362.717L12.5 16h-10a.501.501 0 01-.483-.628l.036-.096 1-2a.501.501 0 01.355-.267l.092-.01h8zM8.732.023c.2-.061.3 0 .28.18-.117.729.163 1.292.74 1.735l3.973 3.14a.7.7 0 01.106 1.012l-.615.734c-.333.4-.903.51-1.366.27a6.014 6.014 0 01-.57-.322 1.333 1.333 0 00-1.035-.16c-.56.146-1.053.027-1.514-.283l-.137-.1-.3-.241 1.623 2.1c.133.172.282.333.443.48l.308.27.396.363.243.232c.041.04.083.08.124.122.252.25.336.55.363.762l.01.14-.004.129V12H3v-1.957c.02-.703 0-1.39.04-2.096.036-.924.138-1.833.357-2.741.2-.847.454-1.693.974-2.421.447-.64.96-1.106 1.756-1.131h.175c.6.02 1.075-.201 1.375-.805.22-.423.597-.686 1.055-.826z"
      />
    </svg>
  )
}

export default SvgChess
