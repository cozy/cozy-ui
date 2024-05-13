import React from 'react'
import PropTypes from 'prop-types'

import Menu from '../Menu'
import useBreakpoints from '../providers/Breakpoints'
import BottomSheet from '../BottomSheet'
import isTesting from '../helpers/isTesting'
import Paper from '../Paper'
import { useActionMenuEffects } from '../deprecated/ActionMenu/ActionMenuEffects'

const ActionsMenuWrapper = ({
  children,
  autoClose,
  open,
  onClose,
  ...props
}) => {
  const { isMobile } = useBreakpoints()

  useActionMenuEffects()

  const overrideClick = props => ev => {
    props.onClick?.(ev) // this is ActionsItems onClick prop
    autoClose && onClose?.()
  }

  if (isMobile && open) {
    return (
      <BottomSheet skipAnimation={isTesting()} backdrop onClose={onClose}>
        <Paper square>
          {React.Children.map(children, child =>
            React.isValidElement(child)
              ? React.cloneElement(child, {
                  isListItem: true,
                  size: 'small',
                  onClick: overrideClick(child.props)
                })
              : null
          )}
        </Paper>
      </BottomSheet>
    )
  }

  return (
    <Menu {...props} open={open} onClose={onClose}>
      {React.Children.map(children, (child, idx) => {
        // To keep accessibility, we spread the autofocus on the second child
        // if the first one is ActionsMenuMobileHeader
        const firstChild = React.Children.toArray(children)[0]
        const firstChildComponentName =
          firstChild?.type?.name || firstChild?.type?.displayName
        const isFirstChildActionsMenuMobileHeader =
          firstChildComponentName === 'ActionsMenuMobileHeader'
        const autoFocus =
          isFirstChildActionsMenuMobileHeader && idx === 1 ? true : undefined

        return React.isValidElement(child)
          ? React.cloneElement(child, {
              autoFocus,
              onClick: overrideClick(child.props)
            })
          : null
      })}
    </Menu>
  )
}

ActionsMenuWrapper.propTypes = {
  /** Whether the menu should automatically close itself when an item is clicked */
  autoClose: PropTypes.bool,
  /** Function triggered when closing the Menu of BottomSheet */
  onClose: PropTypes.func
}

export default ActionsMenuWrapper
