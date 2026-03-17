import PropTypes from 'prop-types'
import React from 'react'

import Alert from '../Alert'
import { LinearProgress } from '../Progress'
import Typography from '../Typography'
import { useBreakpoints } from '../providers/Breakpoints'
import { withStyles } from '../styles'
import { AddPropsToComp } from '../utils/react'

const progressHeight = '0.125rem'

const styles = () => ({
  progress: {
    backgroundColor: 'transparent',
    height: progressHeight,
    marginTop: `-${progressHeight}`
  }
})

const ProgressionBanner = withStyles(styles)(
  ({ classes, value, text, icon, button, progressBar }) => {
    const variant = value ? 'determinate' : undefined
    const { isMobile } = useBreakpoints()

    const _icon = AddPropsToComp(icon, compProps => ({
      ...compProps,
      size: compProps.size ?? '32'
    }))

    return (
      <>
        <Alert
          icon={_icon}
          color="var(--contrastBackgroundColor)"
          square
          block={isMobile}
          action={button}
        >
          <Typography component="span" variant="h6">
            {text}
          </Typography>
        </Alert>
        {progressBar && (
          <LinearProgress
            className={classes.progress}
            variant={variant}
            value={value}
          />
        )}
      </>
    )
  }
)

ProgressionBanner.propTypes = {
  /** Percentage of progression, should be between 0 and 100 */
  value: PropTypes.number,
  /** Text to be shown in the banner */
  text: PropTypes.string,
  /** Icon to be shown in the banner */
  icon: PropTypes.node,
  /** Button to use in the banner */
  button: PropTypes.node,
  /** Progression bar is hidden if set to false (defaults to true) */
  progressBar: PropTypes.bool
}

ProgressionBanner.defaultProps = {
  progressBar: true
}

export default ProgressionBanner
