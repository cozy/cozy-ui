import _defineProperty from "@babel/runtime/helpers/defineProperty";
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
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
import Icon from "cozy-ui/transpiled/react/Icon";
import { default as ArrowIcon } from "cozy-ui/transpiled/react/Icons/DropdownClose";

var Navigation = function Navigation(_ref) {
  var className = _ref.className,
      hidden = _ref.hidden,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("div", {
    role: "button",
    className: cx(className, styles['viewer-nav'], _defineProperty({}, styles['viewer-nav--visible'], !hidden)),
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: ArrowIcon,
    size: "32",
    className: styles['viewer-nav-arrow']
  }));
};

Navigation.propTypes = {
  className: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};
export default Navigation;