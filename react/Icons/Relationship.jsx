// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/relationship.svg` to regenerate
import React from 'react'

import SvgRelationshipTwake from './Relationship_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgRelationship(props) {
  if (isTwakeTheme()) return SvgRelationshipTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M5.5 2.509c.211 0 .42.012.625.035a7.031 7.031 0 00-1.801 2.167A3.501 3.501 0 006.2 11.44l.005-.001A3.493 3.493 0 008 10.458c.619-.63 1-1.495 1-2.45 0-.381-.061-.749-.174-1.093a1.998 1.998 0 011.8-.902c.242.619.374 1.292.374 1.996 0 1.297-.45 2.49-1.2 3.43a5.533 5.533 0 01-1.8 1.47 5.5 5.5 0 11-2.5-10.4z" />
      <path d="M8 3.109c-.7.357-1.313.86-1.8 1.47A5.477 5.477 0 005 8.009c0 .704.132 1.377.373 1.996a1.998 1.998 0 001.801-.902A3.497 3.497 0 017 8.01c0-.954.381-1.818 1-2.45a3.493 3.493 0 012.5-1.05 3.5 3.5 0 011.176 6.797 7.032 7.032 0 01-1.801 2.168A5.5 5.5 0 108 3.109z" />
    </svg>
  )
}

export default SvgRelationship
