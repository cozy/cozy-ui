// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/fitness.svg` to regenerate
import React from 'react'

import SvgFitnessTwake from './Fitness_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgFitness(props) {
  if (isTwakeTheme()) return SvgFitnessTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M14.982 9.273l.72-.72a.996.996 0 000-1.41l-.02-.02a.996.996 0 00-1.41 0l-2.86 2.86-5.4-5.4 2.86-2.86a.996.996 0 000-1.41l-.02-.02a.996.996 0 00-1.41 0l-.72.72-.72-.72c-.39-.39-1.03-.39-1.42 0l-1.43 1.43-.72-.72a1.02 1.02 0 00-1.43 0 1.02 1.02 0 000 1.43l.72.72-1.43 1.43a.996.996 0 000 1.41l.72.72-.72.73a.996.996 0 000 1.41l.02.02c.39.39 1.02.39 1.41 0l2.86-2.86 5.4 5.4-2.86 2.86a.996.996 0 000 1.41l.02.02c.39.39 1.02.39 1.41 0l.72-.72.72.72c.39.39 1.02.39 1.41 0l1.43-1.43.72.72c.39.39 1.04.39 1.43 0 .39-.39.39-1.04 0-1.43l-.72-.72 1.44-1.43a.996.996 0 000-1.41l-.72-.73z" />
    </svg>
  )
}

export default SvgFitness
