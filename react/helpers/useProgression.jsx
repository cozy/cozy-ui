import { useState, useEffect } from 'react'

import isTesting from './isTesting'

/**
 * Useful to simulate a progression from 0 to 100.
 * Used in the documentation to simulate the behavior of progression bars or spinners for example.
 * Simulation is disabled during tests, replaced by a fixed value.
 */
const useProgression = () => {
  const [progression, setProgression] = useState(isTesting() ? 25 : 0)

  const increment = () => {
    const diff = Math.random() * 10
    setProgression(progression =>
      progression >= 100 ? 0 : Math.min(progression + diff, 100)
    )
  }

  useEffect(() => {
    if (!isTesting()) {
      const interval = setInterval(increment, 500)
      return () => clearInterval(interval)
    }
  }, [])

  return { progression }
}

export default useProgression
