import React, { useState, useEffect, useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import { BottomSheet as MuiBottomSheet } from 'mui-bottom-sheet'

import Stack from 'cozy-ui/transpiled/react/Stack'
import Paper from 'cozy-ui/transpiled/react/Paper'

const makeStyles = ({ isTopPosition }) => ({
  root: {
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    transition: 'border-radius 0.5s',
    zIndex: 'var(--zIndex-drawer)',
    boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: 'var(--paperBackgroundColor)',
    ...(isTopPosition && {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      boxShadow: '0 0 1px 0 rgba(0, 0, 0, 0.5)'
    })
  },
  indicator: {
    width: '4rem',
    height: '0.25rem',
    borderRadius: '99px',
    backgroundColor: 'var(--secondaryTextColor)'
  },
  stack: {
    backgroundColor: 'var(--defaultBackgroundColor)'
  }
})

export const defaultBottomSheetSpringConfig = {
  tension: 165,
  friction: 17,
  clamp: true
}

const defaultSettings = {
  mediumHeightRatio: 0.33,
  mediumHeight: null
}

const computeMaxHeight = toolbarProps => {
  const { ref, height } = toolbarProps
  let computedToolbarHeight = 1

  if (height) {
    computedToolbarHeight = height
  } else if (ref && ref.current) {
    computedToolbarHeight = ref.current.offsetHeight
  }

  return window.innerHeight - computedToolbarHeight
}

const BottomSheet = ({ toolbarProps, settings, children }) => {
  const { mediumHeightRatio, mediumHeight } = useMemo(
    () => ({
      ...defaultSettings,
      ...settings
    }),
    [settings]
  )

  const innerContentRef = useRef()
  const headerRef = useRef()
  const headerContentRef = useRef()
  const [isTopPosition, setIsTopPosition] = useState(false)
  const [peekHeights, setPeekHeights] = useState(null)
  const [bottomSpacerHeight, setBottomSpacerHeight] = useState(0)
  const [initPos, setInitPos] = useState(mediumHeight)

  const styles = useMemo(() => makeStyles({ isTopPosition }), [isTopPosition])

  // hack to prevent pull-down-to-refresh behavior when dragging down the bottom sheet.
  // Needed for iOS Safari
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  useEffect(() => {
    const headerContent = headerContentRef.current
    const maxHeight = computeMaxHeight(toolbarProps)
    const computedMediumHeight =
      mediumHeight || Math.round(maxHeight * mediumHeightRatio)

    const actionButtonsHeight = headerContent
      ? parseFloat(getComputedStyle(headerContent).getPropertyValue('height'))
      : 0
    const actionButtonsBottomMargin = headerContent
      ? parseFloat(
          getComputedStyle(headerContent).getPropertyValue('padding-bottom')
        )
      : 0

    // Will return 0 if the variable is not set
    const flagshipBottomOffset = Number(
      getComputedStyle(document.body)
        .getPropertyValue('--flagship-bottom-height')
        .replace('px', '')
    )

    const minHeight =
      headerRef.current.offsetHeight +
      actionButtonsHeight +
      actionButtonsBottomMargin +
      flagshipBottomOffset

    // Used so that the bottomSheet can be opened to the top,
    // without stopping at the content height
    const bottomSpacerHeight = maxHeight - innerContentRef.current.offsetHeight

    setPeekHeights([minHeight, computedMediumHeight, maxHeight])
    setInitPos(computedMediumHeight)
    setBottomSpacerHeight(bottomSpacerHeight)
    // TODO: validate the deps are correct
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    innerContentRef,
    headerContentRef.current,
    toolbarProps,
    mediumHeightRatio,
    mediumHeight
  ])

  const handleOnIndexChange = snapIndex => {
    const maxHeightSnapIndex = peekHeights.length - 1

    if (snapIndex === maxHeightSnapIndex && !isTopPosition) {
      setIsTopPosition(true)
    }
    if (snapIndex !== maxHeightSnapIndex && isTopPosition) {
      setIsTopPosition(false)
    }
  }

  const overriddenChildren = React.Children.map(children, child => {
    if (
      child.type.name === 'BottomSheetHeader' ||
      child.type.displayName === 'BottomSheetHeader'
    ) {
      return React.cloneElement(child, { headerContentRef })
    }
    return child
  })

  return (
    <MuiBottomSheet
      peekHeights={peekHeights}
      defaultHeight={initPos}
      backdrop={false}
      fullHeight={false}
      onIndexChange={snapIndex => handleOnIndexChange(snapIndex)}
      styles={{ root: styles.root }}
      threshold={0}
      // springConfig doc : https://docs.pmnd.rs/react-spring/common/configs
      springConfig={{
        tension: defaultBottomSheetSpringConfig.tension,
        friction: defaultBottomSheetSpringConfig.friction,
        clamp: defaultBottomSheetSpringConfig.clamp
      }}
      disabledClosing={true}
      snapPointSeekerMode="next"
    >
      <div ref={innerContentRef}>
        <Paper
          data-testid="bottomSheet-header"
          className="u-w-100 u-h-2-half u-pos-relative u-flex u-flex-items-center u-flex-justify-center"
          ref={headerRef}
          elevation={0}
          square
        >
          <div style={styles.indicator} />
        </Paper>
        <Stack
          style={styles.stack}
          className="u-flex u-flex-column u-ov-hidden"
          spacing="s"
        >
          {overriddenChildren}
        </Stack>
      </div>
      <div style={{ height: bottomSpacerHeight }} />
    </MuiBottomSheet>
  )
}

BottomSheet.defaultProps = {
  classes: {},
  toolbarProps: {}
}

BottomSheet.propTypes = {
  /** Toolbar properties */
  toolbarProps: PropTypes.shape({
    /** React reference of the toolbar node */
    ref: PropTypes.object,
    /** Toolbar height value */
    height: PropTypes.number
  }),
  /** Settings that can be modified */
  settings: PropTypes.shape({
    /** Height of the middle snap point, expressed as a percentage of the viewport height */
    mediumHeightRatio: PropTypes.number
  })
}

export default React.memo(BottomSheet)
