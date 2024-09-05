import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "label", "variant", "disabled", "fullWidth", "aria-label", "children"];
import PropTypes from 'prop-types';
import React from 'react';
import { makeTypoColor, makeButtonShadow } from "cozy-ui/transpiled/react/CircleButton/helpers";
import Box from "cozy-ui/transpiled/react/Box";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import Typography from "cozy-ui/transpiled/react/Typography";
import { getRandomUUID } from "cozy-ui/transpiled/react/helpers/getRandomUUID";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var useStyles = makeStyles(function (theme) {
  return {
    iconButton: {
      margin: '0 auto',
      boxShadow: function boxShadow(_ref) {
        var active = _ref.active,
            disabled = _ref.disabled;
        return makeButtonShadow({
          theme: theme,
          active: active,
          disabled: disabled
        });
      },
      backgroundColor: function backgroundColor(_ref2) {
        var active = _ref2.active;
        return active ? theme.palette.primary.main : 'transparent';
      },
      color: function color(_ref3) {
        var active = _ref3.active;
        return active ? theme.palette.primary.contrastText : theme.palette.text.icon;
      },
      '&:hover': {
        backgroundColor: function backgroundColor(_ref4) {
          var active = _ref4.active;
          return active ? theme.palette.primary.dark : theme.palette.action.hover;
        },
        '@media (hover: none)': {
          backgroundColor: function backgroundColor(_ref5) {
            var active = _ref5.active;
            return active ? theme.palette.primary.main : 'transparent';
          }
        }
      }
    },
    typography: {
      marginTop: '0.25rem',
      color: function color(_ref6) {
        var active = _ref6.active,
            disabled = _ref6.disabled;
        return makeTypoColor({
          theme: theme,
          active: active,
          disabled: disabled
        });
      }
    }
  };
});

var CircleButton = function CircleButton(_ref7) {
  var className = _ref7.className,
      label = _ref7.label,
      _ref7$variant = _ref7.variant,
      variant = _ref7$variant === void 0 ? 'default' : _ref7$variant,
      disabled = _ref7.disabled,
      _ref7$fullWidth = _ref7.fullWidth,
      fullWidth = _ref7$fullWidth === void 0 ? false : _ref7$fullWidth,
      ariaLabel = _ref7['aria-label'],
      children = _ref7.children,
      props = _objectWithoutProperties(_ref7, _excluded);

  var styles = useStyles({
    active: variant === 'active',
    disabled: disabled
  });
  var uuid = getRandomUUID();

  if (!ariaLabel && !label) {
    console.warn("The \"aria-label\" or \"label\" property must be filled in.");
  }

  return /*#__PURE__*/React.createElement(Box, {
    className: className,
    display: "inline-flex",
    flexDirection: "column",
    flexGrow: fullWidth ? 1 : undefined,
    minWidth: "64px",
    flexBasis: "64px",
    padding: "8px 0 4px 0"
  }, /*#__PURE__*/React.createElement(IconButton, _extends({
    className: styles.iconButton,
    disabled: disabled
  }, ariaLabel ? {
    'aria-label': ariaLabel
  } : {
    'aria-labelledby': uuid
  }, props), children), label && /*#__PURE__*/React.createElement(Typography, _extends({
    component: "div",
    className: styles.typography,
    variant: "caption",
    align: "center",
    noWrap: true
  }, !ariaLabel && {
    id: uuid
  }), label));
};

CircleButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf(['default', 'active']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool
};
export default CircleButton;