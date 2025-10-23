import React from 'react';
import BottomSheet from "cozy-ui/transpiled/react/NestedSelect/BottomSheet";
import Modal from "cozy-ui/transpiled/react/NestedSelect/Modal";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";

var NestedSelectResponsive = function NestedSelectResponsive(props) {
  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  var Wrapper = isMobile ? BottomSheet : Modal;
  return /*#__PURE__*/React.createElement(Wrapper, props);
};

export default NestedSelectResponsive;