import { useState, useCallback, useEffect } from 'react'

/**
 * When calling setPrev when we are at index min, goes to max
 * When calling setNext when we are at index max, goes to min
 *
 * @param  {number} initialState - If initialState becomes defined (undefined -> value),
 * index will be set to value (useful when the initial state is not known yet)
 * @param  {number} min
 * @param  {number} max
 * @return {Array} - [index, setPrev, setNext]
 */
const useCycle = (initialState, min, max) => {
  const [curIndex, setIndex] = useState(initialState)

  const handlePrev = useCallback(() => {
    const prev = curIndex - 1
    setIndex(prev < min ? max : prev)
  }, [curIndex, min, max])

  const handleNext = useCallback(() => {
    const next = curIndex + 1
    setIndex(next > max ? min : next)
  }, [curIndex, max, min])

  // If the initialState is not initially set, the index will be undefined and
  // when it becomes defined, index will be set to the defined initialState value
  useEffect(() => {
    if (curIndex === undefined && initialState !== undefined) {
      setIndex(initialState)
    }
  }, [curIndex, initialState])

  return [curIndex, handlePrev, handleNext]
}

export default useCycle
