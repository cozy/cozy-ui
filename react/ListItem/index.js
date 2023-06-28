import React, { forwardRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import merge from 'lodash/merge'
import MuiListItem from '@material-ui/core/ListItem'
import isMuiElement from '@material-ui/core/utils/isMuiElement'

import { makeStyles } from '../styles'
import {
  getLastChild,
  getChildrenCount,
  getComponentName,
  getChildren
} from '../utils/react'

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
  const isLastChildListItemIcon = lastChild
    ? getComponentName(lastChild).includes('ListItemIcon')
    : false

  const gutterRight = isLastChildListItemIcon ? guttersValue - 8 : guttersValue

  return { left: guttersValue, right: gutterRight }
}

// Add margin on ListItemSecondaryAction when gutters are double
// Propagates ellipsis prop to ListItemText
const useOverridenChildren = ({ gutters, ellipsis, ...props }) => {
  const children = getChildren(props)
  const childrenCount = getChildrenCount(props)

  return React.Children.map(children, (child, index) => {
    const isLastChild = index === childrenCount - 1
    const isSecondaryAction =
      (isLastChild && isMuiElement(child, ['ListItemSecondaryAction'])) || false
    const isListItemText = getComponentName(child).includes('ListItemText')

    if (isSecondaryAction && gutters === 'double') {
      return React.cloneElement(child, {
        className: `${child.props.className} u-mr-1`
      })
    }

    if (isListItemText) {
      return React.cloneElement(child, { ellipsis })
    }

    return child
  })
}

const ListItem = forwardRef(
  ({ className, gutters, ellipsis, componentElement, ...props }, ref) => {
    const secondaryActionPaddingRight = useSecondaryAction({
      gutters,
      ...props
    })
    const guttersValue = useGutters({ gutters, ...props })

    const styles = useStyles({ secondaryActionPaddingRight, guttersValue })
    const overridenChildren = useOverridenChildren({
      gutters,
      ellipsis,
      ...props
    })

    return (
      <MuiListItem
        {...props}
        component={componentElement || props.component}
        ref={ref}
        classes={merge(props.classes, styles)}
        className={cx(className, props.size)}
        disableGutters={props.disableGutters || gutters === 'disabled'}
      >
        {overridenChildren}
      </MuiListItem>
    )
  }
)

ListItem.displayName = 'ListItem'

ListItem.defaultProps = {
  gutters: 'default',
  size: 'medium'
}

export const LitItemPropTypes = {
  gutters: PropTypes.oneOf(['disabled', 'double', 'default']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  ellipsis: PropTypes.bool,
  /** If the `component` prop is already used to return `ListItem`, this prop still allows you to choose a component to render in `ListItem`. cf:`MenuItem` component */
  componentElement: PropTypes.elementType
}

ListItem.propTypes = LitItemPropTypes

export default ListItem
