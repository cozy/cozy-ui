import React from 'react'
import PropTypes from 'prop-types'

import Menu from '../MuiCozyTheme/Menu'
import useBreakpoints from '../hooks/useBreakpoints'
import BottomSheet from '../BottomSheet'
import isTesting from '../helpers/isTesting'
import Paper from '../Paper'
import { useActionMenuEffects } from '../ActionMenu/ActionMenuEffects'

const ActionsMenuWrapper = ({ children, autoClose, onClose, ...props }) => {
  const { isMobile } = useBreakpoints()

  useActionMenuEffects()

  const overrideClick = props => () => {
    props.onClick?.()
    autoClose && onClose?.()
  }

  if (isMobile) {
    return (
      <BottomSheet skipAnimation={isTesting()} backdrop onClose={onClose}>
        <Paper square>
          {React.Children.map(children, child =>
            React.cloneElement(child, {
              isListItem: true,
              size: 'small',
              onClick: overrideClick(child.props)
            })
          )}
        </Paper>
      </BottomSheet>
    )
  }

  return (
    <Menu {...props} onClose={onClose}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          onClick: overrideClick(child.props)
        })
      )}
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
