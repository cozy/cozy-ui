import { useState } from 'react'
import useBreakpoints from '../hooks/useBreakpoints'
import DialogTransition from './DialogTransition'
import cx from 'classnames'

let globalId = 0

const modalSizes = ['small', 'medium', 'large']
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
    onBack,
    onClose,
    align,
    disableTitleAutoPadding,
    isFluidTitle,
    disableGutters,
    titleRef,
    ...otherProps
  } = props
  const { isMobile } = useBreakpoints()
  const [id] = useState(globalId++)
  const paperClassName = modalSizes.includes(size) ? `${size}` : 'medium'
  const scrollPaperClassName = align == 'top' ? `alignTop` : ''
  const fullScreen = size !== 'small' && isMobile
  const TransitionComponent = DialogTransition

  const dialogProps = {
    'aria-labelledby': `modal-title-${id}`,
    fullScreen,
    open: open !== undefined ? open : opened,
    onClose,
    TransitionComponent,
    ...otherProps,
    classes: {
      ...otherProps.classes,
      paper: `${paperClassName} ${
        otherProps.classes ? otherProps.classes.paper : ''
      }`,
      scrollPaper: scrollPaperClassName
    },
    TransitionProps: {
      fullScreen,
      ...otherProps.TransitionProps
    }
  }

  const showCloseButton = !fullScreen && onClose
  const showBackButton = onBack || (fullScreen && onClose) // back and close buttons are merged in fullScreen

  const dialogTitleProps = {
    id: `modal-title-${id}`,
    ref: titleRef,
    disableTypography: true,
    className: cx({
      'u-ellipsis': !isFluidTitle,
      dialogTitleFluid: isFluidTitle,
      dialogTitleWithClose: showCloseButton && !disableTitleAutoPadding,
      dialogTitleWithBack: showBackButton && !disableTitleAutoPadding
    })
  }

  const listItemClassName = 'listItem--dialog'
  const listItemProps = {
    classes: {
      root: listItemClassName
    }
  }

  const dividerClassName = 'divider--dialog'
  const dividerProps = {
    classes: {
      root: dividerClassName
    }
  }

  const dialogActionsClassName = 'cozyDialogActions'
  const dialogActionsProps = {
    classes: {
      root: dialogActionsClassName
    }
  }

  const dialogContentProps = {
    classes: {
      root: cx({
        disableGutters
      })
    }
  }

  return {
    dialogProps,
    dialogTitleProps,
    listItemProps,
    id,
    fullScreen,
    dividerProps,
    dialogActionsProps,
    dialogContentProps
  }
}

export default useCozyDialog
