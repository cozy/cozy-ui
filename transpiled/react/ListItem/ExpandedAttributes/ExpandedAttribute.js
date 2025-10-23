import PropTypes from 'prop-types';
import React from 'react';
import { copyToClipboard } from "cozy-ui/transpiled/react/ListItem/ExpandedAttributes/helpers";
import Icon from "cozy-ui/transpiled/react/Icon";
import CopyIcon from "cozy-ui/transpiled/react/Icons/Copy";
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import Typography from "cozy-ui/transpiled/react/Typography";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";

var ExpandedAttribute = function ExpandedAttribute(_ref) {
  var label = _ref.label,
      value = _ref.value,
      setAlertProps = _ref.setAlertProps;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  return /*#__PURE__*/React.createElement(ListItem, {
    className: "u-pl-2",
    button: true,
    onClick: copyToClipboard({
      value: value,
      setAlertProps: setAlertProps,
      t: t
    })
  }, /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
    icon: CopyIcon
  })), /*#__PURE__*/React.createElement(ListItemText, {
    primary: /*#__PURE__*/React.createElement(Typography, {
      variant: "caption"
    }, label),
    secondary: /*#__PURE__*/React.createElement(Typography, {
      variant: "body2"
    }, value)
  }));
};

ExpandedAttribute.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setAlertProps: PropTypes.func
};
export default ExpandedAttribute;