import cx from 'classnames'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import ListItemText from 'cozy-ui/transpiled/react/ListItemText'

import styles from './styles.styl'
import AppIcon from '../AppIcon'
import Badge from '../Badge'
import Icon from '../Icon'
import IconCheckAnimated from '../Icons/IconCheckAnimated'
import SvgIconCrossAnimated from '../Icons/IconCrossAnimated'
import iconOut from '../Icons/LinkOut'
import iconPlus from '../Icons/Plus'
import iconWarning from '../Icons/WarningCircle'
import InfosBadge from '../InfosBadge'
import Spinner from '../Spinner'
import Typography from '../Typography'
import { nameToColor } from '../legacy/Avatar/helpers'
import CozyTheme, { useCozyTheme } from '../providers/CozyTheme'
import { alpha, makeStyles } from '../styles'

const makeTwakeColor = theme =>
  theme.variant === 'inverted' || theme.type === 'dark'
    ? 'var(--white)'
    : 'var(--black)'

const useStyles = makeStyles(theme => ({
  name: {
    color: makeTwakeColor(theme),
    textShadow:
      theme.variant === 'inverted' || theme.type === 'dark'
        ? '0px 0px 10px rgba(0, 0, 0, 0.10), 0px 0px 2px rgba(0, 0, 0, 0.20), 0.5px 0.5px 1px rgba(0, 0, 0, 0.50)'
        : undefined,
    width: '5.5rem',
    textAlign: 'center',
    margin: '0.5rem 0.25rem 0 0.25rem',
    lineClamp: '2',
    boxOrient: 'vertical',
    display: '-webkit-box',
    height: '2.375rem',
    [theme.breakpoints.down('sm')]: {
      width: '3.75rem',
      margin: '0.25rem 0.25rem 0 0.25rem',
      height: '2rem'
    }
  },
  nameInverted: {
    textShadow: theme.textShadows[1]
  },
  squareAppIconGhost: {
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.ghostOpacity
    ),
    border: `1px dashed ${alpha(
      theme.palette.primary.main,
      theme.palette.border.ghostOpacity
    )}`
  },
  letter: {
    color: 'white',
    margin: 'auto'
  },
  errorIcon: {
    fill: 'var(--errorColor)',
    backgroundColor: 'var(--primaryContrastTextColor)',
    borderRadius: '1rem'
  },
  tileWrapper: {
    cursor: 'pointer', // Whole block is clickable so we should display the pointer
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '6rem',
    [theme.breakpoints.down('sm')]: {
      minWidth: '4.25rem'
    }
  },
  detailedTileWrapper: {
    flexDirection: 'row',
    width: 'auto'
  }
}))

const shouldRenderSpinner = (variant, animationState) => {
  return ['loading'].includes(variant) || animationState
}

const SquareAppIconSpinner = ({ variant, animationState }) => {
  if (!shouldRenderSpinner(variant, animationState)) {
    return null
  }

  return <Spinner className={cx(styles['SquareAppIcon-spinner'], 'u-m-0')} />
}

export const SquareAppIcon = ({
  display,
  name,
  variant,
  IconContent,
  description,
  hideShortcutBadge = false,
  ...appIconProps
}) => {
  const { variant: themeVariant, type } = useCozyTheme()
  const classes = useStyles()
  const appName =
    name || get(appIconProps, 'app.name') || get(appIconProps, 'app') || ''
  const letter = appName[0] || ''
  const prevVariant = React.useRef(variant)
  const [animationState, setAnimationState] = useState()

  const handleAnimationEnd = e => {
    if (e.animationName.includes('end')) setAnimationState()
  }

  useEffect(() => {
    const curr = prevVariant.current

    if (curr === 'loading' && variant === 'error') setAnimationState('failed')

    if (curr === 'loading' && (variant === 'default' || variant === undefined))
      setAnimationState('success')

    prevVariant.current = variant
  }, [variant])

  const exceptionVariant = ['ghost']

  const squareTheme = exceptionVariant.includes(variant)
    ? themeVariant
    : 'normal'

  return (
    <div
      data-testid="square-app-icon"
      className={cx(classes.tileWrapper, {
        [classes.detailedTileWrapper]: display === 'detailed'
      })}
    >
      <CozyTheme variant={squareTheme}>
        <InfosBadge
          badgeContent={
            variant === 'shortcut' && !hideShortcutBadge ? (
              <Icon size="10" icon={iconOut} />
            ) : null
          }
          className={cx({ ['u-mr-1']: display === 'detailed' })}
          overlap="rectangular"
          invisible={variant !== 'shortcut' || hideShortcutBadge}
        >
          <SquareAppIconSpinner
            variant={variant}
            animationState={animationState}
          />
          <Badge
            className={cx(
              styles[`SquareAppIcon-wrapper`],
              styles[`SquareAppIcon-wrapper-${variant}`],
              styles[`SquareAppIcon-wrapper--${type}`],
              {
                [classes.squareAppIconGhost]:
                  exceptionVariant.includes(variant),
                [classes.shadow]: !exceptionVariant.includes(variant)
              }
            )}
            badgeContent={
              variant === 'error' ? (
                <Icon
                  size={16}
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
            overlap="rectangular"
            style={
              variant === 'shortcut' && !IconContent
                ? {
                    ['background']: nameToColor(name)
                  }
                : null
            }
          >
            {variant === 'shortcut' && !IconContent ? (
              <Typography
                className={classes.letter}
                variant="h2"
                align="center"
              >
                {letter.toUpperCase()}
              </Typography>
            ) : (
              <div
                className={cx(styles['SquareAppIcon-icon-container'], {
                  [styles['SquareAppIcon-icon-container-normal']]:
                    themeVariant === 'normal'
                })}
              >
                <div
                  className={cx(
                    styles['onEnd'],
                    { [styles['isSuccess']]: animationState === 'success' },
                    { [styles['isFailed']]: animationState === 'failed' }
                  )}
                  onAnimationEnd={handleAnimationEnd}
                >
                  {animationState && (
                    <Icon
                      size={32}
                      icon={
                        animationState === 'success'
                          ? IconCheckAnimated
                          : SvgIconCrossAnimated
                      }
                    />
                  )}
                </div>

                {variant === 'add' ? (
                  <Icon icon={iconPlus} color="var(--primaryColor)" />
                ) : IconContent ? (
                  IconContent
                ) : (
                  <div className="u-w-2 u-h-2">
                    <AppIcon {...appIconProps} />
                  </div>
                )}
              </div>
            )}
          </Badge>
        </InfosBadge>
      </CozyTheme>
      {display === 'detailed' ? (
        <ListItemText primary={appName} secondary={description} />
      ) : (
        <Typography
          className={cx(
            classes.name,
            { [classes.nameInverted]: themeVariant === 'inverted' },
            'u-spacellipsis'
          )}
          variant="h6"
          align="center"
        >
          {appName}
        </Typography>
      )}
    </div>
  )
}

/**
 * Having both a `display` and a `variant` prop is a bit confusing,
 * but it's necessary since the `variant` prop can be used both in "compact" and "detailed" mode.
 *
 * As for the `description` prop, it will only be displayed in "detailed" mode.
 * Providing it in "compact" mode will have no effect.
 */
SquareAppIcon.propTypes = {
  display: PropTypes.oneOf(['compact', 'detailed']),
  description: PropTypes.string,
  name: PropTypes.string,
  variant: PropTypes.oneOf([
    'default',
    'loading',
    'ghost',
    'maintenance',
    'error',
    'add',
    'shortcut'
  ]),
  IconContent: PropTypes.node
}

SquareAppIcon.defaultProps = {
  display: 'compact',
  variant: 'default'
}

export default SquareAppIcon
