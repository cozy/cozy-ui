import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["icon", "label", "isSelected", "onClick"];
import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from "cozy-ui/transpiled/react/ButtonBase";
import Icon, { iconPropType } from "cozy-ui/transpiled/react/Icon";
import FileDuotoneIcon from "cozy-ui/transpiled/react/Icons/FileDuotone";
import IconStack from "cozy-ui/transpiled/react/IconStack";
import Typography from "cozy-ui/transpiled/react/Typography";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var useStyles = makeStyles({
  item: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 84,
    marginBottom: 8,
    borderRadius: 4,
    borderColor: function borderColor(_ref) {
      var isSelected = _ref.isSelected;
      return isSelected ? 'var(--primaryColor)' : 'var(--borderMainColor)';
    },
    border: '1px solid'
  }
});

var QualificationItem = function QualificationItem(_ref2) {
  var icon = _ref2.icon,
      label = _ref2.label,
      isSelected = _ref2.isSelected,
      onClick = _ref2.onClick,
      props = _objectWithoutProperties(_ref2, _excluded);

  var styles = useStyles({
    isSelected: isSelected
  });
  return /*#__PURE__*/React.createElement(ButtonBase, _extends({}, props, {
    className: styles.item,
    onClick: onClick
  }), /*#__PURE__*/React.createElement(IconStack, {
    className: "u-mb-half",
    foreground: icon && /*#__PURE__*/React.createElement(Icon, {
      icon: icon,
      color: isSelected ? 'var(--primaryColor)' : 'var(--secondaryTextColor)'
    }),
    background: /*#__PURE__*/React.createElement(Icon, {
      icon: FileDuotoneIcon,
      size: "32",
      color: isSelected ? 'var(--primaryColor)' : 'var(--secondaryTextColor)'
    })
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "caption"
  }, label));
};

QualificationItem.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.node, iconPropType]),
  label: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
};
export default QualificationItem;