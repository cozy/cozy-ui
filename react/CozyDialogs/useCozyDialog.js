import { useState, useEffect } from 'react'
import useBreakpoints from '../hooks/useBreakpoints'
import DialogTransition from './DialogTransition'

let globalId = 0

const modalSizes = ['small', 'medium', 'large']

const useScrollLock = active => {
  useEffect(() => {
    const html = document.body.parentNode
    const backup = html.style.overflow
    if (active) {
      html.style.overflow = 'hidden'
    }
    return () => {
      if (active && html.style.overflow === 'hidden') {
        html.style.overflow = backup
      }
    }
  }, [active])
}

/**
 * Returns the className and isFullscreen bool to be used in the Dialog
 * according to the size of the modal.
 *
 * @param {string} size - Size of the modal (small, medium, large)
 * @returns {object} className, isFullscreen and id
 */
const useCozyDialog = props => {
  const {
    size,
    actions, // eslint-disable-line no-unused-vars
    actionsLayout, // eslint-disable-line no-unused-vars
    title, // eslint-disable-line no-unused-vars
    content, // eslint-disable-line no-unused-vars
    open,
    opened,
    onClose,
    ...otherProps
  } = props
  const { isMobile } = useBreakpoints()
  const [id] = useState(globalId++)
  const paperClassName = modalSizes.includes(size) ? `${size}` : 'medium'
  const fullScreen = size !== 'small' && isMobile
  const TransitionComponent = DialogTransition

  const dialogProps = {
    'aria-labelledby': `modal-title-${id}`,
    fullScreen,
    open: open || opened,
    onClose,
    TransitionComponent,
    ...otherProps,
    classes: {
      ...otherProps.classes,
      paper: `${paperClassName} ${
        otherProps.classes ? otherProps.classes.paper : ''
      }`
    },
    TransitionProps: {
      fullScreen,
      ...otherProps.TransitionProps
    }
  }

  const dialogTitleProps = {
    id: `modal-title-${id}`,
    disableTypography: true,
    className: 'u-ellipsis'
  }

  const listItemClassName = 'listItem--dialog'
  const listItemProps = {
    classes: {
      root: listItemClassName
    }
  }

  // Here is a crude fix until we upgrade to material-ui to version > 3.9.4.
  // This is to block the scroll on the html node element otherwise mui only puts
  // overflow: hidden on the body and html is still scrollable for screen widths < 1024px.
  // Improvement seems to have been done in mui ModalManager, we should be able
  // to remove our own useScrollLock after update to mui 4.9.11
  // https://github.com/mui-org/material-ui/pull/17972
  useScrollLock(open || opened)

  return {
    dialogProps,
    dialogTitleProps,
    listItemProps,
    id,
    fullScreen
  }
}

export default useCozyDialog
