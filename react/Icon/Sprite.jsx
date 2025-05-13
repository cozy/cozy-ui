import React from 'react'

import IconSprintContent from './icons-sprite'

const displayNone = { display: 'none' }

const Sprite = () => {
  return (
    <div
      style={displayNone}
      dangerouslySetInnerHTML={{ __html: IconSprintContent }}
    />
  )
}

export default Sprite
