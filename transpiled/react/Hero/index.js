import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children"];
import React from 'react';
var styles = {
  "Hero": "styles__Hero___14z7_",
  "Hero-title": "styles__Hero-title___256Uz",
  "Hero-subtitle": "styles__Hero-subtitle___1E_WG",
  "Hero-sections": "styles__Hero-sections___ETV6e",
  "Hero-section": "styles__Hero-section___1BcNz",
  "Hero-cta": "styles__Hero-cta___2KhwU"
};
import BaseIcon from "cozy-ui/transpiled/react/Icon";
import { mkComponent } from "cozy-ui/transpiled/react/utils"; // Cannot use mkComponent since it is not picked up by styleguidist

export var Hero = function Hero(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: styles.Hero
  }), children);
};
export default Hero;
export var Title = mkComponent('h2', {
  className: styles['Hero-title']
});
export var Subtitle = mkComponent('h3', {
  className: styles['Hero-subtitle']
});
export var Section = mkComponent('div', {
  className: styles['Hero-section']
});
export var Sections = mkComponent('div', {
  className: styles['Hero-sections']
});
export var Paragraph = mkComponent('p', {});
export var CTA = mkComponent('p', {
  className: styles['Hero-cta']
});
export var Icon = function Icon(_ref2) {
  var color = _ref2.color,
      icon = _ref2.icon;
  return /*#__PURE__*/React.createElement(BaseIcon, {
    width: 80,
    height: 80,
    style: {
      color: color
    },
    icon: icon
  });
};
Hero.Title = Title;
Hero.Icon = Icon;
Hero.Subtitle = Subtitle;
Hero.Section = Section;
Hero.Sections = Sections;
Hero.Paragraph = Paragraph;
Hero.CTA = CTA;