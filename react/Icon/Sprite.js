import IconSprintContent from './icons-sprite'
import React from 'react'

const displayNone = { display: 'none' }

const IconSprite = () => {
  return (
    <div
      style={displayNone}
      dangerouslySetInnerHTML={{ __html: IconSprintContent }}
    />
  )
}

export default IconSprite
