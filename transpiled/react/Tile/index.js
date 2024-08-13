import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "className", "tag", "isSecondary"];
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Typography from "cozy-ui/transpiled/react/Typography";
var styles = {
  "Tile": "styles__Tile___2SqRi",
  "Tile-secondary": "styles__Tile-secondary___2zYdn",
  "Tile-icon-wrapper": "styles__Tile-icon-wrapper___24AzZ",
  "Tile-desc": "styles__Tile-desc___3lPj6",
  "Tile-title": "styles__Tile-title___3gbq-",
  "Tile-developer": "styles__Tile-developer___2GOfB",
  "Tile-status": "styles__Tile-status___33VkE",
  "Tile-title-multiline": "styles__Tile-title-multiline___17HPx",
  "Tile-status-accent": "styles__Tile-status-accent___an9au"
};

var Tile = function Tile(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Tag = _ref.tag,
      isSecondary = _ref.isSecondary,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cx(styles.Tile, _defineProperty({}, styles['Tile-secondary'], isSecondary), className)
  }, props), children);
};

export var TileDescription = function TileDescription(_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles['Tile-desc'], className)
  }, children);
};
export var TileTitle = function TileTitle(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      isMultiline = _ref3.isMultiline;
  return /*#__PURE__*/React.createElement(Typography, {
    variant: "h6",
    className: cx(styles['Tile-title'], _defineProperty({}, styles['Tile-title-multiline'], isMultiline), className)
  }, children);
};
export var TileSubtitle = function TileSubtitle(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/React.createElement(Typography, {
    variant: "caption",
    className: styles['Tile-developer']
  }, children);
};
export var TileFooter = function TileFooter(_ref5) {
  var children = _ref5.children,
      className = _ref5.className,
      isAccent = _ref5.isAccent;
  return /*#__PURE__*/React.createElement(Typography, {
    variant: "caption",
    className: cx(styles['Tile-status'], _defineProperty({}, styles['Tile-status-accent'], isAccent), className)
  }, children);
};
export var TileIcon = function TileIcon(_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles['Tile-icon-wrapper']
  }, children);
};
TileTitle.propTypes = {
  className: PropTypes.string,
  isMultiline: PropTypes.bool
};
TileTitle.defaultProps = {
  isMultiline: false
};
TileFooter.propTypes = {
  className: PropTypes.string,
  isAccent: PropTypes.bool
};
TileFooter.defaultProps = {
  isAccent: false
};
Tile.propTypes = {
  className: PropTypes.string,
  isSecondary: PropTypes.bool,
  tag: PropTypes.string
};
Tile.defaultProps = {
  isSecondary: false,
  tag: 'div'
};
export default Tile;