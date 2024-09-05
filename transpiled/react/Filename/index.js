import PropTypes from 'prop-types';
import React from 'react';
import Icon, { iconPropType } from "cozy-ui/transpiled/react/Icon";
import MidEllipsis from "cozy-ui/transpiled/react/MidEllipsis";
import Typography from "cozy-ui/transpiled/react/Typography";

var Filename = function Filename(_ref) {
  var icon = _ref.icon,
      filename = _ref.filename,
      extension = _ref.extension,
      midEllipsis = _ref.midEllipsis,
      variant = _ref.variant;
  return /*#__PURE__*/React.createElement("div", {
    className: "u-flex u-flex-items-center"
  }, icon && /*#__PURE__*/React.createElement("div", {
    className: "u-mr-1"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    width: 30,
    height: 30
  })), filename && /*#__PURE__*/React.createElement(Typography, {
    variant: variant,
    component: "span",
    noWrap: true
  }, midEllipsis ? /*#__PURE__*/React.createElement(MidEllipsis, {
    text: filename
  }) : filename), extension && /*#__PURE__*/React.createElement(Typography, {
    variant: variant,
    component: "span",
    color: "textSecondary"
  }, extension));
};

Filename.propTypes = {
  /** Filename icon */
  icon: iconPropType,

  /** folder or file name */
  filename: PropTypes.string,

  /** If a file name, you can specify the extension */
  extension: PropTypes.string,

  /** To replace the end ellipsis by a middle on in the filename */
  midEllipsis: PropTypes.bool,
  variant: PropTypes.string
};
Filename.defaultProps = {
  variant: 'h6',
  midEllipsis: false
};
export default Filename;