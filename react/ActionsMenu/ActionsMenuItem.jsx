import cx from 'classnames'
import omit from 'lodash/omit'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import ListItem from '../ListItem'
import MenuItem from '../MenuItem'

const cleanPropsForDOM = props => {
  const nonDOMProps = ['docs', 'action', 't', 'f', 'lang']

  return omit(props, nonDOMProps)
}

/**
 * @typedef ListItemTextPropTypes
 * @property {boolean} [isListItem] - Whether the ActionsMenuItem will return a ListItem or MenuItem.
 * @property {string} [className] - Additional CSS class names for the list item text.
 */

/**
 * @type React.ForwardRefRenderFunction<HTMLDivElement, ListItemTextPropTypes>
 */
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
