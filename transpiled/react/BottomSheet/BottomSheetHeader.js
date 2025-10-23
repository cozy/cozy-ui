import cx from 'classnames';
import React from 'react';
import { BottomSheetItem } from "cozy-ui/transpiled/react/BottomSheet";

var BottomSheetHeader = function BottomSheetHeader(_ref) {
  var className = _ref.className,
      headerContentRef = _ref.headerContentRef,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(BottomSheetItem, {
    ref: headerContentRef,
    className: cx('u-flex u-flex-items-center', className),
    disableGutters: true,
    disableElevation: true
  }, children);
};

BottomSheetHeader.displayName = 'BottomSheetHeader';
export default BottomSheetHeader;