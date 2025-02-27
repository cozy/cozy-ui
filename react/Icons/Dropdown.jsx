// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/dropdown.svg` to regenerate
import React from 'react'

import SvgDropdownTwake from './Dropdown_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgDropdown(props) {
  if (isTwakeTheme()) return SvgDropdownTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path fillRule="evenodd" d="M2 5h12l-6 7z" />
    </svg>
  )
}

export default SvgDropdown
