import { useState, useCallback } from 'react'

/**
 * Very simple React hook to trigger a rerender when needed
 *
 * @returns {function} rerender the hook & calling component when called
 */
export default function useRerender() {
  const [, setChanges] = useState(0)
  const rerender = useCallback(() => setChanges(val => val + 1), [setChanges])
  return rerender
}
