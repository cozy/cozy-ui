import { useState } from 'react'
import useBreakpoints from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

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
  const isFullscreen = size !== 'small' && isMobile
  return { paperClassName, isFullscreen, id }
}

export default useCozyDialog
