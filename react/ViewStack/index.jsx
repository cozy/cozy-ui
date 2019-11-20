import React, { useState, useContext } from 'react'
import SwipeableViews from 'react-swipeable-views'

// This is guessed, I could not see how to interface properly with
// react-swipeable-views's onTransitionEnd
const STEPPER_TRANSITION_DURATION_MS = 500

export const ViewStackContext = React.createContext()
export const useViewStack = () => useContext(ViewStackContext)

const sleep = duration => new Promise(resolve => setTimeout(resolve, duration))

const useStack = initialState => {
  const [arr, setArray] = useState(initialState)
  const [curIndex, setCurIndex] = useState(initialState.length - 1)

  const push = item => {
    const newArr = [...arr, item]
    setArray(newArr)
    setCurIndex(curIndex + 1)
  }

  const pop = async () => {
    if (arr.length <= 1) {
      return
    }
    const newArr = arr.slice(0, -1)
    setCurIndex(curIndex - 1)
    await sleep(STEPPER_TRANSITION_DURATION_MS)
    setArray(newArr)
  }

  return [arr, curIndex, push, pop]
}

/**
 * Wraps children to builds an animated carrousel where children
 * can push/pop views.
 *
 * - Children receive stack{Pop,Push} methods through `useViewStack`.
 * - When stackPush(<View />) is called, the carrousel animates to this view
 * - When stackPop() is called, the carrousel animates to the view just before
 * - It is possible to await on stackPop() to wait for the animation to finish
 */
const ViewStack = ({ children }) => {
  const [stChildren, curIndex, stackPush, stackPop] = useStack(
    React.Children.toArray(children)
  )

  const contextValue = { stackPush, stackPop }

  return (
    <ViewStackContext.Provider value={contextValue}>
      <SwipeableViews animateHeight disabled index={curIndex}>
        {stChildren.map((child, i) =>
          React.cloneElement(child, {
            key: i,
            active: i === curIndex
          })
        )}
      </SwipeableViews>
    </ViewStackContext.Provider>
  )
}

export default ViewStack
