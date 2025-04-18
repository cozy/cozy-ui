// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/illus/file-type-video.svg` to regenerate
import React from 'react'

import SvgFileTypeVideoTwake from './FileTypeVideo_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgFileTypeVideo(props) {
  if (isTwakeTheme()) return SvgFileTypeVideoTwake(props)
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#FFC5CE"
          d="M1 2.992C1 1.892 1.898 1 2.992 1h26.016C30.108 1 31 1.898 31 2.992v26.016c0 1.1-.898 1.992-1.992 1.992H2.992C1.892 31 1 30.102 1 29.008V2.992zm1 12.017C2 14.452 2.443 14 3.01 14h1.98c.558 0 1.01.443 1.01 1.01v1.98C6 17.549 5.557 18 4.99 18H3.01C2.451 18 2 17.557 2 16.99v-1.98zm24 0c0-.557.443-1.009 1.01-1.009h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zM2 9a1 1 0 011.01-1h1.98C5.549 8 6 8.444 6 9v3a1 1 0 01-1.01 1H3.01C2.451 13 2 12.556 2 12V9zm24 0a1 1 0 011.01-1h1.98c.558 0 1.01.444 1.01 1v3a1 1 0 01-1.01 1h-1.98c-.558 0-1.01-.444-1.01-1V9zM2 26a1 1 0 011.01-1h1.98c.558 0 1.01.444 1.01 1v3a1 1 0 01-1.01 1H3.01C2.451 30 2 29.556 2 29v-3zm24 0a1 1 0 011.01-1h1.98c.558 0 1.01.444 1.01 1v3a1 1 0 01-1.01 1h-1.98c-.558 0-1.01-.444-1.01-1v-3zM2 3a1 1 0 011.01-1h1.98C5.549 2 6 2.444 6 3v3a1 1 0 01-1.01 1H3.01C2.451 7 2 6.556 2 6V3zm24 0a1 1 0 011.01-1h1.98c.558 0 1.01.444 1.01 1v3a1 1 0 01-1.01 1h-1.98C26.451 7 26 6.556 26 6V3zM2 20a1 1 0 011.01-1h1.98c.558 0 1.01.444 1.01 1v3a1 1 0 01-1.01 1H3.01C2.451 24 2 23.556 2 23v-3zm24 0a1 1 0 011.01-1h1.98c.558 0 1.01.444 1.01 1v3a1 1 0 01-1.01 1h-1.98c-.558 0-1.01-.444-1.01-1v-3z"
        />
        <path
          fill="#FF405D"
          d="M12 10.615c0-.554.38-.775.853-.491l8.294 4.977c.471.282.473.739 0 1.023L12.853 21.1c-.471.282-.853.055-.853-.491v-9.995z"
        />
      </g>
    </svg>
  )
}

export default SvgFileTypeVideo
