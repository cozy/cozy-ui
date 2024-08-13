import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useTheme } from '@material-ui/core'
import set from 'lodash/set'
import cloneDeep from 'lodash/cloneDeep'

import { makeStyles } from '../styles'
import Typography from '../Typography'
import isTesting from '../helpers/isTesting'

ChartJS.register(ArcElement, Tooltip)

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    zIndex: '1',
    width: '192px',
    height: '192px'
  },
  background: {
    position: 'absolute',
    boxSizing: 'border-box',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    border: '24px solid var(--actionColorGhost)',
    borderRadius: '100%',
    zIndex: -1,
    backgroundColor: ({ single }) =>
      !single && theme.palette.variant === 'inverted'
        ? theme.palette.primary.main
        : 'none',
    boxShadow: ({ single }) =>
      !single && theme.palette.variant === 'inverted'
        ? `0 0 0 2px ${theme.palette.primary.main}`
        : 'none'
  },
  centerText: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    top: '25px',
    left: '25px',
    right: '25px',
    bottom: '25px',
    borderRadius: '50%',
    zIndex: '-1'
  },
  typography: {
    color: ({ single }) =>
      !single && theme.palette.variant === 'inverted'
        ? theme.palette.primary.contrastText
        : theme.palette.text.primary
  }
}))

export const makeOptions = ({ options, single }) => {
  const madeOptions = {
    cutout: '75%',
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    animation: isTesting() ? false : { duration: 1000 },
    ...options
  }
  if (single) set(madeOptions, 'plugins.tooltip.filter', item => item.label)

  return madeOptions
}

export const makeData = ({ data, single, theme }) => {
  const madeData = cloneDeep(data)
  if (single)
    set(madeData, 'datasets[0].backgroundColor', [
      theme.palette.primary.main,
      'transparent'
    ])

  return madeData
}

const PieChart = ({
  data,
  options = {},
  primaryText,
  secondaryText,
  single = false,
  className,
  ...props
}) => {
  const theme = useTheme()
  const classes = useStyles({ single })
  const madeOptions = makeOptions({ options, single })
  const madeData = makeData({ data, single, theme })

  return (
    <div className={cx(classes.container, className)} {...props}>
      <div className={classes.background} />
      <Doughnut data={madeData} options={madeOptions} />
      {(primaryText || secondaryText) && (
        <div className={classes.centerText}>
          {primaryText && (
            <Typography classes={{ root: classes.typography }} variant="h3">
              {primaryText}
            </Typography>
          )}
          {secondaryText && (
            <Typography classes={{ root: classes.typography }} variant="body2">
              {secondaryText}
            </Typography>
          )}
        </div>
      )}
    </div>
  )
}

PieChart.propTypes = {
  /** Data to be passed to chart.js graph */
  data: PropTypes.object.isRequired,
  /** Options to be passed to chart.js graph */
  options: PropTypes.object,
  /** Text to show as primary */
  primaryText: PropTypes.string,
  /** Text to show as secondary */
  secondaryText: PropTypes.string,
  /** Whether to use a single data */
  single: PropTypes.bool,
  className: PropTypes.string
}

export default PieChart
