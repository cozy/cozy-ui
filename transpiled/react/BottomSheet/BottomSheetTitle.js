import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BottomSheetItem } from "cozy-ui/transpiled/react/BottomSheet";
import Icon, { iconPropType } from "cozy-ui/transpiled/react/Icon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import List from "cozy-ui/transpiled/react/List";
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import Typography from "cozy-ui/transpiled/react/Typography";
var BottomSheetTitle = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var className = _ref.className,
      label = _ref.label,
      icon = _ref.icon;

  if (icon) {
    return /*#__PURE__*/React.createElement(BottomSheetItem, {
      disableGutters: true,
      disableElevation: true
    }, /*#__PURE__*/React.createElement(List, {
      ref: ref
    }, /*#__PURE__*/React.createElement(ListItem, null, /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
      icon: icon,
      size: 32
    })), /*#__PURE__*/React.createElement(ListItemText, {
      primary: /*#__PURE__*/React.createElement(Typography, {
        className: "u-ellipsis",
        variant: "h6"
      }, label)
    }))));
  }

  return /*#__PURE__*/React.createElement(BottomSheetItem, {
    disableElevation: true
  }, /*#__PURE__*/React.createElement(Typography, {
    ref: ref,
    className: cx('u-flex u-flex-justify-center', className),
    variant: "h6"
  }, label));
});
BottomSheetTitle.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  icon: iconPropType
};
export default BottomSheetTitle;