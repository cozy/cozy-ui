import { useEffect, useState } from 'react'

/**
 * Force a new render each `duration` ms
 *
 * @param {number} duration - in millisecond
 * @returns {Date} last trigger date for a rerender
 */
export default function usePeriodicRender(duration) {
  const [lastExecuted, setLastExecuted] = useState(undefined)
  useEffect(() => {
    if (duration) {
      const interval = window.setInterval(() => {
        setLastExecuted(new Date())
      }, duration)
      return () => {
        window.clearInterval(interval)
      }
    }
  }, [duration])

  return lastExecuted
}
