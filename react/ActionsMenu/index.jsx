import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import ActionsItems from './ActionsItems'
import ActionsMenuWrapper from './ActionsMenuWrapper'

const useTransformOrigin = ({ vertical, horizontal }) => {
  const v =
    vertical === 'bottom' ? 'top' : vertical === 'top' ? 'bottom' : vertical

  return { vertical: v, horizontal }
}

const ActionsMenu = forwardRef(
  (
    {
      docs,
      actions,
      anchorOrigin,
      children,
      componentsProps,
      onClose,
      autoCloseOnContextMenu,
      ...props
    },
    ref
  ) => {
    const transformOrigin = useTransformOrigin(anchorOrigin)

    return (
      <ActionsMenuWrapper
        {...props}
        anchorEl={ref?.current}
        getContentAnchorEl={null}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        keepMounted
        {...(autoCloseOnContextMenu && {
          onContextMenu: ev => {
            ev.preventDefault()
            onClose()
          }
        })}
        onClose={onClose}
      >
        {children}
        <ActionsItems
          {...componentsProps.actionsItems}
          docs={docs}
          actions={actions}
        />
      </ActionsMenuWrapper>
    )
  }
)

ActionsMenu.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  autoClose: true,
  autoCloseOnContextMenu: true,
  componentsProps: {}
}

ActionsMenu.propTypes = {
  /** Whether the menu is open */
  open: PropTypes.bool,
  /** Reference documents for the actions */
  docs: PropTypes.array,
  /** List of actions */
  actions: PropTypes.array,
  /** Allows you to position the menu in relation to the anchor element */
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(['bottom', 'center', 'top']),
    horizontal: PropTypes.oneOf(['left', 'center', 'right'])
  }),
  /** Whether the menu should automatically close itself when an item is clicked */
  autoClose: PropTypes.bool,
  /** Whether the menu should automatically close itself when right-click is triggered */
  autoCloseOnContextMenu: PropTypes.bool,
  /* Props passed to components with the same name */
  componentsProps: PropTypes.shape({
    /** Props spread to ActionsItems component */
    actionsItems: PropTypes.shape({
      /** Props spread to action method of Actions component */
      actionOptions: PropTypes.object,
      /** onClick method spread to action method of Actions component */
      onClick: PropTypes.func
    })
  }),
  /** Function triggered when closing the menu */
  onClose: PropTypes.func
}

export default ActionsMenu
