import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "classes", "icon", "severity", "block", "color", "square", "action", "variant", "style", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import MuiAlert from '@material-ui/lab/Alert';
import cx from 'classnames';
import merge from 'lodash/merge';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import Icon from "cozy-ui/transpiled/react/Icon";
import CheckCircleIcon from "cozy-ui/transpiled/react/Icons/CheckCircle";
import InfoIcon from "cozy-ui/transpiled/react/Icons/Info";
import WarningIcon from "cozy-ui/transpiled/react/Icons/Warning";
import WarningCircleIcon from "cozy-ui/transpiled/react/Icons/WarningCircle";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
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
      style = _ref2.style,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, _excluded);

  // as primary and secondary doesn't exist on Mui Alert, we force success severity for those
  var madeSeverity = ['primary', 'secondary'].includes(severity) ? 'success' : severity;
  var madeIcon = makeIcon(icon, severity);
  var iconSize = (icon === null || icon === void 0 ? void 0 : (_icon$props = icon.props) === null || _icon$props === void 0 ? void 0 : _icon$props.size) || DEFAULT_ICON_SIZE;
  var styles = useStyles({
    iconSize: iconSize,
    block: block
  });
  /*
  When this component is the child of Snackbar, MUI injects a `style` prop
  (https://github.com/mui/material-ui/blob/bda562b435a70e3e8f6d7fb04581c6816a5ba0c7/packages/material-ui/src/Snackbar/Snackbar.js#L235
  =>
  https://github.com/mui/material-ui/blob/1e80616d3dde536227af56d49f91b28f830bd33c/packages/mui-material/src/Grow/Grow.js #L193), our styles are overwritten.
  */

  var computedStyles = _objectSpread({
    backgroundColor: color,
    borderRadius: square && 0
  }, style);

  return /*#__PURE__*/React.createElement(MuiAlert, _extends({
    ref: ref,
    style: computedStyles,
    className: cx(className, "cozyStyles-".concat(severity, "-").concat(variant), {
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
/**
 * @typedef {Object} AlertProps
 * @property {string} className - Classname of the alert
 * @property {React.FC<PropTypes.InferProps<typeof Icon.propTypes>>|false} icon - Icon component to display in the alert (or false to hide it)
 * @property {'primary'|'secondary'|'success'|'error'|'warning'|'info'} severity - Severity of the alert (default: primary)
 * @property {boolean} block - Block the alert to the full width of its container (default: false)
 * @property {string} color - Background color of the alert
 * @property {boolean} square - Square the alert corners (default: false)
 * @property {'standard'|'outlined'|'filled'} variant - Variant of the alert (default: standard)
 */

export var AlertPropTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
  severity: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info']),
  block: PropTypes.bool,
  color: PropTypes.string,
  square: PropTypes.bool,
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled'])
};
export var AlertDefaultProps = {
  severity: 'primary',
  block: false,
  square: false,
  variant: 'standard'
};
Alert.propTypes = AlertPropTypes;
Alert.defaultProps = AlertDefaultProps;
export default Alert;