import React from 'react'
import PropTypes from 'prop-types'
import MuiSlide from '@material-ui/core/Slide'
import MuiGrow from '@material-ui/core/Grow'

const DialogTransition = ({ fullScreen, isFullscreen, ...props }) => {
  return fullScreen || isFullscreen ? (
    <MuiSlide direction="up" {...props} />
  ) : (
    <MuiGrow {...props} />
  )
}

DialogTransition.propTypes = {
  /** Use the Slide transition is true, otherwise Grow */
  fullScreen: PropTypes.bool
}

export default DialogTransition
