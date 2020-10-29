import useBreakpoints from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

/**
 * Returns the cssSize class and isFullscreen bool to be used in the Dialog,
 * according to the size of the modale
 * @param {string} size - Size of the modal (S, M, L)
 * @returns {object} cssSize and isFullscreen
 */
export const useCozyDialog = size => {
  const { isMobile } = useBreakpoints()
  const cssSize = ['S', 'M', 'L'].includes(size) ? `size${size}` : 'sizeM'
  const isFullscreen = size !== 'S' && isMobile

  return { cssSize, isFullscreen }
}
