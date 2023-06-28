import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { useStack } from './hooks'
import { ViewStackContext } from './context'

// This is guessed, I could not see how to interface properly with
// react-swipeable-views's onTransitionEnd
const STEPPER_TRANSITION_DURATION_MS = 500

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
    React.Children.toArray(children),
    { popDelay: STEPPER_TRANSITION_DURATION_MS }
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
