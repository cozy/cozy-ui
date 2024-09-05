import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "variant", "severity", "children", "direction", "position"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { AlertPropTypes, AlertDefaultProps } from "cozy-ui/transpiled/react/Alert";
import Alert from "cozy-ui/transpiled/react/Alert";
import { makeAlertBackgroundColor } from "cozy-ui/transpiled/react/MuiCozyTheme/helpers";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var useStyles = makeStyles(function (theme) {
  return {
    topArrow: {
      // create the arrow
      borderLeft: '0.75rem solid transparent',
      borderRight: '0.75rem solid transparent',
      borderBottom: function borderBottom(_ref) {
        var variant = _ref.variant,
            severity = _ref.severity;
        return "0.75rem solid ".concat(makeAlertBackgroundColor({
          theme: theme,
          severity: severity
        })[variant]);
      },
      // position the arrow
      position: 'absolute',
      top: '-0.75rem',
      left: function left(_ref2) {
        var position = _ref2.position;
        return position;
      },
      marginLeft: '-0.75rem'
    },
    bottomArrow: {
      // create the arrow
      borderLeft: '0.75rem solid transparent',
      borderRight: '0.75rem solid transparent',
      borderTop: function borderTop(_ref3) {
        var variant = _ref3.variant,
            severity = _ref3.severity;
        return "0.75rem solid ".concat(makeAlertBackgroundColor({
          theme: theme,
          severity: severity
        })[variant]);
      },
      // position the arrow
      position: 'absolute',
      bottom: '-0.75rem',
      left: function left(_ref4) {
        var position = _ref4.position;
        return position;
      },
      marginLeft: '-0.75rem'
    },
    leftArrow: {
      // create the arrow
      borderTop: '0.75rem solid transparent',
      borderBottom: '0.75rem solid transparent',
      borderRight: function borderRight(_ref5) {
        var variant = _ref5.variant,
            severity = _ref5.severity;
        return "0.75rem solid ".concat(makeAlertBackgroundColor({
          theme: theme,
          severity: severity
        })[variant]);
      },
      // position the arrow
      position: 'absolute',
      left: '-0.75rem',
      top: function top(_ref6) {
        var position = _ref6.position;
        return position;
      },
      marginTop: '-0.75rem'
    },
    rightArrow: {
      // create the arrow
      borderTop: '0.75rem solid transparent',
      borderBottom: '0.75rem solid transparent',
      borderLeft: function borderLeft(_ref7) {
        var variant = _ref7.variant,
            severity = _ref7.severity;
        return "0.75rem solid ".concat(makeAlertBackgroundColor({
          theme: theme,
          severity: severity
        })[variant]);
      },
      // position the arrow
      position: 'absolute',
      right: '-0.75rem',
      top: function top(_ref8) {
        var position = _ref8.position;
        return position;
      },
      marginTop: '-0.75rem'
    },
    topAlert: {
      marginTop: '0.75rem'
    },
    bottomAlert: {
      marginBottom: '0.75rem'
    },
    leftAlert: {
      marginLeft: '0.75rem'
    },
    rightAlert: {
      marginRight: '0.75rem'
    }
  };
});
var PointerAlert = /*#__PURE__*/forwardRef(function (_ref9, ref) {
  var className = _ref9.className,
      variant = _ref9.variant,
      severity = _ref9.severity,
      children = _ref9.children,
      direction = _ref9.direction,
      position = _ref9.position,
      props = _objectWithoutProperties(_ref9, _excluded);

  var styles = useStyles({
    variant: variant,
    severity: severity,
    position: position
  });
  return /*#__PURE__*/React.createElement(Alert, _extends({
    ref: ref,
    className: cx(className, styles["".concat(direction, "Alert")], 'u-pos-relative'),
    variant: variant,
    severity: severity
  }, props), children, /*#__PURE__*/React.createElement("span", {
    className: styles["".concat(direction, "Arrow")]
  }));
});
PointerAlert.displayName = 'PointerAlert';
PointerAlert.propTypes = _objectSpread(_objectSpread({}, AlertPropTypes), {}, {
  /** Direction of the arrow.*/
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /** Position of the arrow. Can be any length or percentage value like "100px" or "30%".
   * If you want to position the arrow on the edge, you need to pay attention to the arrow width.
   * For example, "calc(0% + 0.75rem)" will position the arrow at the starting edge. */
  position: PropTypes.string
});
PointerAlert.defaultProps = _objectSpread(_objectSpread({}, AlertDefaultProps), {}, {
  direction: 'bottom',
  position: '50%'
});
export default PointerAlert;