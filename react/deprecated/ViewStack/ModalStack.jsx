import React from 'react'
import Modal from '../Modal'
import { ViewStackContext } from './context'
import { useStack } from './hooks'

/**
 * Wraps children so that they can push views that will appear as modals.
 *
 * - Children receive stack{Pop,Push} methods through `useViewStack`.
 * - When stackPush(<View />) is called, a modal containing <View/> is displayed
 * - When stackPop() is called, the modal disappears
 * - Several modals can be stacked in this manner
 * - The <Modal /> element wrapping <View /> can receive props via the 2nd
 * argument of stackPush : `stackPush(<SmallView />, { size: 'xsmall' })`
 *
 * Can be used as a replacement of a <ViewStack /> on mobile
 */
const ModalStack = ({ children }) => {
  const [stChildren, , stackPush, stackPop] = useStack(
    React.Children.toArray(children)
  )

  const contextValue = { stackPush, stackPop }

  return (
    <ViewStackContext.Provider value={contextValue}>
      {stChildren[0]}
      {stChildren.slice(1).map((child, i) => {
        const hasProps = child.length > 1
        const props = hasProps ? child[1] : null
        const modalChild = hasProps ? child[0] : child
        return (
          <Modal mobileFullscreen key={i} dismissAction={stackPop} {...props}>
            {modalChild}
          </Modal>
        )
      })}
    </ViewStackContext.Provider>
  )
}

export default ModalStack
