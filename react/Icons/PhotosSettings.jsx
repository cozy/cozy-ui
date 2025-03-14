// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/permissions/photos-settings.svg` to regenerate
import React from 'react'

import SvgPhotosSettingsTwake from './PhotosSettings_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgPhotosSettings(props) {
  if (isTwakeTheme()) return SvgPhotosSettingsTwake(props)
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6.872A2.369 2.369 0 012.376 4.5h33.248A2.374 2.374 0 0138 6.872v26.132a2.37 2.37 0 01-2.376 2.371H2.376A2.375 2.375 0 010 33.004V6.872z"
        fill="#D1D5DB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 16.375a3.562 3.562 0 100-7.125 3.562 3.562 0 000 7.125"
        fill="#fff"
      />
      <circle cx={36} cy={36} r={12} fill="#5D6165" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.25 35.078c.051.26.077.568.077.926 0 .358-.026.665-.078.925l1.62 1.333c.131.086.163.203.099.352-.325.95-.859 1.826-1.602 2.628-.104.124-.229.155-.37.094l-2.032-.668c-.52.396-1.08.705-1.68.926l-.409 2c-.026.146-.117.233-.273.258-.56.1-1.094.148-1.602.148a9.212 9.212 0 01-1.601-.148c-.157-.024-.248-.11-.274-.259l-.409-1.999a5.979 5.979 0 01-1.68-.926l-2.03.668c-.145.062-.268.03-.372-.094-.742-.802-1.275-1.677-1.602-2.628-.065-.148-.032-.266.099-.352l1.62-1.333a4.757 4.757 0 01-.078-.925c0-.358.026-.667.078-.926l-1.62-1.332c-.13-.086-.164-.204-.099-.352.326-.95.86-1.826 1.602-2.627.104-.123.228-.154.371-.093l2.031.666a5.988 5.988 0 011.68-.925l.41-1.999c.025-.148.117-.234.273-.259a8.22 8.22 0 013.202 0c.156.024.247.111.273.26l.41 1.998c.6.223 1.159.53 1.68.925l2.03-.666c.143-.062.267-.03.371.093.742.802 1.276 1.678 1.602 2.627.064.148.032.266-.098.352l-1.62 1.332zM36 32.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.912 14.838a1.188 1.188 0 011.676 0l7.668 7.668c-5.722 1.584-9.972 6.71-10.242 12.87H2.377A2.384 2.384 0 010 32.997V28.25l7.474-7.474a1.185 1.185 0 011.677 0l2.712 2.711-5.673 5.694a.841.841 0 001.19 1.188l5.683-5.681 9.849-9.85z"
        fill="#5D6165"
      />
    </svg>
  )
}

export default SvgPhotosSettings
