import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "classes", "icon", "severity", "block", "color", "square", "action", "variant", "children"];
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import merge from 'lodash/merge';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from "cozy-ui/transpiled/react/styles";
import Icon from "cozy-ui/transpiled/react/Icon";
import CheckCircleIcon from "cozy-ui/transpiled/react/Icons/CheckCircle";
import WarningIcon from "cozy-ui/transpiled/react/Icons/Warning";
import WarningCircleIcon from "cozy-ui/transpiled/react/Icons/WarningCircle";
import InfoIcon from "cozy-ui/transpiled/react/Icons/Info";
var DEFAULT_ICON_SIZE = 16;
var defaultIconMapping = {
  success: /*#__PURE__*/React.createElement(Icon, {
    icon: CheckCircleIcon
  }),
  warning: /*#__PURE__*/React.createElement(Icon, {
    icon: WarningIcon
  }),
  error: /*#__PURE__*/React.createElement(Icon, {
    icon: WarningCircleIcon
  }),
  info: /*#__PURE__*/React.createElement(Icon, {
    icon: InfoIcon
  })
};

var makeIcon = function makeIcon(icon, severity) {
  // used to remove icon
  if (icon === false) {
    return false;
  }

  return icon || ['primary', 'secondary'].includes(severity) && /*#__PURE__*/React.createElement(Icon, {
    icon: InfoIcon
  }) || undefined;
};

var useStyles = makeStyles({
  message: {
    maxWidth: function maxWidth(_ref) {
      var block = _ref.block,
          iconSize = _ref.iconSize;
      return block && "calc(100% - ".concat(iconSize, "px - 12px)");
    }
  }
});
var Alert = /*#__PURE__*/forwardRef(function (_ref2, ref) {
  var _icon$props;

  var className = _ref2.className,
      classes = _ref2.classes,
      icon = _ref2.icon,
      severity = _ref2.severity,
      block = _ref2.block,
      color = _ref2.color,
      square = _ref2.square,
      action = _ref2.action,
      variant = _ref2.variant,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, _excluded);

  var madeSeverity = ['primary', 'secondary'].includes(severity) ? 'success' : severity;
  var madeIcon = makeIcon(icon, severity);
  var iconSize = (icon === null || icon === void 0 ? void 0 : (_icon$props = icon.props) === null || _icon$props === void 0 ? void 0 : _icon$props.size) || DEFAULT_ICON_SIZE;
  var styles = useStyles({
    iconSize: iconSize,
    block: block
  });
  return /*#__PURE__*/React.createElement(MuiAlert, _extends({
    ref: ref,
    style: {
      backgroundColor: color,
      borderRadius: square && 0
    },
    className: cx(className, "cozyAlert-".concat(severity, "-").concat(variant), {
      block: block
    }, {
      action: Boolean(action)
    }),
    classes: merge(styles, classes),
    variant: variant,
    severity: madeSeverity,
    iconMapping: defaultIconMapping,
    icon: madeIcon,
    action: action
  }, props), children);
});
Alert.displayName = 'Alert';
Alert.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
  severity: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info']),
  block: PropTypes.bool,
  color: PropTypes.string,
  square: PropTypes.bool,
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled'])
};
Alert.defaultProps = {
  severity: 'primary',
  block: false,
  square: false,
  variant: 'standard'
};
export default Alert;