import React from 'react';
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
var styles = {
  "viewer-nav": "styles__viewer-nav___1MSd7",
  "viewer-nav--visible": "styles__viewer-nav--visible___h_KJD",
  "viewer-nav--previous": "styles__viewer-nav--previous___WOwzv",
  "viewer-nav-arrow": "styles__viewer-nav-arrow___3_d1_",
  "viewer-nav--next": "styles__viewer-nav--next___1ah-4",
  "viewer-controls": "styles__viewer-controls___1BYEX",
  "--expanded": "styles__--expanded___2NoA-",
  "viewer-controls--display-content-top": "styles__viewer-controls--display-content-top___3I1xq",
  "viewer-toolbar": "styles__viewer-toolbar___2zPR7",
  "viewer-toolbar--hidden": "styles__viewer-toolbar--hidden___3r3Sj",
  "viewer-footer": "styles__viewer-footer___2ieQS"
};

var Footer = function Footer(_ref) {
  var children = _ref.children;

  var _useBreakpoints = useBreakpoints(),
      isDesktop = _useBreakpoints.isDesktop;

  if (isDesktop) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: styles['viewer-footer']
  }, children);
};

export default Footer;