import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["busy", "disabled"],
    _excluded2 = ["children", "icon", "iconOnly", "label", "subtle", "className", "extension", "round", "size", "theme", "align", "extraRight", "tag"];
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
var styles = {
  "c-btn": "styles__c-btn___3kXsk",
  "c-btn--regular": "styles__c-btn--regular___1ilYT",
  "c-btn--ghost": "styles__c-btn--ghost___Md7mm",
  "c-btn--highlight": "styles__c-btn--highlight___GlDOj",
  "c-btn--alpha": "styles__c-btn--alpha___2-bRT",
  "c-btn--action": "styles__c-btn--action___3z98K",
  "c-btn--close": "styles__c-btn--close___C19bl",
  "c-btn--danger": "styles__c-btn--danger___wzHFo",
  "c-btn--secondary": "styles__c-btn--secondary___1hLVM",
  "c-btn--danger-outline": "styles__c-btn--danger-outline___BCng5",
  "c-btn--text": "styles__c-btn--text___33vmu",
  "c-btn--left": "styles__c-btn--left___3f1zH",
  "c-btn--center": "styles__c-btn--center___Nny0n",
  "c-btn--right": "styles__c-btn--right___1B9Tn",
  "c-btn--tiny": "styles__c-btn--tiny___fK37G",
  "c-btn--small": "styles__c-btn--small___9JKyq",
  "c-btn--large": "styles__c-btn--large___3PnsT",
  "c-btn--full": "styles__c-btn--full___1VumB",
  "c-btn--narrow": "styles__c-btn--narrow___erKsd",
  "c-btn--round": "styles__c-btn--round___35GfW",
  "c-btn--subtle": "styles__c-btn--subtle___2rRQ0",
  "spin": "styles__spin___3VrS0",
  "shake": "styles__shake___1yyjR"
};
import Icon, { iconPropType } from "cozy-ui/transpiled/react/Icon";
import SpinnerIcon from "cozy-ui/transpiled/react/Icons/Spinner";

var btnClass = function btnClass(options) {
  var _cx;

  var className = options.className,
      extension = options.extension,
      size = options.size,
      theme = options.theme,
      variant = options.variant,
      round = options.round,
      align = options.align;
  return cx(styles['c-btn'], (_cx = {}, _defineProperty(_cx, styles["c-btn--".concat(theme)], theme), _defineProperty(_cx, styles["c-btn--".concat(size)], size !== 'normal'), _defineProperty(_cx, styles["c-btn--".concat(variant)], variant), _defineProperty(_cx, styles["c-btn--".concat(extension)], extension), _defineProperty(_cx, styles["c-btn--".concat(align)], align), _defineProperty(_cx, styles["c-btn--round"], round), _cx), className);
};

var transformToAria = function transformToAria(tag) {
  return function (props) {
    var busy = props.busy,
        disabled = props.disabled,
        newProps = _objectWithoutProperties(props, _excluded);

    if (busy) {
      newProps['aria-busy'] = true;
    }

    if (disabled) {
      newProps['aria-disabled'] = true;
    }

    if (tag === 'button' && disabled) {
      newProps['disabled'] = true;
    }

    return newProps;
  };
};

var tagToTransformProps = {
  button: transformToAria('button'),
  a: transformToAria('a')
};

var identity = function identity(x) {
  return x;
};

var sizeToIconSize = {
  tiny: 8,
  small: 12,
  large: 18
};

var BaseButton = function BaseButton(props) {
  var children = props.children,
      icon = props.icon,
      iconOnly = props.iconOnly,
      label = props.label,
      subtle = props.subtle,
      className = props.className,
      extension = props.extension,
      round = props.round,
      size = props.size,
      theme = props.theme,
      align = props.align,
      extraRight = props.extraRight,
      Tag = props.tag,
      restProps = _objectWithoutProperties(props, _excluded2);

  var transformProps = tagToTransformProps[Tag] || identity;
  var tooltip = iconOnly ? label : null;
  var iconOnlyClass = iconOnly ? 'u-visuallyhidden' : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, transformProps(restProps), {
    className: btnClass({
      extension: extension,
      align: align,
      round: round,
      size: size,
      theme: theme,
      className: className,
      variant: subtle && 'subtle'
    }),
    title: tooltip
  }), /*#__PURE__*/React.createElement("span", null, Icon.isProperIcon(icon) ? /*#__PURE__*/React.createElement(Icon, {
    size: sizeToIconSize[size],
    icon: icon,
    "aria-hidden": true,
    focusable: "false"
  }) : icon, label && /*#__PURE__*/React.createElement("span", {
    className: iconOnlyClass
  }, label), children, extraRight && /*#__PURE__*/React.createElement("span", {
    className: "u-ml-auto"
  }, extraRight), restProps.busy && /*#__PURE__*/React.createElement(Icon, {
    size: sizeToIconSize[size],
    icon: SpinnerIcon,
    spin: true,
    className: "u-ml-half",
    "aria-hidden": true,
    focusable: "false"
  })));
};

var Button = function Button(props) {
  return /*#__PURE__*/React.createElement(BaseButton, props);
};

var ButtonLink = function ButtonLink(props) {
  return /*#__PURE__*/React.createElement(BaseButton, props);
};

export { Button, ButtonLink };

var DefaultButton = function DefaultButton(props) {
  if (!props.tag) {
    return /*#__PURE__*/React.createElement(Button, props);
  } else {
    return /*#__PURE__*/React.createElement(BaseButton, props);
  }
};

export default DefaultButton; // Proptypes (unfortunately, Styleguidist does not pick
// proptypes coming from a spread so we have to keep both
// proptypes in sync)

Button.propTypes = {
  /** DEPRECATED: please use label and icon */
  children: PropTypes.node,

  /** Label of the button */
  label: PropTypes.node.isRequired,

  /** Icon of the button */
  icon: PropTypes.oneOfType([PropTypes.node, iconPropType]),

  /** Displays only the icon, not the label */
  iconOnly: PropTypes.bool,
  theme: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'small', 'large', 'normal']),

  /** Spacing of the button */
  extension: PropTypes.oneOf(['narrow', 'full']),

  /** Button's label alignment */
  align: PropTypes.oneOf(['left', 'right', 'center']),

  /** Will make the button round */
  round: PropTypes.bool,

  /** Extra class */
  className: PropTypes.string,

  /** What to do on click */
  onClick: PropTypes.func,

  /** Adds an element to the right of the button */
  extraRight: PropTypes.PropTypes.node,
  // Only for Button

  /** Will display a spinner if true */
  busy: PropTypes.bool,

  /** Disables the button */
  disabled: PropTypes.bool,

  /** Type of the underlying `<button />` */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),

  /** Use the `subtle` alternative look for the Button  */
  subtle: PropTypes.bool
};
Button.defaultProps = {
  type: 'submit',
  tag: 'button',
  size: 'normal',
  align: 'center'
};
ButtonLink.defaultProps = {
  tag: 'a'
};