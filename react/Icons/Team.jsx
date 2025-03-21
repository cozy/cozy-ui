// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/team.svg` to regenerate
import React from 'react'

import SvgTeamTwake from './Team_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgTeam(props) {
  if (isTwakeTheme()) return SvgTeamTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M11.145 7.75C10.263 7.285 9.647 6.23 9.647 5c0-1.657 1.12-3 2.5-3 1.381 0 2.5 1.343 2.5 3 0 1.231-.618 2.29-1.502 2.752V9l1.105.553c.49.245 1.095.848 1.342 1.342l.106.21c.245.49 0 .895-.55.895H9.142c-.544 0-.797-.4-.55-.895l.106-.21c.245-.49.848-1.095 1.342-1.342L11.145 9V7.75zM4.647 10.8c-1.165-.48-2-1.776-2-3.3 0-1.933 1.343-3.5 3-3.5s3 1.567 3 3.5c0 1.524-.835 2.82-2 3.3V12l2.051.684c.532.177 1.15.717 1.397 1.21l.105.211c.245.49.002.895-.548.895h-8.01c-.539 0-.794-.4-.547-.895l.105-.21c.245-.49.872-1.037 1.397-1.211L4.647 12v-1.2z"
      />
    </svg>
  )
}

export default SvgTeam
