import React from 'react'

import { ANIMATION_DURATION } from './constants'
import { getSafeAreaValue } from '../helpers/getSafeArea'
import { getFlagshipMetadata } from '../hooks/useSetFlagshipUi/helpers'

export const computeToolbarHeight = (toolbarProps = {}) => {
  const { ref, height } = toolbarProps
  let computedToolbarHeight = 1

  if (height) {
    computedToolbarHeight = height
  } else if (ref && ref.current) {
    computedToolbarHeight = ref.current.offsetHeight
  }

  return computedToolbarHeight
}

export const computeMaxHeight = toolbarProps => {
  const toolbarHeight = computeToolbarHeight(toolbarProps)

  return window.innerHeight - toolbarHeight
}

export const computeMediumHeight = ({
  backdrop,
  maxHeight,
  mediumHeight,
  mediumHeightRatio,
  innerContentHeight,
  bottomSpacerHeight,
  offset
}) => {
  const mediumHeightOrWithRatio =
    mediumHeight || Math.round(maxHeight * mediumHeightRatio)

  if (backdrop) {
    if (mediumHeightOrWithRatio < innerContentHeight) {
      return mediumHeightOrWithRatio < maxHeight
        ? mediumHeightOrWithRatio
        : maxHeight
    }
    return innerContentHeight > maxHeight
      ? maxHeight
      : innerContentHeight + bottomSpacerHeight
  }

  if (innerContentHeight < mediumHeightOrWithRatio)
    return innerContentHeight + offset
  return mediumHeightOrWithRatio > maxHeight
    ? maxHeight
    : mediumHeightOrWithRatio
}

export const computeMinHeight = ({
  isClosable,
  isOpenMin,
  headerRef,
  actionButtonsHeight,
  actionButtonsBottomMargin
}) => {
  if (isClosable && !isOpenMin) return 0

  return (
    headerRef.current.offsetHeight +
    actionButtonsHeight +
    actionButtonsBottomMargin +
    (getFlagshipMetadata().navbarHeight || 0) +
    getSafeAreaValue('bottom')
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
  peekHeights,
  isTopPosition,
  setIsTopPosition
}) => {
  const maxHeightSnapIndex = peekHeights.length - 1

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

export const minimizeAndClose = ({
  backdrop,
  setCurrentIndex,
  setIsTopPosition,
  setIsBottomPosition,
  handleClose
}) => {
  if (backdrop) {
    setCurrentIndex(0)
    setIsTopPosition(false)
    setIsBottomPosition(true)
    setTimeout(handleClose, ANIMATION_DURATION)
  }
}

export const computeBottomSpacer = ({
  backdrop,
  maxHeight,
  innerContentHeight,
  toolbarProps,
  offset
}) => {
  // "maxHeight - innerContentHeight <= 0" happens for content longer than the available height
  // such as height window or height window minus toolbar height
  if (maxHeight - innerContentHeight <= 0) {
    const toolbarHeight = computeToolbarHeight(toolbarProps)

    return offset + toolbarHeight
  }

  // without backdrop, we want the bottomsheet to open to the top of the window
  return backdrop ? offset : maxHeight - innerContentHeight
}

export const getCssValue = (element, value) =>
  element ? parseFloat(getComputedStyle(element).getPropertyValue(value)) : 0
