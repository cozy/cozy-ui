// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/bus.svg` to regenerate
import React from 'react'

import SvgBusTwake from './Bus_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgBus(props) {
  if (isTwakeTheme()) return SvgBusTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 11c0 .88.39 1.67 1 2.22v1.28c0 .83.67 1.5 1.5 1.5S5 15.33 5 14.5V14h6v.5c0 .82.67 1.5 1.5 1.5.82 0 1.5-.67 1.5-1.5v-1.28c.61-.55 1-1.34 1-2.22V4c0-3-3-4-7-4S1 1 1 4v7zm3.5 1c-.83 0-1.5-.67-1.5-1.5S3.67 9 4.5 9 6 9.67 6 10.5 5.33 12 4.5 12zm7 0c-.83 0-1.5-.67-1.5-1.5S10.67 9 11.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM13 7H3V3h10v4z"
      />
    </svg>
  )
}

export default SvgBus
