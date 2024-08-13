import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["portalProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState, useEffect, useRef, useCallback, forwardRef, memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BottomSheet as MuiBottomSheet } from 'mui-bottom-sheet';
import { useMutationObserver, useTimeoutWhen } from 'rooks';
import Fade from '@material-ui/core/Fade';
import Portal from '@material-ui/core/Portal';
import { getFlagshipMetadata } from "cozy-ui/transpiled/react/hooks/useSetFlagshipUi/helpers";
import { useSetFlagshipUI } from "cozy-ui/transpiled/react/hooks/useSetFlagshipUi/useSetFlagshipUI";
import CozyTheme, { useCozyTheme } from "cozy-ui/transpiled/react/providers/CozyTheme";
import Stack from "cozy-ui/transpiled/react/Stack";
import Paper from "cozy-ui/transpiled/react/Paper";
import BackdropOrFragment from "cozy-ui/transpiled/react/BottomSheet/BackdropOrFragment";
import { computeMaxHeight, computeMediumHeight, computeMinHeight, makeOverridenChildren, setTopPosition, setBottomPosition, minimizeAndClose, computeBottomSpacer, getCssValue } from "cozy-ui/transpiled/react/BottomSheet/helpers";
import { ANIMATION_DURATION } from "cozy-ui/transpiled/react/BottomSheet/constants";
var stylescss = {
  "renderSaferAnim": "styles__renderSaferAnim___2rNtc",
  "slidein": "styles__slidein___1E_4T"
};

var createContainerWrapperStyles = function createContainerWrapperStyles() {
  return {
    container: {
      position: 'fixed',
      zIndex: 'var(--zIndex-modal)',
      inset: 0
    }
  };
};

var ContainerWrapper = function ContainerWrapper(_ref) {
  var showBackdrop = _ref.showBackdrop,
      children = _ref.children;
  var styles = createContainerWrapperStyles();

  if (showBackdrop) {
    return /*#__PURE__*/React.createElement("div", {
      style: styles.container
    }, children);
  }

  return children;
};

var createStyles = function createStyles(_ref2) {
  var isTopPosition = _ref2.isTopPosition,
      hasToolbarProps = _ref2.hasToolbarProps,
      offset = _ref2.offset,
      renderSaferHeight = _ref2.renderSaferHeight,
      isBottomPosition = _ref2.isBottomPosition;
  return {
    root: _objectSpread({
      borderTopLeftRadius: '1rem',
      borderTopRightRadius: '1rem',
      transition: 'border-radius 0.5s',
      boxShadow: '0 -0.5px 0px 0 rgba(0, 0, 0, 0.10), 0 -2px 2px 0 rgba(0, 0, 0, 0.02), 0 -4px 4px 0 rgba(0, 0, 0, 0.02), 0 -8px 8px 0 rgba(0, 0, 0, 0.02), 0 -16px 16px 0 rgba(0, 0, 0, 0.02)',
      backgroundColor: 'var(--paperBackgroundColor)',
      zIndex: 'var(--zIndex-modal)'
    }, isTopPosition && {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      boxShadow: hasToolbarProps ? '0 0 1px 0 rgba(0, 0, 0, 0.5)' : '0 -1px 0 0 rgba(255, 255, 255, 1)'
    }),
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
      height: "".concat(offset, "px"),
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0,
      backgroundColor: 'var(--paperBackgroundColor)',
      zIndex: 'calc(var(--zIndex-modal) + 10)',
      transition: "opacity ".concat(ANIMATION_DURATION, "ms")
    },
    renderSafer: {
      height: renderSaferHeight,
      width: '100%',
      position: 'fixed',
      bottom: 0,
      pointerEvents: 'none'
    }
  };
};

export var defaultBottomSheetSpringConfig = {
  tension: 165,
  friction: 17,
  clamp: true
};
var defaultSettings = {
  mediumHeightRatio: 0.75,
  mediumHeight: null,
  isOpenMin: false
};
var BottomSheet = /*#__PURE__*/memo(function (_ref3) {
  var toolbarProps = _ref3.toolbarProps,
      settings = _ref3.settings,
      backdrop = _ref3.backdrop,
      skipAnimation = _ref3.skipAnimation,
      onClose = _ref3.onClose,
      offset = _ref3.offset,
      children = _ref3.children;

  var _defaultSettings$sett = _objectSpread(_objectSpread({}, defaultSettings), settings),
      mediumHeightRatio = _defaultSettings$sett.mediumHeightRatio,
      mediumHeight = _defaultSettings$sett.mediumHeight,
      isOpenMin = _defaultSettings$sett.isOpenMin;

  var innerContentRef = useRef();
  var headerRef = useRef();
  var headerContentRef = useRef();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isTopPosition = _useState2[0],
      setIsTopPosition = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isBottomPosition = _useState4[0],
      setIsBottomPosition = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isHidden = _useState6[0],
      setIsHidden = _useState6[1];

  var _useState7 = useState(backdrop),
      _useState8 = _slicedToArray(_useState7, 2),
      showBackdrop = _useState8[0],
      setShowBackdrop = _useState8[1];

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      peekHeights = _useState10[0],
      setPeekHeights = _useState10[1];

  var _useState11 = useState(1),
      _useState12 = _slicedToArray(_useState11, 2),
      currentIndex = _useState12[0],
      setCurrentIndex = _useState12[1]; // as setInitPos use computedMediumHeight


  var _useState13 = useState(0),
      _useState14 = _slicedToArray(_useState13, 2),
      bottomSpacerHeight = _useState14[0],
      setBottomSpacerHeight = _useState14[1];

  var _useState15 = useState(0),
      _useState16 = _slicedToArray(_useState15, 2),
      initPos = _useState16[0],
      setInitPos = _useState16[1];

  var prevInitPos = useRef();

  var _useState17 = useState(0),
      _useState18 = _slicedToArray(_useState17, 2),
      forceRender = _useState18[0],
      setForceRender = _useState18[1];

  var hasToolbarProps = !!Object.keys(toolbarProps).length;
  var isClosable = !!onClose || backdrop;
  var renderSaferHeight = initPos < prevInitPos.current ? prevInitPos.current - 16 : 0; // 16 because border radius

  var showRenderSafer = prevInitPos.current !== 0 && prevInitPos.current > initPos;
  var styles = createStyles({
    isTopPosition: isTopPosition,
    hasToolbarProps: hasToolbarProps,
    offset: offset,
    renderSaferHeight: renderSaferHeight,
    isBottomPosition: isBottomPosition
  });
  var overriddenChildren = makeOverridenChildren(children, headerContentRef);

  if (backdrop && !onClose) {
    throw new Error('BottomSheet must have `onClose` method to work properly when setting `backdrop` to `true`');
  }

  var handleClose = useCallback(function () {
    setShowBackdrop(false);
    setIsHidden(true);
    onClose && onClose();
  }, [onClose]);

  var handleOnIndexChange = function handleOnIndexChange(snapIndex) {
    setCurrentIndex(snapIndex);
    setTopPosition({
      snapIndex: snapIndex,
      peekHeights: peekHeights,
      isTopPosition: isTopPosition,
      setIsTopPosition: setIsTopPosition
    });
    setBottomPosition({
      snapIndex: snapIndex,
      isBottomPosition: isBottomPosition,
      setIsBottomPosition: setIsBottomPosition
    });
  }; // forces a rendering when one of the children has changed,
  // typically after content loading or using content changer such as NestedSelect


  useMutationObserver(innerContentRef, function () {
    setForceRender(function (v) {
      return v + 1;
    });
  }); // hack to prevent pull-down-to-refresh behavior when dragging down the bottom sheet.
  // Needed for iOS Safari

  useEffect(function () {
    document.body.style.overflow = 'hidden';
    return function () {
      document.body.style.overflow = 'auto';
    };
  }, []); // close the bottom sheet by swaping it below the minimum height

  useTimeoutWhen(function () {
    return handleClose();
  }, ANIMATION_DURATION, isClosable && isBottomPosition);
  useEffect(function () {
    var headerContent = headerContentRef.current;
    var innerContentHeight = innerContentRef.current.offsetHeight;
    var actionButtonsHeight = getCssValue(headerContent, 'height');
    var actionButtonsBottomMargin = getCssValue(headerContent, 'padding-bottom');
    var maxHeight = computeMaxHeight(toolbarProps);
    var bottomSpacerHeight = computeBottomSpacer({
      backdrop: backdrop,
      maxHeight: maxHeight,
      innerContentHeight: innerContentHeight,
      toolbarProps: toolbarProps,
      offset: offset
    });
    var minHeight = computeMinHeight({
      isClosable: isClosable,
      isOpenMin: isOpenMin,
      headerRef: headerRef,
      actionButtonsHeight: actionButtonsHeight,
      actionButtonsBottomMargin: actionButtonsBottomMargin
    });
    var computedMediumHeight = isOpenMin && actionButtonsHeight > 0 ? minHeight + 1 : computeMediumHeight({
      backdrop: backdrop,
      maxHeight: maxHeight,
      mediumHeight: mediumHeight,
      mediumHeightRatio: mediumHeightRatio,
      innerContentHeight: innerContentHeight,
      bottomSpacerHeight: bottomSpacerHeight,
      offset: offset
    });

    var newPeekHeights = _toConsumableArray(new Set([minHeight, computedMediumHeight, maxHeight]));

    var hasPeekHeightsChanged = (peekHeights === null || peekHeights === void 0 ? void 0 : peekHeights.toString()) !== (newPeekHeights === null || newPeekHeights === void 0 ? void 0 : newPeekHeights.toString()); // lower the BottomSheet after a refresh if it was as top position and peek changed

    var snapIndex = hasPeekHeightsChanged && isTopPosition ? currentIndex - 1 - (currentIndex - (newPeekHeights.length - 1)) : currentIndex;
    setCurrentIndex(snapIndex);
    setPeekHeights(newPeekHeights);
    prevInitPos.current = initPos;
    setInitPos(computedMediumHeight);
    setTopPosition({
      snapIndex: snapIndex,
      peekHeights: newPeekHeights,
      isTopPosition: isTopPosition,
      setIsTopPosition: setIsTopPosition
    }); // Used so that the BottomSheet can be opened to the top without stopping at the content height

    setBottomSpacerHeight(bottomSpacerHeight); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [// initPos is missing, because we need the previous value
  innerContentRef, toolbarProps, mediumHeightRatio, mediumHeight, showBackdrop, backdrop, isClosable, offset, forceRender // to recompute data when content has changed
  ]);

  var _useCozyTheme = useCozyTheme(),
      isLight = _useCozyTheme.isLight;

  useSetFlagshipUI({
    bottomTheme: isLight ? 'dark' : 'light'
  }, {
    bottomTheme: getFlagshipMetadata().immersive || !isLight ? 'light' : 'dark'
  }, 'cozy-ui/BottomSheet');
  return /*#__PURE__*/React.createElement(ContainerWrapper, {
    showBackdrop: showBackdrop
  }, getFlagshipMetadata().immersive && /*#__PURE__*/React.createElement("span", {
    style: styles.flagshipImmersive
  }), /*#__PURE__*/React.createElement(BackdropOrFragment, {
    showBackdrop: showBackdrop,
    onClick: function onClick() {
      return minimizeAndClose({
        backdrop: backdrop,
        setCurrentIndex: setCurrentIndex,
        setIsTopPosition: setIsTopPosition,
        setIsBottomPosition: setIsBottomPosition,
        handleClose: handleClose
      });
    }
  }), /*#__PURE__*/React.createElement(MuiBottomSheet, {
    peekHeights: peekHeights,
    defaultHeight: initPos,
    backdrop: false,
    fullHeight: hasToolbarProps ? false : true,
    currentIndex: currentIndex,
    onIndexChange: handleOnIndexChange,
    styles: {
      root: styles.root
    },
    threshold: 0 // springConfig doc : https://docs.pmnd.rs/react-spring/common/configs
    ,
    springConfig: {
      tension: defaultBottomSheetSpringConfig.tension,
      friction: defaultBottomSheetSpringConfig.friction,
      clamp: defaultBottomSheetSpringConfig.clamp
    },
    disabledClosing: !onClose,
    hidden: isHidden,
    snapPointSeekerMode: "next",
    skipAnimation: skipAnimation
  }, /*#__PURE__*/React.createElement("div", {
    ref: innerContentRef
  }, /*#__PURE__*/React.createElement(Paper, {
    "data-testid": "bottomSheet-header",
    className: "u-w-100 u-h-3 u-pos-relative u-flex u-flex-items-center u-flex-justify-center",
    ref: headerRef,
    elevation: 0,
    square: true
  }, /*#__PURE__*/React.createElement("div", {
    style: styles.indicator
  })), /*#__PURE__*/React.createElement(Stack, {
    style: styles.stack,
    className: "u-flex u-flex-column u-ov-hidden",
    spacing: "s"
  }, overriddenChildren)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: bottomSpacerHeight
    }
  })), showRenderSafer && /*#__PURE__*/React.createElement("div", {
    style: styles.renderSafer
  }, /*#__PURE__*/React.createElement(Paper, {
    className: stylescss['renderSaferAnim'],
    elevation: 0,
    square: true
  })), !isBottomPosition && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Fade, {
    in: true,
    timeout: ANIMATION_DURATION
  }, /*#__PURE__*/React.createElement("div", {
    style: styles.bounceSafer
  }))), Boolean(offset) && /*#__PURE__*/React.createElement(Fade, {
    in: true,
    timeout: ANIMATION_DURATION
  }, /*#__PURE__*/React.createElement("div", {
    id: "bottomSheet-offsetSafer",
    style: styles.offsetSafer
  })));
});
BottomSheet.displayName = 'BottomSheet';
BottomSheet.defaultProps = {
  classes: {},
  toolbarProps: {},
  backdrop: false,
  offset: getFlagshipMetadata().immersive && getFlagshipMetadata().navbarHeight || 0
};
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
};
var BottomSheetPortal = /*#__PURE__*/forwardRef(function (_ref4, ref) {
  var portalProps = _ref4.portalProps,
      props = _objectWithoutProperties(_ref4, _excluded);

  var _useCozyTheme2 = useCozyTheme(),
      variant = _useCozyTheme2.variant;

  var CozyThemeWrapper = portalProps !== null && portalProps !== void 0 && portalProps.disablePortal ? Fragment : CozyTheme;
  var wrapperProps = portalProps !== null && portalProps !== void 0 && portalProps.disablePortal ? undefined : {
    variant: variant
  };
  return /*#__PURE__*/React.createElement(Portal, portalProps, /*#__PURE__*/React.createElement(CozyThemeWrapper, wrapperProps, /*#__PURE__*/React.createElement(BottomSheet, _extends({
    ref: ref
  }, props))));
});
BottomSheetPortal.displayName = 'BottomSheetPortal';
export default BottomSheetPortal;