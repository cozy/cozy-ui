import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import ActionsMenuWrapper from './ActionsMenuWrapper'
import ActionsItems from './ActionsItems'

const useTransformOrigin = ({ vertical, horizontal }) => {
  const v =
    vertical === 'bottom' ? 'top' : vertical === 'top' ? 'bottom' : vertical

  return { vertical: v, horizontal }
}

const ActionsMenu = forwardRef(
  ({ doc, actions, anchorOrigin, children, ...props }, ref) => {
    const transformOrigin = useTransformOrigin(anchorOrigin)

    return (
      <ActionsMenuWrapper
        anchorEl={ref.current}
        getContentAnchorEl={null}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        keepMounted
        {...props}
      >
        {children}
        <ActionsItems doc={doc} actions={actions} />
      </ActionsMenuWrapper>
    )
  }
)

ActionsMenu.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  autoClose: true
}

ActionsMenu.propTypes = {
  /** Whether the menu is open */
  open: PropTypes.bool,
  /** Reference document for the actions  */
  doc: PropTypes.object,
  /** List of actions */
  actions: PropTypes.array,
  /** Allows you to position the menu in relation to the anchor element */
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(['bottom', 'center', 'top']),
    horizontal: PropTypes.oneOf(['left', 'center', 'right'])
  }),
  /** Whether the menu should automatically close itself when an item is clicked */
  autoClose: PropTypes.bool,
  /** Function triggered when closing the menu */
  onClose: PropTypes.func
}

export default ActionsMenu
