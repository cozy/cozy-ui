// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/permissions/task-to-effectuate.svg` to regenerate
import React from 'react'

import SvgTaskToEffectuateTwake from './TaskToEffectuate_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgTaskToEffectuate(props) {
  if (isTwakeTheme()) return SvgTaskToEffectuateTwake(props)
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <g fill="none" fillRule="evenodd">
        <rect fill="#d6d8da" width={38} height={38} rx={2} />
        <g transform="matrix(1 0 0 -1 11 32)" fill="#5d6165">
          <rect width={10} height={4} rx={2} />
          <rect y={8} width={15} height={4} rx={2} />
          <rect y={16} width={23} height={4} rx={2} />
          <rect y={24} width={23} height={4} rx={2} />
        </g>
        <g transform="translate(24 24)">
          <circle fill="#5d6165" cx={12} cy={12} r={12} />
          <path
            d="M12.328 12.333V5.667a.667.667 0 00-1.333 0v8h5.333a.667.667 0 000-1.334h-4z"
            stroke="#d6d8da"
            fill="#d6d8da"
          />
        </g>
        <circle fill="#5d6165" cx={6} cy={14} r={2} />
        <circle fill="#5d6165" cx={6} cy={6} r={2} />
        <circle fill="#5d6165" cx={6} cy={22} r={2} />
        <circle fill="#5d6165" cx={6} cy={30} r={2} />
      </g>
    </svg>
  )
}

export default SvgTaskToEffectuate
