import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import MenuItem from '../MenuItem'
import ListItem from '../MuiCozyTheme/ListItem'

const ActionsMenuItem = forwardRef(({ isListItem, ...props }, ref) => {
  const Component = isListItem ? ListItem : MenuItem

  return <Component {...props} ref={ref} button ellipsis={false} />
})

ActionsMenuItem.displayName = 'ActionsMenuItem'

ActionsMenuItem.propTypes = {
  /** Whether the ActionsMenuItem will return a ListItem or MenuItem */
  isListItem: PropTypes.bool
}

export default ActionsMenuItem
