import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["icon", "width", "height", "color", "style", "className", "preserveColor", "rotate", "size", "spin"];
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
var styles = {
  "icon--spin": "styles__icon--spin___ybfC1",
  "spin": "styles__spin___2Vvw3",
  "icon": "styles__icon___23x3R",
  "icon--preserveColor": "styles__icon--preserveColor___3gBz6",
  "shake": "styles__shake___wT_3z"
};
var DEFAULT_SIZE = '16';

function makeSvgObject(icon) {
  var anchor;

  if (icon.id) {
    anchor = "#".concat(icon.id);
  } else if (icon[0] === '#') {
    anchor = icon;
  } else {
    anchor = '#' + icon;
  }

  if (!anchor) {
    console.warn("Icon not found ".concat(icon, "."));
    return null;
  }

  return function (props) {
    return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("use", {
      xlinkHref: anchor
    }));
  };
}

function isFunction(obj) {
  return obj instanceof Function;
}

function Icon(props) {
  var icon = props.icon,
      width = props.width,
      height = props.height,
      color = props.color,
      style = props.style,
      className = props.className,
      preserveColor = props.preserveColor,
      rotate = props.rotate,
      size = props.size,
      spin = props.spin,
      restProps = _objectWithoutProperties(props, _excluded);

  if (!icon) return null;
  var isIconComp = icon.type === Icon;
  if (isIconComp) return icon;
  var Svg = isFunction(icon) ? icon : makeSvgObject(icon);
  var selfStyle = style;
  selfStyle = Object.assign({}, selfStyle);

  if (color) {
    selfStyle['fill'] = color;
  }

  if (rotate) {
    selfStyle['transform'] = "rotate(".concat(rotate, "deg)");
  }

  var iconClassName = preserveColor ? 'icon--preserveColor' : 'icon';
  var iconClass = cx(className, styles[iconClassName], _defineProperty({}, styles['icon--spin'], spin));
  return Svg ? /*#__PURE__*/React.createElement(Svg, _extends({
    className: iconClass,
    style: selfStyle,
    width: width || size || DEFAULT_SIZE,
    height: height || size || DEFAULT_SIZE
  }, restProps)) : null;
}

Icon.isProperIcon = function (icon) {
  var isSvgSymbol = icon && !!icon.id;
  var isIconIdentifier = typeof icon === 'string';
  var isSvgr = isFunction(icon);
  return isSvgSymbol || isIconIdentifier || isSvgr;
};

export var iconPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]);
Icon.propTypes = {
  icon: iconPropType,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  className: PropTypes.string,
  preserveColor: PropTypes.bool,

  /** Shorthand for both width and height */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rotate: PropTypes.number,
  spin: PropTypes.bool
};
Icon.defaultProps = {
  spin: false
};
export default Icon;