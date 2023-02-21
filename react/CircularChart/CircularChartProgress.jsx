import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../styles'
import MuiCircularProgress from '../CircularProgress'

const useStyles = makeStyles({
  root: {
    position: ({ position }) => position ?? undefined
  },
  svg: {
    transform: 'rotate(-117deg)'
  },
  circle: {
    strokeLinecap: 'round'
  },
  colorPrimary: {
    color: ({ color }) => color ?? undefined
  }
})

const computeValue = value => (value * 65) / 100

const CircularChartProgress = forwardRef(
  ({ value, position, color, size, thickness, ...props }, ref) => {
    const styles = useStyles({ color, position })
    const computedValue = computeValue(value)

    return (
      <MuiCircularProgress
        ref={ref}
        classes={styles}
        value={computedValue}
        thickness={thickness}
        size={size}
        {...props}
      />
    )
  }
)

CircularChartProgress.displayName = 'CircularChartProgress'

CircularChartProgress.defaultProps = {
  value: 0,
  variant: 'determinate',
  size: 150,
  thickness: 2.3
}

CircularChartProgress.propTypes = {
  value: PropTypes.number,
  position: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  thickness: PropTypes.number
}

export default CircularChartProgress
