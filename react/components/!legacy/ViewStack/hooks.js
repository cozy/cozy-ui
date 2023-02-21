import { useState } from 'react'

const sleep = duration => new Promise(resolve => setTimeout(resolve, duration))

const useStack = (initialState, options = {}) => {
  const [arr, setArray] = useState(initialState)
  const [curIndex, setCurIndex] = useState(initialState.length - 1)

  const push = (item, itemOptions) => {
    const newArr = [...arr, itemOptions ? [item, itemOptions] : item]
    setArray(newArr)
    setCurIndex(curIndex + 1)
  }

  const pop = async () => {
    if (arr.length <= 1) {
      return
    }
    const newArr = arr.slice(0, -1)
    setCurIndex(curIndex - 1)
    if (options.popDelay) {
      await sleep(options.popDelay)
    }
    setArray(newArr)
  }

  return [arr, curIndex, push, pop]
}

export { useStack }
