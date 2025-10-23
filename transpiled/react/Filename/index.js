import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
var styles = {
  "icon-withPath": "styles__icon-withPath___1IcPC"
};
import { iconPropType } from "cozy-ui/transpiled/react/Icon";
import MidEllipsis from "cozy-ui/transpiled/react/MidEllipsis";
import Typography from "cozy-ui/transpiled/react/Typography";

var NameAndExtension = function NameAndExtension(_ref) {
  var filename = _ref.filename,
      extension = _ref.extension,
      variant = _ref.variant,
      midEllipsis = _ref.midEllipsis;
  return /*#__PURE__*/React.createElement(React.Fragment, null, filename && /*#__PURE__*/React.createElement(Typography, {
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

var Filename = function Filename(_ref2) {
  var icon = _ref2.icon,
      filename = _ref2.filename,
      extension = _ref2.extension,
      midEllipsis = _ref2.midEllipsis,
      variant = _ref2.variant,
      path = _ref2.path;

  var _ref3 = path ? [Fragment, {}] : ['div', {
    className: cx('u-flex u-flex-items-center')
  }],
      _ref4 = _slicedToArray(_ref3, 2),
      Wrapper = _ref4[0],
      wrapperProps = _ref4[1];

  return /*#__PURE__*/React.createElement(Wrapper, wrapperProps, icon && /*#__PURE__*/React.createElement("div", {
    className: cx('u-flex u-pos-relative u-mr-1', _defineProperty({}, styles['icon-withPath'], !!path))
  }, icon), path ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "u-flex"
  }, /*#__PURE__*/React.createElement(NameAndExtension, {
    filename: filename,
    extension: extension,
    variant: variant,
    midEllipsis: midEllipsis
  })), /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    component: "div",
    noWrap: true
  }, path)) : /*#__PURE__*/React.createElement(NameAndExtension, {
    filename: filename,
    extension: extension,
    variant: variant,
    midEllipsis: midEllipsis
  }));
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