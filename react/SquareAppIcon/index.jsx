import React from 'react'
import get from 'lodash/get'
import classnames from 'classnames'
import PropTypes from 'prop-types'

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

export const SquareAppIcon = ({ app, name, variant }) => {
  const appName = name || get(app, 'name') || app

  const infoBadgeContent =
    variant === 'shortcut' ? <Icon size="10" icon={iconOut} /> : null
  const ghostAddSharedClass = ['ghost', 'add'].includes(variant)
    ? styles['SquareAppIcon-variant-wrapper']
    : null
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
            styles[`SquareAppIcon-${variant}`],
            ghostAddSharedClass
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
              className={styles['SquareAppIcon-shortcut-letter']}
              align="center"
              variant="h2"
            >
              {get(appName, '[0]', '')}
            </Typography>
          ) : (
            <div>
              {variant === 'add' ? (
                <Icon icon={iconPlus} className="u-primaryContrastTextColor" />
              ) : (
                <AppIcon app={app} />
              )}
            </div>
          )}
        </Badge>
      </InfosBadge>
      <Typography className={classnames(styles['SquareAppIcon-name'])}>
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
