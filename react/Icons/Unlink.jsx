// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/unlink.svg` to regenerate
import React from 'react'

import SvgUnlinkTwake from './Unlink_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgUnlink(props) {
  if (isTwakeTheme()) return SvgUnlinkTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M.151 2.849l1.414-1.414 13 13-1.414 1.414-4.453-4.452c-1.099.059-2.202-.298-3-1.095a1.044 1.044 0 010-1.475 1.03 1.03 0 01.26-.172L5.302 8l-2.909 2.91a1.04 1.04 0 00-.007 1.472l1.23 1.23a1.04 1.04 0 001.468-.002l1.656-1.656a1.042 1.042 0 111.474 1.475L6.56 15.085a3.126 3.126 0 01-4.418.002l-1.229-1.23a3.125 3.125 0 01.007-4.42l2.91-2.91L.15 2.849zm10.15 2.85a1.044 1.044 0 010 1.475c-.033.034-.078.048-.115.076L7.53 4.595c1.023 0 2.03.362 2.77 1.104zm4.786-3.556a3.126 3.126 0 01-.007 4.422l-2.79 2.79-1.474-1.474 2.79-2.79a1.04 1.04 0 00.006-1.473l-1.23-1.23a1.042 1.042 0 00-1.468.002L9.259 4.045A1.042 1.042 0 117.784 2.57L9.44.915a3.127 3.127 0 014.418-.001l1.229 1.229z"
      />
    </svg>
  )
}

export default SvgUnlink
