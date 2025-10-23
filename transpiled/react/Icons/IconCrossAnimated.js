import _extends from "@babel/runtime/helpers/extends";
// Automatically created, please run `scripts/generate-svgr-icon.sh assets/icons/animated/icon-cross-animated.svg` to regenerate;
import React from 'react';

function SvgIconCrossAnimated(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 16 16",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("style", null, '@-webkit-keyframes checkmark{0%{stroke-dashoffset:100px}to{stroke-dashoffset:200px}}@-ms-keyframes checkmark{0%{stroke-dashoffset:100px}to{stroke-dashoffset:200px}}@keyframes checkmark{0%{stroke-dashoffset:100px}to{stroke-dashoffset:0}}'), /*#__PURE__*/React.createElement("path", {
    className: "icon-cross-animated_svg__l1",
    d: "M2 2l12 12",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      WebkitAnimation: 'checkmark .5s ease-in-out backwards',
      animation: 'checkmark .5s ease-in-out backwards'
    },
    strokeDasharray: "100px,100px",
    strokeDashoffset: 200
  }), /*#__PURE__*/React.createElement("path", {
    className: "icon-cross-animated_svg__l2",
    d: "M14 2L2 14",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      WebkitAnimation: 'checkmark .5s ease-in-out .16s backwards',
      animation: 'checkmark .5s ease-in-out .16s backwards'
    },
    strokeDasharray: "100px,100px",
    strokeDashoffset: 200
  }));
}

export default SvgIconCrossAnimated;