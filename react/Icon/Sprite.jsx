import React from 'react'

import IconSpriteContent from './icons-sprite'
import IconSpriteContentTwake from './icons-sprite-twake'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

const displayNone = { display: 'none' }

const Sprite = () => {
  const SpriteContent = isTwakeTheme()
    ? IconSpriteContentTwake
    : IconSpriteContent

  return (
    <div
      style={displayNone}
      dangerouslySetInnerHTML={{ __html: SpriteContent }}
    />
  )
}

export default Sprite
