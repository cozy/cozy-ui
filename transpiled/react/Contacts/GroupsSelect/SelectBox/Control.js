import _extends from "@babel/runtime/helpers/extends";
import PropTypes from 'prop-types';
import React from 'react';
import Button from "cozy-ui/transpiled/react/Buttons";
import Icon from "cozy-ui/transpiled/react/Icon";
import BottomSelectIcon from "cozy-ui/transpiled/react/Icons/BottomSelect";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";
import { locales } from "cozy-ui/transpiled/react/Contacts/GroupsSelect/locales";

var Control = function Control(_ref) {
  var innerRef = _ref.innerRef,
      innerProps = _ref.innerProps,
      onControlClicked = _ref.selectProps.onControlClicked;
  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  return /*#__PURE__*/React.createElement("div", _extends({
    ref: innerRef
  }, innerProps), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small",
    onClick: onControlClicked,
    onTouchStart: onControlClicked,
    label: t('Contacts.GroupsSelect.manage'),
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      icon: BottomSelectIcon,
      width: "12"
    })
  }));
};

Control.propTypes = {
  selectProps: PropTypes.object.isRequired
};
export default Control;