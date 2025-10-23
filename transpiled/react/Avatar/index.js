import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "color", "size", "border", "innerBorder", "disabled", "display"];
import AvatarMui from '@material-ui/core/Avatar';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { colorMapping, supportedColors, nameToColor } from "cozy-ui/transpiled/react/Avatar/helpers";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
import { capitalize } from "cozy-ui/transpiled/react/utils/index";
var useStyles = makeStyles(function (theme) {
  return {
    root: {
      width: function width(_ref) {
        var size = _ref.size;
        return size;
      },
      height: function height(_ref2) {
        var size = _ref2.size;
        return size;
      },
      fontSize: function fontSize(_ref3) {
        var size = _ref3.size;
        return size / 2;
      }
    },
    colorDefault: {
      color: function color(_ref4) {
        var _color = _ref4.color;
        return _color ? theme.palette.primary.contrastText : '';
      },
      background: function background(_ref5) {
        var color = _ref5.color;
        return colorMapping[color];
      }
    }
  };
});

var Avatar = function Avatar(_ref6) {
  var _cx;

  var className = _ref6.className,
      color = _ref6.color,
      size = _ref6.size,
      border = _ref6.border,
      innerBorder = _ref6.innerBorder,
      disabled = _ref6.disabled,
      display = _ref6.display,
      props = _objectWithoutProperties(_ref6, _excluded);

  var isCustomSize = typeof size === 'number';
  var defaultColor = typeof props.children === 'string' ? nameToColor(props.children) : undefined;
  var classes = useStyles({
    size: isCustomSize ? size : undefined,
    color: color === 'none' ? undefined : supportedColors.includes(color) ? color : defaultColor
  });
  return /*#__PURE__*/React.createElement(AvatarMui, _extends({
    classes: classes,
    className: cx(className, (_cx = {}, _defineProperty(_cx, "size-".concat(size), !isCustomSize), _defineProperty(_cx, "disabled", !!disabled), _defineProperty(_cx, "border", !!border), _defineProperty(_cx, "display".concat(capitalize(display)), display !== 'initial'), _defineProperty(_cx, "innerBorder", !!innerBorder), _cx))
  }, props));
};

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']), PropTypes.number]),
  color: PropTypes.oneOf([].concat(_toConsumableArray(supportedColors), ['none'])),

  /** Controls the display type */
  display: PropTypes.oneOf(['initial', 'inline']),
  disabled: PropTypes.bool
};
Avatar.defaultProps = {
  display: 'initial',
  size: 'm'
};
export default Avatar;