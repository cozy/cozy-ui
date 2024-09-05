import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["spaceBetween", "variant", "disabled", "noWrap", "color", "children", "innerTextProps", "innerIconContainerProps", "innerIconProps"];
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import Icon from "cozy-ui/transpiled/react/Icon";
import BottomIcon from "cozy-ui/transpiled/react/Icons/Bottom";
import Typography from "cozy-ui/transpiled/react/Typography";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var useStyles = makeStyles(function (theme) {
  return {
    container: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: function justifyContent(_ref) {
        var spaceBetween = _ref.spaceBetween;
        return spaceBetween ? 'space-between' : 'left';
      }
    },
    typography: {
      color: function color(_ref2) {
        var disabled = _ref2.disabled;
        return theme.palette.text[disabled ? 'disabled' : 'primary'];
      }
    },
    endIcon: {
      display: 'flex',
      marginLeft: '5px',
      marginTop: function marginTop(_ref3) {
        var variant = _ref3.variant;
        return variant === 'body1' ? '3px' : undefined;
      },
      color: function color(_ref4) {
        var disabled = _ref4.disabled;
        return theme.palette.text[disabled ? 'disabled' : 'primary'];
      }
    }
  };
});
var endIconSizeByVariant = {
  h1: 24,
  h2: 17,
  h3: 15,
  h4: 14,
  h5: 13,
  h6: 12,
  body1: 12,
  body2: 11,
  caption: 10,
  subtitle1: 11,
  subtitle2: 10
};
var DropdownText = /*#__PURE__*/forwardRef(function (_ref5, ref) {
  var _ref5$spaceBetween = _ref5.spaceBetween,
      spaceBetween = _ref5$spaceBetween === void 0 ? false : _ref5$spaceBetween,
      _ref5$variant = _ref5.variant,
      variant = _ref5$variant === void 0 ? 'body1' : _ref5$variant,
      _ref5$disabled = _ref5.disabled,
      disabled = _ref5$disabled === void 0 ? false : _ref5$disabled,
      _ref5$noWrap = _ref5.noWrap,
      noWrap = _ref5$noWrap === void 0 ? false : _ref5$noWrap,
      _ref5$color = _ref5.color,
      color = _ref5$color === void 0 ? 'primary' : _ref5$color,
      children = _ref5.children,
      innerTextProps = _ref5.innerTextProps,
      innerIconContainerProps = _ref5.innerIconContainerProps,
      innerIconProps = _ref5.innerIconProps,
      props = _objectWithoutProperties(_ref5, _excluded);

  var styles = useStyles({
    spaceBetween: spaceBetween,
    disabled: disabled,
    color: color,
    variant: variant
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: styles.container
  }, props), /*#__PURE__*/React.createElement(Typography, _extends({
    classes: {
      root: styles.typography
    },
    variant: variant,
    noWrap: noWrap
  }, innerTextProps), children), /*#__PURE__*/React.createElement(Typography, _extends({
    classes: {
      root: styles.endIcon
    }
  }, innerIconContainerProps), /*#__PURE__*/React.createElement(Icon, _extends({
    icon: BottomIcon,
    size: endIconSizeByVariant[variant]
  }, innerIconProps))));
});
DropdownText.propTypes = {
  /** Whether there is a space between the label and the icon */
  spaceBetween: PropTypes.bool,

  /** Variant used by Typography component */
  variant: PropTypes.string,

  /** Whether the component is disabled */
  disabled: PropTypes.bool,

  /** Whether using ellipsis on text */
  noWrap: PropTypes.bool,

  /** Props passed to the text */
  innerTextProps: PropTypes.object,

  /** Props passed to the icon container */
  innerIconContainerProps: PropTypes.object,

  /** Props passed to the icon */
  innerIconProps: PropTypes.object,
  children: PropTypes.node
};
export default DropdownText;