import React from 'react'
import Modal from '../Modal'
import { ViewStackContext } from './context'
import { useStack } from './hooks'

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
        child = hasProps ? child[0] : child
        return (
          <Modal mobileFullscreen key={i} dismissAction={stackPop} {...props}>
            {child}
          </Modal>
        )
      })}
    </ViewStackContext.Provider>
  )
}

export default ModalStack
