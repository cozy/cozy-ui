// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/list.svg` to regenerate
import React from 'react'

import SvgListTwake from './List_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgList(props) {
  if (isTwakeTheme()) return SvgListTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M0 0h4v4H0V0zm6 0h10v4H6V0zM0 6h4v4H0V6zm6 0h10v4H6V6zm-6 6h4v4H0v-4zm6 0h10v4H6v-4z"
      />
    </svg>
  )
}

export default SvgList
