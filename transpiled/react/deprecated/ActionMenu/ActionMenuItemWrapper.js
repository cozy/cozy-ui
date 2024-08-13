import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from "cozy-ui/transpiled/react/styles";
import Typography from "cozy-ui/transpiled/react/Typography";
import Icon, { iconPropType } from "cozy-ui/transpiled/react/Icon";
import { ActionMenuItem } from "cozy-ui/transpiled/react/deprecated/ActionMenu";
var useStyles = makeStyles(function (theme) {
  return {
    disabledItem: {
      cursor: 'default',
      '&:hover': {
        backgroundColor: 'initial'
      }
    },
    disabledIcon: {
      fill: theme.palette.text.disabled
    },
    disabledTypography: {
      color: theme.palette.text.disabled
    }
  };
});

var ActionMenuItemWrapper = function ActionMenuItemWrapper(_ref) {
  var icon = _ref.icon,
      className = _ref.className,
      isEnabled = _ref.isEnabled,
      componentsProps = _ref.componentsProps,
      children = _ref.children,
      onClick = _ref.onClick;
  var styles = useStyles();
  return /*#__PURE__*/React.createElement(ActionMenuItem, {
    className: cx("u-flex-items-center ".concat(className), _defineProperty({}, styles.disabledItem, !isEnabled)),
    left: icon && /*#__PURE__*/React.createElement(Icon, _extends({
      icon: icon,
      className: cx(_defineProperty({}, styles.disabledIcon, !isEnabled))
    }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.iconProps)),
    onClick: onClick
  }, /*#__PURE__*/React.createElement(Typography, _extends({
    className: cx(_defineProperty({}, styles.disabledTypography, !isEnabled))
  }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.typographyProps), children));
};

ActionMenuItemWrapper.defaultProps = {
  className: '',
  isEnabled: true,
  componentsProps: {}
};
ActionMenuItemWrapper.propTypes = {
  icon: iconPropType,
  className: PropTypes.string,
  isEnabled: PropTypes.bool,
  componentsProps: PropTypes.shape({
    iconProps: PropTypes.object,
    typographyProps: PropTypes.object
  }),
  children: PropTypes.node,
  onClick: PropTypes.func
};
export default ActionMenuItemWrapper;