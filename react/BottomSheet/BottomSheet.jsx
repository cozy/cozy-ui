import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  forwardRef,
  memo,
  Fragment
} from 'react'
import PropTypes from 'prop-types'
import { BottomSheet as MuiBottomSheet } from 'mui-bottom-sheet'
import { useMutationObserver, useTimeoutWhen } from 'rooks'
import Fade from '@material-ui/core/Fade'
import Portal from '@material-ui/core/Portal'

import { getFlagshipMetadata } from '../hooks/useSetFlagshipUi/helpers'

import { useSetFlagshipUI } from '../hooks/useSetFlagshipUi/useSetFlagshipUI'
import CozyTheme, { useCozyTheme } from '../providers/CozyTheme'
import Stack from '../Stack'
import Paper from '../Paper'
import BackdropOrFragment from './BackdropOrFragment'
import {
  computeMaxHeight,
  computeMediumHeight,
  computeMinHeight,
  makeOverridenChildren,
  setTopPosition,
  setBottomPosition,
  minimizeAndClose,
  computeBottomSpacer,
  getCssValue
} from './helpers'
import { ANIMATION_DURATION } from './constants'
import stylescss from './styles.styl'

const createContainerWrapperStyles = () => ({
  container: {
    position: 'fixed',
    zIndex: 'var(--zIndex-modal)',
    inset: 0
  }
})

const ContainerWrapper = ({ showBackdrop, children }) => {
  const styles = createContainerWrapperStyles()

  if (showBackdrop) {
    return <div style={styles.container}>{children}</div>
  }

  return children
}

const createStyles = ({
  isTopPosition,
  hasToolbarProps,
  offset,
  renderSaferHeight,
  isBottomPosition
}) => ({
  root: {
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    transition: 'border-radius 0.5s',
    boxShadow:
      '0 -0.5px 0px 0 rgba(0, 0, 0, 0.10), 0 -2px 2px 0 rgba(0, 0, 0, 0.02), 0 -4px 4px 0 rgba(0, 0, 0, 0.02), 0 -8px 8px 0 rgba(0, 0, 0, 0.02), 0 -16px 16px 0 rgba(0, 0, 0, 0.02)',
    backgroundColor: 'var(--paperBackgroundColor)',
    zIndex: 'var(--zIndex-modal)',
    ...(isTopPosition && {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      boxShadow: hasToolbarProps
        ? '0 0 1px 0 rgba(0, 0, 0, 0.5)'
        : '0 -1px 0 0 rgba(255, 255, 255, 1)'
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
  },
  bounceSafer: {
    height: 50,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    backgroundColor: 'var(--paperBackgroundColor)'
  },
  flagshipImmersive: {
    backgroundColor: 'var(--paperBackgroundColor)',
    bottom: 0,
    content: '',
    height: 'var(--flagship-bottom-height)',
    position: 'fixed',
    width: '100%',
    zIndex: 'var(--zIndex-modal)'
  },
  offsetSafer: {
    opacity: isBottomPosition ? 0 : 1,
    height: `${offset}px`,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    backgroundColor: 'var(--paperBackgroundColor)',
    zIndex: 'calc(var(--zIndex-modal) + 10)',
    transition: `opacity ${ANIMATION_DURATION}ms`
  },
  renderSafer: {
    height: renderSaferHeight,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    pointerEvents: 'none'
  }
})

export const defaultBottomSheetSpringConfig = {
  tension: 165,
  friction: 17,
  clamp: true
}

const defaultSettings = {
  mediumHeightRatio: 0.75,
  mediumHeight: null,
  isOpenMin: false
}

const BottomSheet = memo(
  ({
    toolbarProps,
    settings,
    backdrop,
    skipAnimation,
    onClose,
    offset,
    children
  }) => {
    const { mediumHeightRatio, mediumHeight, isOpenMin } = {
      ...defaultSettings,
      ...settings
    }

    const innerContentRef = useRef()
    const headerRef = useRef()
    const headerContentRef = useRef()
    const [isTopPosition, setIsTopPosition] = useState(false)
    const [isBottomPosition, setIsBottomPosition] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const [showBackdrop, setShowBackdrop] = useState(backdrop)
    const [peekHeights, setPeekHeights] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(1) // as setInitPos use computedMediumHeight
    const [bottomSpacerHeight, setBottomSpacerHeight] = useState(0)
    const [initPos, setInitPos] = useState(0)
    const prevInitPos = useRef()
    const [forceRender, setForceRender] = useState(0)

    const hasToolbarProps = !!Object.keys(toolbarProps).length
    const isClosable = !!onClose || backdrop
    const renderSaferHeight =
      initPos < prevInitPos.current ? prevInitPos.current - 16 : 0 // 16 because border radius
    const showRenderSafer =
      prevInitPos.current !== 0 && prevInitPos.current > initPos

    const styles = createStyles({
      isTopPosition,
      hasToolbarProps,
      offset,
      renderSaferHeight,
      isBottomPosition
    })
    const overriddenChildren = makeOverridenChildren(children, headerContentRef)

    if (backdrop && !onClose) {
      throw new Error(
        'BottomSheet must have `onClose` method to work properly when setting `backdrop` to `true`'
      )
    }

    const handleClose = useCallback(() => {
      setShowBackdrop(false)
      setIsHidden(true)
      onClose && onClose()
    }, [onClose])

    const handleOnIndexChange = snapIndex => {
      setCurrentIndex(snapIndex)
      setTopPosition({
        snapIndex,
        peekHeights,
        isTopPosition,
        setIsTopPosition
      })
      setBottomPosition({ snapIndex, isBottomPosition, setIsBottomPosition })
    }

    // forces a rendering when one of the children has changed,
    // typically after content loading or using content changer such as NestedSelect
    useMutationObserver(innerContentRef, () => {
      setForceRender(v => v + 1)
    })

    // hack to prevent pull-down-to-refresh behavior when dragging down the bottom sheet.
    // Needed for iOS Safari
    useEffect(() => {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = 'auto'
      }
    }, [])

    // close the bottom sheet by swaping it below the minimum height
    useTimeoutWhen(
      () => handleClose(),
      ANIMATION_DURATION,
      isClosable && isBottomPosition
    )

    useEffect(() => {
      const headerContent = headerContentRef.current
      const innerContentHeight = innerContentRef.current.offsetHeight
      const actionButtonsHeight = getCssValue(headerContent, 'height')
      const actionButtonsBottomMargin = getCssValue(
        headerContent,
        'padding-bottom'
      )

      const maxHeight = computeMaxHeight(toolbarProps)

      const bottomSpacerHeight = computeBottomSpacer({
        backdrop,
        maxHeight,
        innerContentHeight,
        toolbarProps,
        offset
      })
      const minHeight = computeMinHeight({
        isClosable,
        isOpenMin,
        headerRef,
        actionButtonsHeight,
        actionButtonsBottomMargin
      })
      const computedMediumHeight =
        isOpenMin && actionButtonsHeight > 0
          ? minHeight + 1
          : computeMediumHeight({
              backdrop,
              maxHeight,
              mediumHeight,
              mediumHeightRatio,
              innerContentHeight,
              bottomSpacerHeight,
              offset
            })

      const newPeekHeights = [
        ...new Set([minHeight, computedMediumHeight, maxHeight])
      ]

      const hasPeekHeightsChanged =
        peekHeights?.toString() !== newPeekHeights?.toString()

      // lower the BottomSheet after a refresh if it was as top position and peek changed
      const snapIndex =
        hasPeekHeightsChanged && isTopPosition
          ? currentIndex - 1 - (currentIndex - (newPeekHeights.length - 1))
          : currentIndex

      setCurrentIndex(snapIndex)
      setPeekHeights(newPeekHeights)
      prevInitPos.current = initPos
      setInitPos(computedMediumHeight)
      setTopPosition({
        snapIndex,
        peekHeights: newPeekHeights,
        isTopPosition,
        setIsTopPosition
      })
      // Used so that the BottomSheet can be opened to the top without stopping at the content height
      setBottomSpacerHeight(bottomSpacerHeight)

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      // initPos is missing, because we need the previous value
      innerContentRef,
      toolbarProps,
      mediumHeightRatio,
      mediumHeight,
      showBackdrop,
      backdrop,
      isClosable,
      offset,
      forceRender // to recompute data when content has changed
    ])

    const { isLight } = useCozyTheme()

    useSetFlagshipUI(
      { bottomTheme: isLight ? 'dark' : 'light' },
      {
        bottomTheme:
          getFlagshipMetadata().immersive || !isLight ? 'light' : 'dark'
      },
      'cozy-ui/BottomSheet'
    )

    return (
      <ContainerWrapper showBackdrop={showBackdrop}>
        {getFlagshipMetadata().immersive && (
          <span style={styles.flagshipImmersive} />
        )}
        <BackdropOrFragment
          showBackdrop={showBackdrop}
          onClick={() =>
            minimizeAndClose({
              backdrop,
              setCurrentIndex,
              setIsTopPosition,
              setIsBottomPosition,
              handleClose
            })
          }
        />
        <MuiBottomSheet
          peekHeights={peekHeights}
          defaultHeight={initPos}
          backdrop={false}
          fullHeight={hasToolbarProps ? false : true}
          currentIndex={currentIndex}
          onIndexChange={handleOnIndexChange}
          styles={{ root: styles.root }}
          threshold={0}
          // springConfig doc : https://docs.pmnd.rs/react-spring/common/configs
          springConfig={{
            tension: defaultBottomSheetSpringConfig.tension,
            friction: defaultBottomSheetSpringConfig.friction,
            clamp: defaultBottomSheetSpringConfig.clamp
          }}
          disabledClosing={!onClose}
          hidden={isHidden}
          snapPointSeekerMode="next"
          skipAnimation={skipAnimation}
        >
          <div ref={innerContentRef}>
            <Paper
              data-testid="bottomSheet-header"
              className="u-w-100 u-h-3 u-pos-relative u-flex u-flex-items-center u-flex-justify-center"
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
        {showRenderSafer && (
          <div style={styles.renderSafer}>
            <Paper
              className={stylescss['renderSaferAnim']}
              elevation={0}
              square
            />
          </div>
        )}
        {!isBottomPosition && (
          <>
            <Fade in timeout={ANIMATION_DURATION}>
              <div style={styles.bounceSafer} />
            </Fade>
          </>
        )}
        {Boolean(offset) && (
          <Fade in timeout={ANIMATION_DURATION}>
            <div id="bottomSheet-offsetSafer" style={styles.offsetSafer} />
          </Fade>
        )}
      </ContainerWrapper>
    )
  }
)

BottomSheet.displayName = 'BottomSheet'

BottomSheet.defaultProps = {
  classes: {},
  toolbarProps: {},
  backdrop: false,
  offset:
    (getFlagshipMetadata().immersive && getFlagshipMetadata().navbarHeight) || 0
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
    /** Height in pixel of the middle snap point */
    mediumHeight: PropTypes.number,
    /** Height of the middle snap point, expressed as a percentage of the viewport height */
    mediumHeightRatio: PropTypes.number,
    /** To open the BottomSheet at the minimum height, if have an header */
    isOpenMin: PropTypes.bool
  }),
  /** To add a backdrop */
  backdrop: PropTypes.bool,
  /** To remove animations */
  skipAnimation: PropTypes.bool,
  /** Add an offset at the bottom */
  offset: PropTypes.number,
  /** To totally close the BottomSheet by swaping it down */
  onClose: PropTypes.func
}

const BottomSheetPortal = forwardRef(({ portalProps, ...props }, ref) => {
  const { variant } = useCozyTheme()
  const CozyThemeWrapper = portalProps?.disablePortal ? Fragment : CozyTheme
  const wrapperProps = portalProps?.disablePortal ? undefined : { variant }

  return (
    <Portal {...portalProps}>
      <CozyThemeWrapper {...wrapperProps}>
        <BottomSheet ref={ref} {...props} />
      </CozyThemeWrapper>
    </Portal>
  )
})

BottomSheetPortal.displayName = 'BottomSheetPortal'

export default BottomSheetPortal
