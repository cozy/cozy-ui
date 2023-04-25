import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import MenuItem from 'cozy-ui/transpiled/react/MenuItem'
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem'

const ActionsMenuItem = forwardRef(({ isListItem, ...props }, ref) => {
  const Component = isListItem ? ListItem : MenuItem

  return <Component {...props} ref={ref} button />
})

ActionsMenuItem.propTypes = {
  /** Whether the ActionsMenuItem will return a ListItem or MenuItem */
  isListItem: PropTypes.bool
}

export default ActionsMenuItem
