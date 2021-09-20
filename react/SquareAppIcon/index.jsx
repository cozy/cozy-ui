import React from 'react'
import get from 'lodash/get'
import classnames from 'classnames'

import AppIcon from '../AppIcon'
import PropTypes from 'prop-types'

import { AppDoctype } from '../proptypes'

import styles from './styles.styl'
import Icon from '../Icon'
import iconPlus from '../Icons/Plus'
import warning from '../Icons/WarningCircle'
import uiPalette from '../../theme/palette.json'

const variantThemes = {
  ghost: {
    className: styles['SquareAppIcon-ghost'],
    mainIcon: null,
    mainColor: null,
    icon: null,
    color: null
  },
  maintenance: {
    className: styles['SquareAppIcon-maintenance'],
    mainIcon: null,
    mainColor: null,
    icon: null,
    color: null
  },
  error: {
    className: null,
    mainIcon: null,
    mainColor: null,
    icon: warning,
    color: uiPalette.Error[600]
  },
  add: {
    className: styles['SquareAppIcon-add'],
    mainIcon: iconPlus,
    mainColor: '#FFFFFF',
    icon: null,
    color: null
  }
}

export const SquareAppIcon = ({ app, name: nameProp, variant }) => {
  const name = nameProp || get(app, 'name')
  const { className: variantClassName, mainIcon, mainColor, icon, color } = get(
    variantThemes,
    variant,
    {}
  )
  return (
    <div>
      <div
        data-testid="square-app-icon"
        className={classnames(
          styles['SquareAppIcon-icon-wrapper'],
          variantClassName
        )}
      >
        <div>
          {mainIcon ? (
            <Icon icon={mainIcon} color={mainColor} />
          ) : (
            <AppIcon app={app} />
          )}
          {icon && (
            <Icon
              icon={icon}
              className={styles['SquareAppIcon-icon-icon']}
              color={color}
            />
          )}
        </div>
      </div>
      <h3 className={styles['SquareAppIcon-title']}>{name}</h3>
    </div>
  )
}

SquareAppIcon.propTypes = {
  app: PropTypes.oneOfType([AppDoctype, PropTypes.string]),
  name: PropTypes.string,
  variant: PropTypes.string
}

export default SquareAppIcon
