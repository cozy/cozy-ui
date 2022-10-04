import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import Box from '../Box'
import CircularChartProgress from './CircularChartProgress'

const CircularProgressWithBackground = forwardRef(
  ({ value, color, backgroundColor, size, thickness, ...props }, ref) => {
    return (
      <Box ref={ref} position="relative" display="inline-flex" {...props}>
        <CircularChartProgress
          size={size}
          color={backgroundColor}
          thickness={thickness}
          position="absolute"
          value={100}
        />
        <CircularChartProgress
          value={value}
          color={color}
          size={size}
          thickness={thickness}
        />
      </Box>
    )
  }
)

CircularProgressWithBackground.displayName = 'CircularProgressWithBackground'

CircularProgressWithBackground.defaultProps = {
  backgroundColor: 'var(--actionColorGhost)'
}

CircularProgressWithBackground.propTypes = {
  value: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.number,
  thickness: PropTypes.number
}

export default CircularProgressWithBackground
