import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from "cozy-ui/transpiled/react/Icon";
import Typography from "cozy-ui/transpiled/react/Typography";
import { translate } from "cozy-ui/transpiled/react/I18n";
import SpinnerIcon from "cozy-ui/transpiled/react/Icons/Spinner";
var styles = {
  "c-spinner": "styles__c-spinner___1snK7",
  "c-spinner--middle": "styles__c-spinner--middle___RwyII",
  "c-spinner--nomargin": "styles__c-spinner--nomargin___13JyW",
  "spin": "styles__spin___3Lqkt",
  "shake": "styles__shake___6gnzB"
};
export var Spinner = function Spinner(_ref) {
  var _cx;

  var t = _ref.t,
      loadingType = _ref.loadingType,
      middle = _ref.middle,
      noMargin = _ref.noMargin,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className;
  var realsizeMapping = {
    tiny: 8,
    small: 12,
    medium: 16,
    large: 24,
    xlarge: 36,
    xxlarge: 80
  };
  var realsize = realsizeMapping[size];
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles['c-spinner'], (_cx = {}, _defineProperty(_cx, styles['c-spinner--middle'], middle), _defineProperty(_cx, styles['c-spinner--nomargin'], noMargin), _cx), className)
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: SpinnerIcon,
    color: color,
    spin: true,
    size: realsize
  }), loadingType && /*#__PURE__*/React.createElement(Typography, {
    variant: "body1",
    color: "textSecondary",
    component: "p"
  }, t("loading.".concat(loadingType))));
};
Spinner.propTypes = {
  loadingType: PropTypes.string,
  middle: PropTypes.bool,
  noMargin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  className: PropTypes.string
};
Spinner.defaultProps = {
  loadingType: '',
  middle: false,
  noMargin: false,
  color: 'var(--spinnerColor)',
  size: 'medium',
  className: ''
};
export default translate()(Spinner);