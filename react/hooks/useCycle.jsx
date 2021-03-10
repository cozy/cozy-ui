import { useState, useCallback, useEffect } from 'react'

const useCarrousel = (initialState, min, max) => {
  const [curIndex, setIndex] = useState(initialState)

  const handlePrev = useCallback(() => {
    const prev = curIndex - 1
    setIndex(prev < min ? max : prev)
  }, [curIndex, min, max])

  const handleNext = useCallback(() => {
    const next = curIndex + 1
    setIndex(next > max ? min : next)
  }, [curIndex, max, min])

  useEffect(() => {
    if (curIndex === undefined && initialState !== initialState) {
      setIndex(initialState)
    }
  }, [curIndex, initialState])

  return [curIndex, handlePrev, handleNext]
}

export default useCarrousel
