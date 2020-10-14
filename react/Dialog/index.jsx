import React from 'react'

import MUIDialog from '@material-ui/core/Dialog'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import PropTypes from 'prop-types'
import { RemoveScroll } from 'react-remove-scroll'

export const Dialog = props => {
  const { onClose, fullScreen, children, open, scroll, ...otherProps } = props
  const Wrapper = open ? RemoveScroll : React.Fragment
  return (
    <Wrapper>
      <MUIDialog
        open={open}
        onClose={onClose}
        fullScreen={fullScreen}
        aria-labelledby="dialog-title"
        scroll={scroll}
        {...otherProps}
      >
        {children}
      </MUIDialog>
    </Wrapper>
  )
}
Dialog.defaultProps = {
  open: true,
  scroll: 'paper'
}

Dialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  fullScreen: PropTypes.bool,
  scroll: PropTypes.oneOf(['paper', 'body'])
}

export default withMobileDialog()(Dialog)

export { default as DialogActions } from './DialogActions'
export { default as DialogCloseButton } from './DialogCloseButton'
export { default as DialogContent } from './DialogContent'
export { default as DialogContentText } from './DialogContentText'
export { default as DialogTitle } from './DialogTitle'
export { default as DialogBackButton } from './DialogBackButton'
