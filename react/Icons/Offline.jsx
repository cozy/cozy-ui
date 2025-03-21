// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/offline.svg` to regenerate
import React from 'react'

import SvgOfflineTwake from './Offline_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgOffline(props) {
  if (isTwakeTheme()) return SvgOfflineTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M3.113 2.707l10.61 10.61a.996.996 0 01-1.43 1.39l-2.435-2.435c.09.227.142.471.142.728a2 2 0 11-2-2c.257 0 .501.053.727.142L6.541 8.955a4.123 4.123 0 00-1.627.981 1.085 1.085 0 01-1.532-1.533 6.55 6.55 0 011.492-1.115L3.191 5.605a8.811 8.811 0 00-1.342 1.1A1.083 1.083 0 01.317 5.173a10.92 10.92 0 011.326-1.115L.293 2.707a.999.999 0 111.414-1.414l1.39 1.39c.006.007.008.017.016.024zm4.312 1.484l-1.901-1.9a10.769 10.769 0 0110.115 2.882 1.085 1.085 0 01-1.532 1.532 8.611 8.611 0 00-6.13-2.538c-.185 0-.368.011-.552.024zm5.148 4.212c.317.317.397.783.238 1.175l-2.72-2.72a6.471 6.471 0 012.482 1.545z"
      />
    </svg>
  )
}

export default SvgOffline
