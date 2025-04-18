// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/growth.svg` to regenerate
import React from 'react'

import SvgGrowthTwake from './Growth_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgGrowth(props) {
  if (isTwakeTheme()) return SvgGrowthTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1a1 1 0 011-1c2.708 0 4.782.821 6.149 2.492.738.901 1.226 1.999 1.514 3.24.061-.081.124-.161.188-.24C10.218 3.822 12.292 3 15 3a1 1 0 011 1c0 2.606-.517 4.877-1.851 6.508-1.193 1.459-2.926 2.27-5.149 2.452V15a1 1 0 11-2 0V9.96c-2.223-.182-3.956-.993-5.149-2.452C.517 5.878 0 3.606 0 1zm2.034 1.05c.124 1.858.59 3.244 1.365 4.192.742.907 1.867 1.531 3.567 1.707-.124-1.857-.59-3.243-1.365-4.19-.742-.908-1.867-1.532-3.567-1.708zm11.932 3c-.124 1.858-.59 3.244-1.365 4.192-.742.907-1.867 1.531-3.567 1.707.124-1.857.59-3.243 1.365-4.19.742-.908 1.867-1.532 3.567-1.708z"
      />
    </svg>
  )
}

export default SvgGrowth
