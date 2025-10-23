import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["spaceBetween", "textVariant", "disabled", "fullWidth", "noWrap", "children", "className", "dropdownTextProps"];
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import DropdownText from "cozy-ui/transpiled/react/DropdownText";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var useStyles = makeStyles({
  root: {
    height: 'auto',
    width: function width(_ref) {
      var fullWidth = _ref.fullWidth,
          noWrap = _ref.noWrap;
      return fullWidth || noWrap ? "calc(100% + 16px)" : 'auto';
    },
    margin: '-8px',
    padding: '8px'
  },
  text: {
    textTransform: 'none',
    textAlign: 'left'
  }
});
var DropdownButton = /*#__PURE__*/forwardRef(function (_ref2, ref) {
  var spaceBetween = _ref2.spaceBetween,
      textVariant = _ref2.textVariant,
      disabled = _ref2.disabled,
      fullWidth = _ref2.fullWidth,
      noWrap = _ref2.noWrap,
      children = _ref2.children,
      className = _ref2.className,
      dropdownTextProps = _ref2.dropdownTextProps,
      props = _objectWithoutProperties(_ref2, _excluded);

  var _useStyles = useStyles({
    fullWidth: fullWidth,
    noWrap: noWrap
  }),
      root = _useStyles.root,
      text = _useStyles.text;

  return /*#__PURE__*/React.createElement(Button, _extends({
    ref: ref,
    classes: {
      root: root,
      text: text
    },
    disabled: disabled,
    className: className
  }, props), /*#__PURE__*/React.createElement(DropdownText, _extends({
    variant: textVariant,
    spaceBetween: spaceBetween,
    disabled: disabled,
    noWrap: noWrap
  }, dropdownTextProps), children));
});
DropdownButton.defaultProps = {
  spaceBetween: false,
  textVariant: 'body1',
  disabled: false,
  fullWidth: false,
  noWrap: false
};
DropdownButton.propTypes = {
  /** Whether there is a space between the label and the icon */
  spaceBetween: PropTypes.bool,

  /** Like variant from Typography component */
  textVariant: PropTypes.string,

  /** Whether the component is disabled */
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,

  /** Whether using ellipsis on text */
  noWrap: PropTypes.bool,

  /** Props assigned to the DropdownText inner component */
  dropdownTextProps: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
};
export default DropdownButton;