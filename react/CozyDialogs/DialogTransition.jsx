import MuiGrow from '@material-ui/core/Grow'
import MuiSlide from '@material-ui/core/Slide'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

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
