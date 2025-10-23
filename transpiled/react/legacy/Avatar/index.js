import cx from 'classnames';
import assign from 'lodash/assign';
import PropTypes from 'prop-types';
import React from 'react';
import { nameToColor } from "cozy-ui/transpiled/react/legacy/Avatar/helpers";
var styles = {
  "c-avatar": "styles__c-avatar___3jjlO",
  "c-avatar-image": "styles__c-avatar-image___UhZDi",
  "c-avatar--xsmall": "styles__c-avatar--xsmall___3Hc22",
  "c-avatar--small": "styles__c-avatar--small___2oZc6",
  "c-avatar--large": "styles__c-avatar--large___3eKYs",
  "c-avatar--xlarge": "styles__c-avatar--xlarge___1KzNe",
  "c-avatar-initials": "styles__c-avatar-initials___2dEdT",
  "c-avatar--text": "styles__c-avatar--text___3Xssl",
  "c-avatar--disabled": "styles__c-avatar--disabled___3rlUN",
  "c-avatar--image": "styles__c-avatar--image___2GZnA",
  "c-avatar--ghost": "styles__c-avatar--ghost___3aaZ2"
};
import { createSizeStyle } from "cozy-ui/transpiled/react/Circle";
import Icon, { iconPropType } from "cozy-ui/transpiled/react/Icon";
import PeopleIcon from "cozy-ui/transpiled/react/Icons/People";

var createBgColorStyle = function createBgColorStyle(_ref) {
  var text = _ref.text,
      textId = _ref.textId;
  return text ? {
    background: "".concat(nameToColor(textId || text))
  } : {};
};

export var Avatar = function Avatar(_ref2) {
  var text = _ref2.text,
      textId = _ref2.textId,
      image = _ref2.image,
      size = _ref2.size,
      className = _ref2.className,
      style = _ref2.style,
      disabled = _ref2.disabled,
      ghost = _ref2.ghost,
      icon = _ref2.icon;
  var sizeStyle = createSizeStyle(size);
  var bgColorStyle = createBgColorStyle({
    text: text,
    textId: textId
  });
  var avatarStyle = assign(bgColorStyle, sizeStyle, style);
  var IconToRender = Icon.isProperIcon(icon) ? /*#__PURE__*/React.createElement(Icon, {
    icon: icon
  }) : icon;
  return /*#__PURE__*/React.createElement("div", {
    "data-testid": "Avatar" // used by a test in cozy-contacts
    ,
    className: cx(styles['c-avatar'], text ? styles['c-avatar--text'] : '', image ? styles['c-avatar--image'] : '', disabled ? styles['c-avatar--disabled'] : '', ghost ? styles['c-avatar--ghost'] : '', className),
    style: avatarStyle
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    className: styles['c-avatar-image'],
    alt: ""
  }), !image && text && /*#__PURE__*/React.createElement("span", {
    className: styles['c-avatar-initials']
  }, text), !image && !text && IconToRender);
};
Avatar.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), PropTypes.number]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.node, iconPropType]),
  ghost: PropTypes.bool,
  style: PropTypes.object
};
Avatar.defaultProps = {
  text: '',
  image: '',
  size: 'medium',
  className: '',
  disabled: false,
  icon: PeopleIcon,
  ghost: false,
  style: {}
};
export default Avatar;