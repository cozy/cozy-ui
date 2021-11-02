import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'

import AppIcon from '../AppIcon'
import Badge from '../Badge'
import InfosBadge from '../InfosBadge'
import { nameToColor } from '../Avatar'
import Typography from '../Typography'
import { AppDoctype } from '../proptypes'
import Icon from '../Icon'
import iconPlus from '../Icons/Plus'
import iconWarning from '../Icons/WarningCircle'
import iconOut from '../Icons/LinkOut'

import { color } from './constants.json'
import styles from './styles.styl'

const useStyles = makeStyles(theme => ({
  name: {
    color,
    width: '5.5rem',
    textAlign: 'center',
    fontSize: '0.875rem',
    lineHeight: '1.188rem',
    margin: '0.5rem 0.25rem 0 0.25rem',
    textShadow: theme.textShadows[1],
    lineClamp: '2',
    boxOrient: 'vertical',
    display: '-webkit-box',
    height: '2.375rem',
    [theme.breakpoints.down('sm')]: {
      width: '3.75rem',
      fontSize: '0.6875rem',
      lineHeight: '1rem',
      margin: '0.25rem 0.25rem 0 0.25rem',
      height: '2rem'
    }
  },
  letter: {
    color,
    margin: 'auto'
  },
  shadow: {
    boxShadow: theme.shadows[2]
  },
  errorIcon: {
    fill: 'var(--errorColor)',
    backgroundColor: 'var(--primaryContrastTextColor)',
    borderRadius: '1rem'
  },
  tileWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '6rem',
    [theme.breakpoints.down('sm')]: {
      width: '4.25rem'
    }
  }
}))

export const SquareAppIcon = ({ app, name, variant }) => {
  const classes = useStyles()
  const appName = name || (app && app.name) || app || ''
  const letter = appName[0] || ''

  return (
    <div data-testid="square-app-icon" className={cx(classes.tileWrapper)}>
      <InfosBadge
        badgeContent={
          variant === 'shortcut' ? <Icon size="10" icon={iconOut} /> : null
        }
        overlap="rectangle"
        invisible={variant !== 'shortcut'}
      >
        <Badge
          className={cx(
            styles['SquareAppIcon-wrapper'],
            styles[`SquareAppIcon-wrapper-${variant}`],
            {
              [`${styles['SquareAppIcon-wrapper-fx']}`]: [
                'ghost',
                'add'
              ].includes(variant),
              [classes.shadow]: !['add', 'ghost'].includes(variant)
            }
          )}
          badgeContent={
            variant === 'error' ? (
              <Icon
                size="16"
                className={cx(classes.errorIcon)}
                icon={iconWarning}
              />
            ) : (
              ''
            )
          }
          color={variant === 'error' ? 'error' : undefined}
          withBorder={false}
          size="large"
          overlap="rectangle"
          style={
            variant === 'shortcut'
              ? { backgroundColor: nameToColor(name) }
              : null
          }
        >
          {variant === 'shortcut' ? (
            <Typography className={classes.letter} variant="h2" align="center">
              {letter.toUpperCase()}
            </Typography>
          ) : (
            <div className={styles['SquareAppIcon-icon-container']}>
              {variant === 'add' ? (
                <Icon icon={iconPlus} color={color} />
              ) : (
                <AppIcon app={app} />
              )}
            </div>
          )}
        </Badge>
      </InfosBadge>
      <Typography
        className={cx(classes.name, 'u-spacellipsis')}
        variant="h6"
        align="center"
      >
        {appName}
      </Typography>
    </div>
  )
}

SquareAppIcon.propTypes = {
  app: PropTypes.oneOfType([AppDoctype, PropTypes.string]),
  name: PropTypes.string,
  variant: PropTypes.oneOf(['ghost', 'maintenance', 'error', 'add', 'shortcut'])
}

export default SquareAppIcon
