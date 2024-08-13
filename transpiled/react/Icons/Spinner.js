import _extends from "@babel/runtime/helpers/extends";
// Automatically created, please run `scripts/generate-svg-icon.sh assets/icons/ui/spinner.svg` to regenerate;
import React from 'react';

function SvgSpinner(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 32 32"
  }, props, {
    role: "progressbar",
    "aria-busy": "true"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M16 0a16 16 0 000 32 16 16 0 000-32m0 4a12 12 0 010 24 12 12 0 010-24"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 0a16 16 0 0116 16h-4A12 12 0 0016 4z"
  }));
}

export default SvgSpinner;