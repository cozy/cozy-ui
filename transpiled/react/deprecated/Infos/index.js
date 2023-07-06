import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
var _excluded = ["title", "text", "icon", "actionButton", "isImportant"];
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import CrossIcon from "cozy-ui/transpiled/react/Icons/Cross";
import Stack from "cozy-ui/transpiled/react/Stack";
import Typography from "cozy-ui/transpiled/react/Typography";
import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
var styles = {
  "Infos": "styles__Infos___tpCYh",
  "Infos--primary": "styles__Infos--primary____iqfw",
  "Infos--secondary": "styles__Infos--secondary___2rlHM",
  "Infos--danger": "styles__Infos--danger___1HWww",
  "Infos-description": "styles__Infos-description___3q8sW",
  "Info-close": "styles__Info-close___EnUCb"
};
export var Infos = function Infos(_ref) {
  var description = _ref.description,
      action = _ref.action,
      dismissAction = _ref.dismissAction,
      dismissButtonProps = _ref.dismissButtonProps,
      theme = _ref.theme,
      className = _ref.className;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles['Infos'], styles["Infos--".concat(theme)], className)
  }, /*#__PURE__*/React.createElement(Stack, {
    spacing: "m"
  }, /*#__PURE__*/React.createElement("div", {
    className: styles['Infos-description']
  }, /*#__PURE__*/React.createElement(Stack, {
    spacing: "xs"
  }, description)), action && /*#__PURE__*/React.createElement("div", null, action)), dismissAction && /*#__PURE__*/React.createElement("div", {
    className: styles['Info-close']
  }, /*#__PURE__*/React.createElement(IconButton, _extends({
    size: "medium",
    onClick: dismissAction
  }, dismissButtonProps), /*#__PURE__*/React.createElement(Icon, {
    icon: CrossIcon,
    size: "12"
  }))));
};
Infos.propTypes = {
  /** The textual part of the info, including titles */
  description: PropTypes.element.isRequired,

  /** One or more call to actions */
  action: PropTypes.element,

  /** If supplied, displays a cross in the top right corner that calls the prop when clicked */
  dismissAction: PropTypes.func,

  /** Extra classnames to apply to the root element */
  className: PropTypes.string,

  /** Controls the background color of the component */
  theme: PropTypes.oneOf(['primary', 'secondary', 'danger']),

  /** Props for dismiss button */
  dismissButtonProps: PropTypes.object
};
Infos.defaultProps = {
  theme: 'primary'
};
var logInfosDepecrated = createDepreciationLogger();
var InfosMigration = /*#__PURE__*/React.memo(function InfosMigration(props) {
  var isUsingDeprecatedProps = props.actionButton || props.icon || props.isImportant || props.text || props.title;

  if (isUsingDeprecatedProps) {
    var title = props.title,
        text = props.text,
        icon = props.icon,
        actionButton = props.actionButton,
        isImportant = props.isImportant,
        otherProps = _objectWithoutProperties(props, _excluded);

    logInfosDepecrated('The Infos component API has changed, using any of the following props is deprecated: title, text, icon, actionButton, isImportant');
    return /*#__PURE__*/React.createElement(Infos, _extends({
      className: "u-maw-6",
      theme: isImportant ? 'danger' : 'secondary',
      description: /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement(Typography, {
        variant: "h5",
        className: cx({
          'u-error': isImportant
        })
      }, title), /*#__PURE__*/React.createElement("div", {
        className: cx('u-flex', 'u-w-100')
      }, icon && /*#__PURE__*/React.createElement(Icon, {
        icon: icon,
        className: cx(styles['Infos__icon'], 'u-w-1', 'u-h-1', 'u-flex-shrink-0')
      }), text && /*#__PURE__*/React.createElement(Typography, {
        variant: "body1",
        className: cx(_defineProperty({}, 'u-pl-half', icon !== null))
      }, text))),
      action: actionButton
    }, otherProps));
  } else return /*#__PURE__*/React.createElement(Infos, props);
});
export default InfosMigration;