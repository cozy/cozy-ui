import { useState } from 'react'
import useBreakpoints from '../hooks/useBreakpoints'
import DialogTransition from './DialogTransition'

let globalId = 0

const modalSizes = ['small', 'medium', 'large']
/**
 * Returns the className and isFullscreen bool to be used in the Dialog
 * according to the size of the modal.
 *
 * @param {string} size - Size of the modal (small, medium, large)
 * @returns {object} className, isFullscreen and id
 */
const useCozyDialog = size => {
  const { isMobile } = useBreakpoints()
  const [id] = useState(globalId++)
  const paperClassName = modalSizes.includes(size) ? `${size}` : 'medium'
  const fullScreen = size !== 'small' && isMobile
  const TransitionComponent = DialogTransition
  const TransitionProps = { fullScreen }

  const dialogProps = {
    'aria-labelledby': `modal-title-${id}`,
    classes: {
      paper: paperClassName
    },
    fullScreen,
    TransitionComponent,
    TransitionProps
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

  return {
    dialogProps,
    dialogTitleProps,
    listItemProps,
    id,
    fullScreen
  }
}

export default useCozyDialog
