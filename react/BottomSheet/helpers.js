import React from 'react'
import { getFlagshipMetadata } from 'cozy-device-helper'

export const computeMaxHeight = toolbarProps => {
  const { ref, height } = toolbarProps
  let computedToolbarHeight = 1

  if (height) {
    computedToolbarHeight = height
  } else if (ref && ref.current) {
    computedToolbarHeight = ref.current.offsetHeight
  }

  return window.innerHeight - computedToolbarHeight
}

export const computeMediumHeight = ({
  backdrop,
  maxHeight,
  mediumHeight,
  mediumHeightRatio,
  innerContentHeight
}) => {
  const mediumHeightOrWithRatio =
    mediumHeight || Math.round(maxHeight * mediumHeightRatio)

  if (backdrop) {
    if (mediumHeightOrWithRatio < innerContentHeight) {
      return mediumHeightOrWithRatio < maxHeight
        ? mediumHeightOrWithRatio
        : maxHeight
    }
    return innerContentHeight > maxHeight ? maxHeight : innerContentHeight
  }

  return mediumHeightOrWithRatio > maxHeight
    ? maxHeight
    : mediumHeightOrWithRatio
}

export const computeMinHeight = ({
  isClosable,
  headerRef,
  actionButtonsHeight,
  actionButtonsBottomMargin
}) => {
  if (isClosable) return 0
  return (
    headerRef.current.offsetHeight +
    actionButtonsHeight +
    actionButtonsBottomMargin +
    (getFlagshipMetadata().navbarHeight || 0)
  )
}

export const makeOverridenChildren = (children, headerContentRef) => {
  return React.Children.map(children, child => {
    if (
      child?.type?.name === 'BottomSheetHeader' ||
      child?.type?.displayName === 'BottomSheetHeader'
    ) {
      return React.cloneElement(child, { headerContentRef })
    }
    return child
  })
}

export const setTopPosition = ({
  snapIndex,
  maxHeightSnapIndex,
  isTopPosition,
  setIsTopPosition
}) => {
  if (snapIndex > maxHeightSnapIndex) {
    setIsTopPosition(true)
  }
  if (snapIndex === maxHeightSnapIndex && !isTopPosition) {
    setIsTopPosition(true)
  }
  if (snapIndex < maxHeightSnapIndex && isTopPosition) {
    setIsTopPosition(false)
  }
}

export const setBottomPosition = ({
  snapIndex,
  isBottomPosition,
  setIsBottomPosition
}) => {
  if (snapIndex === 0 && !isBottomPosition) {
    setIsBottomPosition(true)
  }
  if (snapIndex !== 0 && isBottomPosition) {
    setIsBottomPosition(false)
  }
}
