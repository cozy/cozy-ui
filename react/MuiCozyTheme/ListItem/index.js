import React, { forwardRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import merge from 'lodash/merge'
import MuiListItem from '@material-ui/core/ListItem'
import isMuiElement from '@material-ui/core/utils/isMuiElement'

import { makeStyles } from '../../styles'
import {
  getLastChild,
  getChildrenCount,
  getComponentName,
  getChildren
} from '../../utils/react'

const useStyles = makeStyles({
  gutters: {
    paddingLeft: ({ guttersValue }) => guttersValue.left,
    paddingRight: ({ guttersValue }) => guttersValue.right
  },
  secondaryAction: {
    paddingRight: ({ secondaryActionPaddingRight }) =>
      secondaryActionPaddingRight
  }
})

// Return secondaryAction padding right
const useSecondaryAction = ({ gutters, ...props }) => {
  const BUTTON_SIZE = 48
  const margin = 8
  const offset = gutters === 'double' ? margin + 16 : margin

  const lastChild = getLastChild(props)
  const hasSecondaryAction =
    (lastChild && isMuiElement(lastChild, ['ListItemSecondaryAction'])) || false

  return hasSecondaryAction
    ? getChildrenCount(lastChild.props) * BUTTON_SIZE + offset
    : 0
}

// Return gutters size
const useGutters = ({ gutters, ...props }) => {
  const guttersValue = gutters === 'double' ? 32 : 16

  const lastChild = getLastChild(props)
  const isLastChildListItemIcon = getComponentName(lastChild).includes(
    'ListItemIcon'
  )

  const gutterRight = isLastChildListItemIcon ? guttersValue - 8 : guttersValue

  return { left: guttersValue, right: gutterRight }
}

// Add margin on ListItemSecondaryAction when gutters are double
const useOverridenChildren = ({ gutters, ...props }) => {
  const children = getChildren(props)
  const childrenCount = getChildrenCount(props)

  return React.Children.map(children, (child, index) => {
    const isLastChild = index === childrenCount - 1
    const isSecondaryAction =
      (isLastChild && isMuiElement(child, ['ListItemSecondaryAction'])) || false

    if (isSecondaryAction && gutters === 'double') {
      return React.cloneElement(child, {
        className: `${child.props.className} u-mr-1`
      })
    }
    return child
  })
}

const ListItem = forwardRef(({ className, ...props }, ref) => {
  const secondaryActionPaddingRight = useSecondaryAction(props)
  const guttersValue = useGutters(props)

  const styles = useStyles({ secondaryActionPaddingRight, guttersValue })
  const overridenChildren = useOverridenChildren(props)

  return (
    <MuiListItem
      {...props}
      ref={ref}
      classes={merge(props.classes, styles)}
      className={cx(className, props.size)}
      disableGutters={props.disableGutters || props.gutters === 'disabled'}
    >
      {overridenChildren}
    </MuiListItem>
  )
})

ListItem.displayName = 'ListItem'

ListItem.defaultProps = {
  gutters: 'default',
  size: 'medium'
}

ListItem.propTypes = {
  gutters: PropTypes.oneOf(['disabled', 'double', 'default']),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default ListItem
