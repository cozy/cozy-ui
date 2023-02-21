import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import MuiSlide from '@mui/material/Slide'
import MuiGrow from '@mui/material/Grow'

const DialogTransition = forwardRef(
  ({ fullScreen, isFullscreen, ...props }, ref) => {
    return fullScreen || isFullscreen ? (
      <MuiSlide ref={ref} direction="up" {...props} />
    ) : (
      <MuiGrow ref={ref} {...props} />
    )
  }
)

DialogTransition.propTypes = {
  /** Use the Slide transition is true, otherwise Grow */
  fullScreen: PropTypes.bool
}

export default DialogTransition
