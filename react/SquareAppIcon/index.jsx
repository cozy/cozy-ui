import React from 'react'
import get from 'lodash/get'
import classnames from 'classnames'

import AppIcon from '../AppIcon'
import Badge from '../Badge'
import InfosBadge from '../InfosBadge'
import { nameToColor } from '../Avatar'
import Typography from '../Typography'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import { AppDoctype } from '../proptypes'

import styles from './styles.styl'
import Icon from '../Icon'
import iconPlus from '../Icons/Plus'
import iconOut from '../Icons/LinkOut'
import uiPalette from '../../theme/palette.json'

const variantThemes = {
  ghost: {
    className: styles['SquareAppIcon-ghost'],
    mainIcon: null,
    mainColor: null,
    icon: null,
    color: undefined
  },
  maintenance: {
    className: styles['SquareAppIcon-maintenance'],
    mainIcon: null,
    mainColor: null,
    icon: null,
    color: undefined
  },
  error: {
    className: null,
    mainIcon: null,
    mainColor: null,
    icon: '!',
    color: 'error'
  },
  add: {
    className: styles['SquareAppIcon-add'],
    mainIcon: iconPlus,
    mainColor: uiPalette.Primary.ContrastText,
    icon: null,
    color: undefined
  },
  shortcut: {
    className: styles['SquareAppIcon-shortcut'],
    mainIcon: null,
    mainColor: null,
    icon: iconOut,
    color: undefined
  }
}

const useStyles = makeStyles(theme => ({
  iconTitle: {
    color: theme.palette.primary.contrastText,
    fontSize: '0.875rem',
    fontWeight: 700,
    lineHeight: '1.188rem',
    margin: '.5rem 0 0'
  },
  avatarColor: ({ name }) => ({
    backgroundColor: nameToColor(name)
  })
}))

export const SquareAppIcon = props => {
  const { app, name: nameProp, variant } = props
  const name = nameProp || get(app, 'name') || app
  const { iconTitle, avatarColor } = useStyles({ ...props, name })
  const { className: variantClassName, mainIcon, mainColor, icon, color } = get(
    variantThemes,
    variant,
    {}
  )
  const infoBadgeContent =
    variant === 'shortcut' ? <Icon size="10" icon={icon} /> : 0
  return (
    <div data-testid="square-app-icon">
      <InfosBadge
        badgeContent={infoBadgeContent}
        overlap={false}
        showZero={false}
      >
        <Badge
          className={classnames(
            styles['SquareAppIcon-icon-wrapper'],
            variantClassName,
            variant === 'shortcut' ? avatarColor : undefined
          )}
          badgeContent={icon}
          color={color}
          withBorder={false}
          overlap={false}
        >
          {variant === 'shortcut' ? (
            <Typography
              className="u-primaryContrastTextColor u-m-auto"
              align="center"
              variant="h2"
            >
              {get(name, '[0]', '')}
            </Typography>
          ) : (
            <div>
              {mainIcon ? (
                <Icon icon={mainIcon} color={mainColor} />
              ) : (
                <AppIcon app={app} />
              )}
            </div>
          )}
        </Badge>
      </InfosBadge>
      <Typography
        className={classnames(styles['SquareAppIcon-title'], iconTitle)}
      >
        {name}
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
