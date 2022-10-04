import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import Box from '../Box'
import CircularProgressWithBackground from './CircularProgressWithBackground'
import { makeSizeAndThickness } from './helpers'

const CircularChart = forwardRef(
  ({ size, primaryProps, secondaryProps, children, ...props }, ref) => {
    const {
      primarySizeAndThickness,
      secondarySizeAndThickness
    } = makeSizeAndThickness(size, Boolean(secondaryProps))

    return (
      <Box
        ref={ref}
        position="relative"
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        {...props}
      >
        {Boolean(primaryProps) && (
          <CircularProgressWithBackground
            {...primarySizeAndThickness}
            {...primaryProps}
          />
        )}
        {Boolean(secondaryProps) && (
          <CircularProgressWithBackground
            {...secondarySizeAndThickness}
            {...secondaryProps}
            position="absolute"
          />
        )}
        <Box
          position="absolute"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          paddingBottom="1rem"
        >
          {children}
        </Box>
      </Box>
    )
  }
)

CircularChart.displayName = 'CircularChart'

CircularChart.defaultProps = {
  size: 'large'
}

CircularChart.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  primaryProps: PropTypes.shape({
    value: PropTypes.number,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.number,
    thickness: PropTypes.number
  }),
  secondaryProps: PropTypes.shape({
    value: PropTypes.number,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.number,
    thickness: PropTypes.number
  }),
  children: PropTypes.node
}

export default CircularChart
