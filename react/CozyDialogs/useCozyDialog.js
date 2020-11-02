import { useState } from 'react'
import useBreakpoints from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

let globalId = 0

const modalSizes = ['small', 'medium', 'large']
/**
 * Returns the cssSize class and isFullscreen bool to be used in the Dialog
 * according to the size of the modal.
 *
 * @param {string} size - Size of the modal (small, medium, large)
 * @returns {object} cssSize, isFullscreen and id
 */
export const useCozyDialog = size => {
  const { isMobile } = useBreakpoints()
  const [id] = useState(globalId++)
  const cssSize = modalSizes.includes(size) ? `--${size}` : '--medium'
  const isFullscreen = size !== 'small' && isMobile
  return { cssSize, isFullscreen, id: id }
}
