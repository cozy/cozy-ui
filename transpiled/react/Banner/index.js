import _defineProperty from "@babel/runtime/helpers/defineProperty";
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
var styles = {
  "c-banner-wrapper": "styles__c-banner-wrapper___3KlaG",
  "c-banner-icon": "styles__c-banner-icon___1f_LM",
  "c-banner-text": "styles__c-banner-text___1sTVC",
  "c-banner-buttons": "styles__c-banner-buttons___3sLgG"
};
import Divider from "cozy-ui/transpiled/react/Divider";
import Grid from "cozy-ui/transpiled/react/Grid";
import Paper from "cozy-ui/transpiled/react/Paper";
import Typography from "cozy-ui/transpiled/react/Typography";
/**
 * A banner displays a prominent message and related optional actions.
 */

var Banner = function Banner(_ref) {
  var icon = _ref.icon,
      bgcolor = _ref.bgcolor,
      className = _ref.className,
      text = _ref.text,
      buttonOne = _ref.buttonOne,
      buttonTwo = _ref.buttonTwo,
      inline = _ref.inline,
      disableIconStyles = _ref.disableIconStyles;
  var position = {
    row: [8, 4],
    column: [12, 12]
  };
  var size = inline ? position.row : position.column;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Paper, {
    elevation: 0,
    square: true
  }, /*#__PURE__*/React.createElement("div", {
    className: cx(styles['c-banner-wrapper'], className),
    style: bgcolor && {
      backgroundColor: bgcolor
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    item: true,
    xs: 12,
    lg: size[0],
    alignItems: disableIconStyles ? 'flex-start' : 'center',
    wrap: "nowrap"
  }, icon && /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement("div", {
    className: cx(_defineProperty({}, styles['c-banner-icon'], !disableIconStyles))
  }, icon)), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    className: styles['c-banner-text']
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body2"
  }, text))), (buttonOne || buttonTwo) && /*#__PURE__*/React.createElement(Grid, {
    container: true,
    item: true,
    xs: 12,
    lg: size[1],
    justifyContent: "flex-end",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    className: styles['c-banner-buttons']
  }, buttonOne && buttonOne, buttonTwo && buttonTwo))))), /*#__PURE__*/React.createElement(Divider, null));
};

Banner.propTypes = {
  /** Image to the left of the row */
  icon: PropTypes.node,

  /** Custom background color */
  bgcolor: PropTypes.string,

  /** Text inside the banner */
  text: PropTypes.node,

  /** Button to be displayed first, the left one */
  buttonOne: PropTypes.node,

  /** Button to be displayed in second, the right one */
  buttonTwo: PropTypes.node,

  /** Show banner on one line (only desktop) */
  inline: PropTypes.bool,

  /** Disables the styles of the wrapper around the icon */
  disableIconWrapper: PropTypes.bool
};
export default Banner;