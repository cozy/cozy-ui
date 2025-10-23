import React, { forwardRef } from 'react';
import Divider from "cozy-ui/transpiled/react/Divider";
export var divider = function divider() {
  return {
    name: 'divider',
    Component: /*#__PURE__*/forwardRef(function (props, ref) {
      return /*#__PURE__*/React.createElement(Divider, {
        className: "u-mv-half",
        ref: ref
      });
    })
  };
};