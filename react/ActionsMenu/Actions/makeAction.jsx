import { Icon } from '@linagora/twake-icons'
import React, { forwardRef } from 'react'

import ListItemIcon from '../../ListItemIcon'
import ListItemText from '../../ListItemText'
import ActionsMenuItem from '../ActionsMenuItem'

const makeComponent = ({ label, icon, name, componentProps }) => {
  const Component = forwardRef((props, ref) => {
    return (
      <ActionsMenuItem {...props} ref={ref}>
        <ListItemIcon>
          <Icon icon={icon} {...componentProps?.Icon} />
        </ListItemIcon>
        <ListItemText primary={label} {...componentProps?.ListItemText} />
      </ActionsMenuItem>
    )
  })

  Component.displayName = name

  return Component
}

export const makeAction = ({
  name,
  label,
  icon,
  disabled,
  displayCondition,
  Component,
  componentProps,
  action
}) => {
  return {
    name,
    icon,
    label,
    disabled,
    displayCondition,
    action,
    componentProps,
    Component: Component || makeComponent({ label, icon, name, componentProps })
  }
}
