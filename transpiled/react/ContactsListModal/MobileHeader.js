import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import CozyTheme from "cozy-ui/transpiled/react/CozyTheme";
import Icon from "cozy-ui/transpiled/react/Icon";
import PreviousIcon from "cozy-ui/transpiled/react/Icons/Previous";
import Paper from "cozy-ui/transpiled/react/Paper";
import IconButton from "cozy-ui/transpiled/react/IconButton";
var barStyle = {
  height: 48
};

var MobileHeader = function MobileHeader(_ref) {
  var filter = _ref.filter,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      onDismiss = _ref.onDismiss;
  return /*#__PURE__*/React.createElement(CozyTheme, {
    variant: "inverted"
  }, /*#__PURE__*/React.createElement(Paper, {
    square: true,
    elevation: 0,
    className: "u-flex u-flex-items-center u-pr-3 u-pl-half",
    style: barStyle
  }, /*#__PURE__*/React.createElement(IconButton, {
    className: "u-mr-half",
    onClick: onDismiss,
    size: "medium"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: PreviousIcon
  })), /*#__PURE__*/React.createElement(Input, {
    type: "text",
    placeholder: placeholder,
    id: placeholder,
    value: filter,
    onChange: onChange,
    autoFocus: true,
    fullWidth: true,
    disableUnderline: true
  })));
};

MobileHeader.propTypes = {
  filter: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onDismiss: PropTypes.func
};
export default MobileHeader;