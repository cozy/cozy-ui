import React, { forwardRef } from 'react';
import Button from "cozy-ui/transpiled/react/Buttons";
import Icon from "cozy-ui/transpiled/react/Icon";
import Typography from "cozy-ui/transpiled/react/Typography";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var useDesktopStyles = makeStyles({
  root: {
    border: 'none !important',
    // to force also on disabled status
    '&:hover': {
      border: 'none'
    }
  }
});
var useMobileStyles = makeStyles({
  root: {
    display: 'block',
    height: '100%',
    flex: '1 1 0',
    padding: 0,
    border: 'none !important',
    // to force also when disabled
    '&:hover': {
      border: 'none'
    }
  },
  label: {
    textTransform: 'none'
  },
  startIcon: {
    marginRight: 0,
    marginBottom: 2
  }
});
var ResponsiveAction = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var action = _ref.action,
      disabled = _ref.disabled,
      onClick = _ref.onClick;

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  var useStyles = isMobile ? useMobileStyles : useDesktopStyles;
  var styles = useStyles();
  return /*#__PURE__*/React.createElement(Button, {
    ref: ref,
    classes: styles,
    variant: "secondary",
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      icon: action.icon
    }),
    label: isMobile ? /*#__PURE__*/React.createElement(Typography, {
      variant: "caption",
      color: disabled ? 'inherit' : 'textPrimary'
    }, action.label) : action.label,
    disabled: disabled,
    onClick: onClick
  });
});
ResponsiveAction.displayName = 'ResponsiveAction';
export default ResponsiveAction;