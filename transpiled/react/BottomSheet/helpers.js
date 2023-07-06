import React from 'react';
import { getFlagshipMetadata } from 'cozy-device-helper';
import { ANIMATION_DURATION } from "cozy-ui/transpiled/react/BottomSheet/constants";
import { getSafeAreaValue } from "cozy-ui/transpiled/react/helpers/getSafeArea";
export var computeMaxHeight = function computeMaxHeight(toolbarProps) {
  var ref = toolbarProps.ref,
      height = toolbarProps.height;
  var computedToolbarHeight = 1;

  if (height) {
    computedToolbarHeight = height;
  } else if (ref && ref.current) {
    computedToolbarHeight = ref.current.offsetHeight;
  }

  return window.innerHeight - computedToolbarHeight;
};
export var computeMediumHeight = function computeMediumHeight(_ref) {
  var backdrop = _ref.backdrop,
      maxHeight = _ref.maxHeight,
      mediumHeight = _ref.mediumHeight,
      mediumHeightRatio = _ref.mediumHeightRatio,
      innerContentHeight = _ref.innerContentHeight,
      bottomSpacerHeight = _ref.bottomSpacerHeight,
      offset = _ref.offset;
  var mediumHeightOrWithRatio = mediumHeight || Math.round(maxHeight * mediumHeightRatio);

  if (backdrop) {
    if (mediumHeightOrWithRatio < innerContentHeight) {
      return mediumHeightOrWithRatio < maxHeight ? mediumHeightOrWithRatio : maxHeight;
    }

    return innerContentHeight > maxHeight ? maxHeight : innerContentHeight + bottomSpacerHeight;
  }

  if (innerContentHeight < mediumHeightOrWithRatio) return innerContentHeight + offset;
  return mediumHeightOrWithRatio > maxHeight ? maxHeight : mediumHeightOrWithRatio;
};
export var computeMinHeight = function computeMinHeight(_ref2) {
  var isClosable = _ref2.isClosable,
      headerRef = _ref2.headerRef,
      actionButtonsHeight = _ref2.actionButtonsHeight,
      actionButtonsBottomMargin = _ref2.actionButtonsBottomMargin;
  if (isClosable) return 0;
  return headerRef.current.offsetHeight + actionButtonsHeight + actionButtonsBottomMargin + (getFlagshipMetadata().navbarHeight || 0) + getSafeAreaValue('bottom');
};
export var makeOverridenChildren = function makeOverridenChildren(children, headerContentRef) {
  return React.Children.map(children, function (child) {
    var _child$type, _child$type2;

    if ((child === null || child === void 0 ? void 0 : (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.name) === 'BottomSheetHeader' || (child === null || child === void 0 ? void 0 : (_child$type2 = child.type) === null || _child$type2 === void 0 ? void 0 : _child$type2.displayName) === 'BottomSheetHeader') {
      return /*#__PURE__*/React.cloneElement(child, {
        headerContentRef: headerContentRef
      });
    }

    return child;
  });
};
export var setTopPosition = function setTopPosition(_ref3) {
  var snapIndex = _ref3.snapIndex,
      maxHeightSnapIndex = _ref3.maxHeightSnapIndex,
      isTopPosition = _ref3.isTopPosition,
      setIsTopPosition = _ref3.setIsTopPosition;

  if (snapIndex > maxHeightSnapIndex) {
    setIsTopPosition(true);
  }

  if (snapIndex === maxHeightSnapIndex && !isTopPosition) {
    setIsTopPosition(true);
  }

  if (snapIndex < maxHeightSnapIndex && isTopPosition) {
    setIsTopPosition(false);
  }
};
export var setBottomPosition = function setBottomPosition(_ref4) {
  var snapIndex = _ref4.snapIndex,
      isBottomPosition = _ref4.isBottomPosition,
      setIsBottomPosition = _ref4.setIsBottomPosition;

  if (snapIndex === 0 && !isBottomPosition) {
    setIsBottomPosition(true);
  }

  if (snapIndex !== 0 && isBottomPosition) {
    setIsBottomPosition(false);
  }
};
export var minimizeAndClose = function minimizeAndClose(_ref5) {
  var backdrop = _ref5.backdrop,
      setCurrentIndex = _ref5.setCurrentIndex,
      setIsTopPosition = _ref5.setIsTopPosition,
      setIsBottomPosition = _ref5.setIsBottomPosition,
      handleClose = _ref5.handleClose;

  if (backdrop) {
    setCurrentIndex(0);
    setIsTopPosition(false);
    setIsBottomPosition(true);
    setTimeout(handleClose, ANIMATION_DURATION);
  }
};
export var computeBottomSpacer = function computeBottomSpacer(_ref6) {
  var backdrop = _ref6.backdrop,
      maxHeight = _ref6.maxHeight,
      innerContentHeight = _ref6.innerContentHeight,
      offset = _ref6.offset;

  // "maxHeight - innerContentHeight <= 0" happens for
  // content longer than the window
  if (maxHeight - innerContentHeight <= 0 || backdrop) {
    return offset;
  } // without backdrop, we want the bottomsheet to open to the top of the window


  return maxHeight - innerContentHeight;
};