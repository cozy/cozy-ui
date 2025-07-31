import React, { forwardRef } from 'react'

import Icon from '../../Icon'
import ListItemIcon from '../../ListItemIcon'
import ListItemText from '../../ListItemText'
import ActionsMenuItem from '../ActionsMenuItem'

const makeComponent = ({ label, icon, name }) => {
  const Component = forwardRef((props, ref) => {
    return (
      <ActionsMenuItem {...props} ref={ref}>
        <ListItemIcon>
          <Icon icon={icon} />
        </ListItemIcon>
        <ListItemText primary={label} />
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
  action
}) => {
  return {
    name,
    icon,
    label,
    disabled,
    displayCondition,
    action,
    Component: makeComponent({ label, icon, name })
  }
}
