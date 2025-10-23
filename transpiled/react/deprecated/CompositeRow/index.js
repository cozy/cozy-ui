import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["style", "className", "primaryText", "primaryTextClassName", "secondaryTextClassName", "secondaryText", "image", "right", "actions", "dense"];
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
var styles = {
  "CompositeRow": "styles__CompositeRow___1Dmi2",
  "CompositeRow__dense": "styles__CompositeRow__dense___3p1f3",
  "CompositeRow__body": "styles__CompositeRow__body___1Bjsp"
};
import Typography from "cozy-ui/transpiled/react/Typography";
import { Media, Bd, Img } from "cozy-ui/transpiled/react/deprecated/Media";
var denseStyle = {
  height: '48px'
};
/**
 * A ready-made row layout for presenting rich information.
 *
 * @deprecated Please use [List](#/List)
 */

var CompositeRow = function CompositeRow(_ref) {
  var style = _ref.style,
      className = _ref.className,
      primaryText = _ref.primaryText,
      primaryTextClassName = _ref.primaryTextClassName,
      secondaryTextClassName = _ref.secondaryTextClassName,
      secondaryText = _ref.secondaryText,
      image = _ref.image,
      right = _ref.right,
      actions = _ref.actions,
      dense = _ref.dense,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Media, _extends({
    className: cx(className, styles.CompositeRow, dense ? styles.CompositeRow__dense : null),
    style: dense ? Object.assign({}, denseStyle, style) : style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "u-media u-media-grow u-row-m"
  }, image ? /*#__PURE__*/React.createElement(Img, {
    className: "u-flex-self-start"
  }, image) : null, /*#__PURE__*/React.createElement("div", {
    className: "u-media-grow u-stack-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "u-media u-row-m"
  }, /*#__PURE__*/React.createElement(Bd, {
    className: styles.CompositeRow__body
  }, /*#__PURE__*/React.createElement(Typography, {
    className: primaryTextClassName,
    variant: "body1"
  }, primaryText), secondaryText ? /*#__PURE__*/React.createElement(Typography, {
    className: secondaryTextClassName,
    variant: "caption",
    color: "textSecondary"
  }, secondaryText) : null), right), actions)));
};

CompositeRow.propTypes = {
  /** Custom CSS */
  style: PropTypes.object,

  /** Custom class */
  className: PropTypes.string,

  /** First line */
  primaryText: PropTypes.node,

  /** Second line */
  secondaryText: PropTypes.node,

  /** Controls the className of the primaryText node */
  primaryTextClassName: PropTypes.string,

  /** Controls the className of the secondaryText node */
  secondaryTextClassName: PropTypes.string,

  /** Image to the left of the row */
  image: PropTypes.node,

  /**
   * Actions are shown below primary and secondary texts. Pass fragment for multiple elements.
   * Good to use with Chips.
   */
  actions: PropTypes.node,

  /* Element(s) to the show to the right of the CompositeRow */
  right: PropTypes.node,

  /** Row height will be fixed to 48px */
  dense: PropTypes.bool
};
export default CompositeRow;