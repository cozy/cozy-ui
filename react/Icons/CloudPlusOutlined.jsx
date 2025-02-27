// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/cloud-plus-outlined.svg` to regenerate
import React from 'react'

import SvgCloudPlusOutlinedTwake from './CloudPlusOutlined_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgCloudPlusOutlined(props) {
  if (isTwakeTheme()) return SvgCloudPlusOutlinedTwake(props)
  return (
    <svg viewBox="0 0 18 16" {...props}>
      <path d="M3.297 4.297a5.002 5.002 0 019.406 0 5.008 5.008 0 013.213 3.787 5.027 5.027 0 00-2.045.044A3.001 3.001 0 0011 6a3 3 0 00-6 0 3 3 0 100 6h5.1a5.022 5.022 0 000 2H5a5 5 0 01-1.703-9.703zM14 11a1 1 0 112 0v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1z" />
    </svg>
  )
}

export default SvgCloudPlusOutlined
