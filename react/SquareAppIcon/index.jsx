import React from 'react'
import get from 'lodash/get'
import classnames from 'classnames'

import AppIcon from '../AppIcon'
import Badge from '../Badge'
import Typography from '../Typography'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import { AppDoctype } from '../proptypes'

import styles from './styles.styl'
import Icon from '../Icon'
import iconPlus from '../Icons/Plus'
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
  }
}

const useStyles = makeStyles(theme => ({
  iconTitle: {
    color: theme.palette.primary.contrastText,
    fontSize: '0.875rem',
    fontWeight: 700,
    lineHeight: '1.188rem',
    margin: '.5rem 0 0'
  }
}))

export const SquareAppIcon = ({ app, name: nameProp, variant }) => {
  const { iconTitle } = useStyles()

  const name = nameProp || get(app, 'name') || app
  const { className: variantClassName, mainIcon, mainColor, icon, color } = get(
    variantThemes,
    variant,
    {}
  )
  return (
    <div data-testid="square-app-icon">
      <Badge
        className={classnames(
          styles['SquareAppIcon-icon-wrapper'],
          variantClassName
        )}
        badgeContent={icon}
        color={color}
        withBorder={false}
        overlap={false}
      >
        <div>
          {mainIcon ? (
            <Icon icon={mainIcon} color={mainColor} />
          ) : (
            <AppIcon app={app} />
          )}
        </div>
      </Badge>
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
  variant: PropTypes.string
}

export default SquareAppIcon
