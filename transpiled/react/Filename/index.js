import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Media, Bd, Img } from "cozy-ui/transpiled/react/deprecated/Media";
import Icon from "cozy-ui/transpiled/react/Icon";
import Typography from "cozy-ui/transpiled/react/Typography";
var styles = {
  "c-filename-wrapper": "styles__c-filename-wrapper___3tVpA",
  "c-filename-name": "styles__c-filename-name___1jDMz"
};

var Filename = function Filename(_ref) {
  var icon = _ref.icon,
      filename = _ref.filename,
      extension = _ref.extension,
      variant = _ref.variant;
  return /*#__PURE__*/React.createElement(Media, null, icon && /*#__PURE__*/React.createElement(Img, null, /*#__PURE__*/React.createElement(Icon, {
    className: 'u-mr-1',
    icon: icon,
    width: 30,
    height: 30
  })), (filename || extension) && /*#__PURE__*/React.createElement(Bd, {
    className: styles['c-filename-wrapper']
  }, filename && /*#__PURE__*/React.createElement(Typography, {
    variant: variant,
    component: "span",
    className: cx(styles['c-filename-name'], 'u-ellipsis')
  }, filename), extension && /*#__PURE__*/React.createElement(Typography, {
    variant: variant,
    component: "span",
    color: "textSecondary"
  }, extension)));
};

Filename.propTypes = {
  /** Filename icon */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),

  /** folder or file name */
  filename: PropTypes.string,

  /** If a file name, you can specify the extension */
  extension: PropTypes.string,
  variant: PropTypes.string
};
Filename.defaultProps = {
  variant: 'h6'
};
export default Filename;