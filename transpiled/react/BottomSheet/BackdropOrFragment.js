import React, { Fragment } from 'react';
import Backdrop from "cozy-ui/transpiled/react/Backdrop";

var BackdropOrFragment = function BackdropOrFragment(_ref) {
  var showBackdrop = _ref.showBackdrop,
      onClick = _ref.onClick,
      children = _ref.children;
  var Comp = showBackdrop ? Backdrop : Fragment;
  var props = showBackdrop ? {
    open: showBackdrop,
    onClick: onClick
  } : undefined;
  return /*#__PURE__*/React.createElement(Comp, props, children);
};

export default BackdropOrFragment;