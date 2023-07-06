import React from 'react';
import useBreakpoints from "cozy-ui/transpiled/react/hooks/useBreakpoints";
import isTesting from "cozy-ui/transpiled/react/helpers/isTesting";
import BottomSheet from "cozy-ui/transpiled/react/BottomSheet";
import NotInlineWrapper from "cozy-ui/transpiled/react/deprecated/ActionMenu/NotInlineWrapper";
/**
 * @deprecated This component is depreacated, please use [ActionsMenu](#/ActionsMenu) instead.
 */

var ActionMenuWrapper = function ActionMenuWrapper(_ref) {
  var onClose = _ref.onClose,
      anchorElRef = _ref.anchorElRef,
      popperOptions = _ref.popperOptions,
      placement = _ref.placement,
      preventOverflow = _ref.preventOverflow,
      children = _ref.children;

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  if (isMobile) {
    return /*#__PURE__*/React.createElement(BottomSheet, {
      skipAnimation: isTesting(),
      backdrop: true,
      onClose: onClose
    }, children);
  }

  return /*#__PURE__*/React.createElement(NotInlineWrapper, {
    anchorElRef: anchorElRef,
    popperOptions: popperOptions,
    onClose: onClose,
    placement: placement,
    preventOverflow: preventOverflow
  }, children);
};

export default ActionMenuWrapper;