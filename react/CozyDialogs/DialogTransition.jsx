import React from 'react'
import MuiSlide from '@material-ui/core/Slide'
import MuiGrow from '@material-ui/core/Grow'

const DialogTransition = ({ isFullscreen, ...props }) => {
  return isFullscreen ? (
    <MuiSlide direction="up" {...props} />
  ) : (
    <MuiGrow {...props} />
  )
}

export default DialogTransition
