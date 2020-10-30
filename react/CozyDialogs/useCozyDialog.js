import { useState } from 'react'
import useBreakpoints from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

let globalId = 0

/**
 * Returns the cssSize class and isFullscreen bool to be used in the Dialog
 * according to the size of the modal.
 *
 * @param {string} size - Size of the modal (s, m, l)
 * @returns {object} cssSize, isFullscreen and id
 */
export const useCozyDialog = size => {
  const { isMobile } = useBreakpoints()
  const [id] = useState(globalId++)
  const uppercaseSize = size && size.toUpperCase()
  const cssSize = ['S', 'M', 'L'].includes(uppercaseSize)
    ? `size${uppercaseSize}`
    : 'sizeM'
  const isFullscreen = uppercaseSize !== 'S' && isMobile

  return { cssSize, isFullscreen, id: id }
}
