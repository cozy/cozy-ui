/* eslint-disable no-unused-vars */ // for unused context

import React, { forwardRef } from 'react'

import GridItem from './GridItem'
import DnDConfigWrapper from '../../../utils/Dnd/DnDConfigWrapper'

/**
 Be aware that context is spread to every components but should not be spread to root components
 so we desctrure it from props, but don't spread to child to avoid its presence in DOM
*/
const virtuosoComponents = {
  Scroller: forwardRef(({ context, ...scrollerProps }, ref) => {
    return (
      <DnDConfigWrapper ref={ref}>
        <div {...scrollerProps} ref={ref} />
      </DnDConfigWrapper>
    )
  }),
  Item: ({ context, ...props }) => {
    const item = context.items?.[props['data-index']]
    const itemRenderer = context.itemRenderer
    const _props = context.componentProps?.Item || {}

    return (
      <GridItem
        item={item}
        context={context}
        renderItem={itemRenderer}
        {..._props}
      />
    )
  }
}

export default virtuosoComponents
