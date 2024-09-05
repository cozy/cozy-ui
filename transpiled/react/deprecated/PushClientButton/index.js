import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
var styles = {
  "c-btn-client": "styles__c-btn-client___2ZSQt",
  "spin": "styles__spin____eAxl",
  "shake": "styles__shake___3jgtg"
};
import Icon from "cozy-ui/transpiled/react/Icon";
import DeviceLaptopIcon from "cozy-ui/transpiled/react/Icons/DeviceLaptop";

var ButtonClient = function ButtonClient(props) {
  var label = props.label,
      href = props.href,
      onClick = props.onClick,
      className = props.className,
      icon = props.icon;
  return /*#__PURE__*/React.createElement("a", {
    href: href // eslint-disable-next-line react/jsx-no-target-blank
    ,
    target: "_blank",
    className: cx(styles['c-btn-client'], className),
    onClick: onClick,
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement(Icon, {
    icon: icon || DeviceLaptopIcon,
    size: "32"
  })), /*#__PURE__*/React.createElement("span", null, label));
};

ButtonClient.propTypes = {
  /** Button's label */
  label: PropTypes.string.isRequired,

  /** Button's hyperlink */
  href: PropTypes.string.isRequired,

  /** Custom classNames to apply to the component */
  className: PropTypes.string,

  /** Function `onClick` to be called on top of the hyperlink */
  onClick: PropTypes.func,

  /** Custom icon to display. If undefined then DeviceLaptop is used as default icon */
  icon: PropTypes.elementType
};
ButtonClient.defaultProps = {
  className: ''
};
export default ButtonClient;