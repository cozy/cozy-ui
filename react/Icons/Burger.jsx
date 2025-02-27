// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/ui/burger.svg` to regenerate
import React from 'react'

import SvgBurgerTwake from './Burger_twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

function SvgBurger(props) {
  if (isTwakeTheme()) return SvgBurgerTwake(props)
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M0 3c0-.552.445-1 1-1h14c.552 0 1 .444 1 1 0 .552-.445 1-1 1H1c-.552 0-1-.444-1-1zm0 10c0-.552.445-1 1-1h14c.552 0 1 .444 1 1 0 .552-.445 1-1 1H1c-.552 0-1-.444-1-1zm0-5c0-.552.445-1 1-1h14c.552 0 1 .444 1 1 0 .552-.445 1-1 1H1c-.552 0-1-.444-1-1z"
      />
    </svg>
  )
}

export default SvgBurger
