import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["onClick"];
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from "cozy-ui/transpiled/react/IconButton";
import Icon from "cozy-ui/transpiled/react/Icon";
import PreviousIcon from "cozy-ui/transpiled/react/Icons/Previous";
var styles = {
  "DialogCloseButton": "styles__DialogCloseButton___cxKPO",
  "DialogBackButton": "styles__DialogBackButton___1c7yH"
};
import locales from "cozy-ui/transpiled/react/CozyDialogs/locales";
import { createUseI18n } from "cozy-ui/transpiled/react/I18n";
var useI18n = createUseI18n(locales);

var DialogBackButton = function DialogBackButton(_ref) {
  var onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  return /*#__PURE__*/React.createElement("div", {
    className: styles.DialogBackButton
  }, /*#__PURE__*/React.createElement(IconButton, _extends({
    onClick: onClick
  }, props, {
    "aria-label": t('backButton'),
    className: "dialogIconButton",
    size: "medium"
  }), /*#__PURE__*/React.createElement(Icon, {
    icon: PreviousIcon
  })));
};

DialogBackButton.propTypes = {
  onClick: PropTypes.func.isRequired
};
export default DialogBackButton;