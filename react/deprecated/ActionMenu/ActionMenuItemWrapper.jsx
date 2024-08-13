import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import { makeStyles } from '../../styles'
import Typography from '../../Typography'
import Icon, { iconPropType } from '../../Icon'
import { ActionMenuItem } from '.'

const useStyles = makeStyles(theme => ({
  disabledItem: {
    cursor: 'default',
    '&:hover': {
      backgroundColor: 'initial'
    }
  },
  disabledIcon: {
    fill: theme.palette.text.disabled
  },
  disabledTypography: {
    color: theme.palette.text.disabled
  }
}))

const ActionMenuItemWrapper = ({
  icon,
  className,
  isEnabled,
  componentsProps,
  children,
  onClick
}) => {
  const styles = useStyles()

  return (
    <ActionMenuItem
      className={cx(`u-flex-items-center ${className}`, {
        [styles.disabledItem]: !isEnabled
      })}
      left={
        icon && (
          <Icon
            icon={icon}
            className={cx({
              [styles.disabledIcon]: !isEnabled
            })}
            {...componentsProps?.iconProps}
          />
        )
      }
      onClick={onClick}
    >
      <Typography
        className={cx({
          [styles.disabledTypography]: !isEnabled
        })}
        {...componentsProps?.typographyProps}
      >
        {children}
      </Typography>
    </ActionMenuItem>
  )
}

ActionMenuItemWrapper.defaultProps = {
  className: '',
  isEnabled: true,
  componentsProps: {}
}

ActionMenuItemWrapper.propTypes = {
  icon: iconPropType,
  className: PropTypes.string,
  isEnabled: PropTypes.bool,
  componentsProps: PropTypes.shape({
    iconProps: PropTypes.object,
    typographyProps: PropTypes.object
  }),
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default ActionMenuItemWrapper
