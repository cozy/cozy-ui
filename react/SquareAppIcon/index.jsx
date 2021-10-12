import React from 'react'
import get from 'lodash/get'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import AppIcon from '../AppIcon'
import Badge from '../Badge'
import InfosBadge from '../InfosBadge'
import { nameToColor } from '../Avatar'
import Typography from '../Typography'
import { AppDoctype } from '../proptypes'
import styles from './styles.styl'
import Icon from '../Icon'
import iconPlus from '../Icons/Plus'
import iconOut from '../Icons/LinkOut'
import uiPalette from '../../theme/palette.json'

const useStyles = makeStyles({
  iconName: {
    color: 'var(--primaryContrastTextColor)',
    fontSize: '0.875rem',
    fontWeight: 700,
    lineHeight: '1.188rem',
    margin: '.5rem 0 0'
  }
})

export const SquareAppIcon = ({ app, name, variant }) => {
  const appName = name || get(app, 'name') || app

  const classes = useStyles()

  const infoBadgeContent =
    variant === 'shortcut' ? <Icon size="10" icon={iconOut} /> : null
  return (
    <div data-testid="square-app-icon">
      <InfosBadge
        badgeContent={infoBadgeContent}
        overlap="rectangle"
        invisible={variant !== 'shortcut'}
      >
        <Badge
          className={classnames(
            styles['SquareAppIcon-icon-wrapper'],
            styles[`SquareAppIcon-${variant}`]
          )}
          badgeContent={variant === 'error' ? '!' : ''}
          color={variant === 'error' ? 'error' : undefined}
          withBorder={false}
          overlap="rectangle"
          style={
            variant === 'shortcut'
              ? { backgroundColor: nameToColor(name) }
              : null
          }
        >
          {variant === 'shortcut' ? (
            <Typography
              className={classnames(
                styles[SquareAppIcon - name],
                'u-primaryContrastTextColor',
                'u-m-auto'
              )}
              align="center"
              variant="h2"
            >
              {get(appName, '[0]', '')}
            </Typography>
          ) : (
            <div>
              {variant === 'add' ? (
                <Icon icon={iconPlus} color={uiPalette.Primary.ContrastText} />
              ) : (
                <AppIcon app={app} />
              )}
            </div>
          )}
        </Badge>
      </InfosBadge>
      <Typography
        className={classnames(styles['SquareAppIcon-name'], classes.iconName)}
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
