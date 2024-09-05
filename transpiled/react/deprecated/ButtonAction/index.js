import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["type", "disabled", "children", "label", "leftIcon", "rightIcon", "compact", "className", "onClick"];
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
var styles = {
  "c-actionbtn": "styles__c-actionbtn___294nr",
  "c-actionbtn--compact": "styles__c-actionbtn--compact___3CFm-",
  "c-actionbtn--normal": "styles__c-actionbtn--normal___5JbA8",
  "c-actionbtn--error": "styles__c-actionbtn--error___3opWY",
  "c-actionbtn--new": "styles__c-actionbtn--new___2cPsw",
  "c-actionbtn-label": "styles__c-actionbtn-label___1BCiN",
  "c-actionbtn-icon": "styles__c-actionbtn-icon___1rgZf",
  "spin": "styles__spin___1m8O5",
  "shake": "styles__shake___3oZsU"
};
import Icon from "cozy-ui/transpiled/react/Icon";

var ButtonAction = function ButtonAction(props) {
  var _cx;

  var type = props.type,
      disabled = props.disabled,
      children = props.children,
      label = props.label,
      leftIcon = props.leftIcon,
      rightIcon = props.rightIcon,
      compact = props.compact,
      className = props.className,
      onClick = props.onClick,
      restProps = _objectWithoutProperties(props, _excluded);

  console.warn('ButtonAction is deprecated, please use either a Chip or a Button');
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    type: "button",
    role: "button",
    className: cx(styles['c-actionbtn'], (_cx = {}, _defineProperty(_cx, styles["c-actionbtn--".concat(type)], type), _defineProperty(_cx, styles["c-actionbtn--compact"], compact), _cx), className),
    onClick: onClick,
    title: compact ? label : undefined
  }, restProps), /*#__PURE__*/React.createElement("span", null, Icon.isProperIcon(leftIcon) ? /*#__PURE__*/React.createElement(Icon, {
    icon: leftIcon
  }) : leftIcon, label && /*#__PURE__*/React.createElement("span", {
    "data-action": "label",
    className: styles['c-actionbtn-label']
  }, label), rightIcon && /*#__PURE__*/React.createElement("span", {
    "data-action": "icon",
    className: styles['c-actionbtn-icon']
  }, Icon.isProperIcon(rightIcon) ? /*#__PURE__*/React.createElement(Icon, {
    icon: rightIcon
  }) : rightIcon), children));
};

ButtonAction.propTypes = {
  type: PropTypes.oneOf(['new', 'normal', 'error']).isRequired,
  label: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  disabled: PropTypes.bool,
  compact: PropTypes.bool
};
ButtonAction.defaultProps = {
  type: 'normal',
  disabled: false,
  compact: false
};
export default ButtonAction;