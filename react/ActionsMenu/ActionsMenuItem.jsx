import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'
import cx from 'classnames'

import MenuItem from '../MenuItem'
import ListItem from '../ListItem'

const cleanPropsForDOM = props => {
  const nonDOMProps = ['docs', 'action', 't', 'f', 'lang']

  return omit(props, nonDOMProps)
}

const ActionsMenuItem = forwardRef(
  ({ isListItem, className, ...props }, ref) => {
    const Component = isListItem ? ListItem : MenuItem
    const compProps = cleanPropsForDOM(props)

    return (
      <Component
        {...compProps}
        className={cx(className, 'cozyActionsItem')}
        ref={ref}
        button
        ellipsis={false}
      />
    )
  }
)

ActionsMenuItem.displayName = 'ActionsMenuItem'

ActionsMenuItem.propTypes = {
  className: PropTypes.string,
  /** Whether the ActionsMenuItem will return a ListItem or MenuItem */
  isListItem: PropTypes.bool
}

export default ActionsMenuItem
