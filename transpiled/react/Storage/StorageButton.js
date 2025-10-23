import cx from 'classnames';
import React from 'react';
import { useInstanceInfo } from 'cozy-client';
import { buildPremiumLink } from 'cozy-client/dist/models/instance';
import { locales } from "cozy-ui/transpiled/react/Storage/locales";
import Button from "cozy-ui/transpiled/react/Buttons";
import Icon from "cozy-ui/transpiled/react/Icon";
import TwakeWorkplaceIcon from "cozy-ui/transpiled/react/Icons/TwakeWorkplace";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";

var StorageButton = function StorageButton(_ref) {
  var className = _ref.className;
  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var instanceInfo = useInstanceInfo();
  return /*#__PURE__*/React.createElement(Button, {
    className: cx('u-bdrs-4', className),
    variant: "secondary",
    label: t('Storage.increase'),
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      icon: TwakeWorkplaceIcon,
      size: 22
    }),
    size: "small",
    height: "auto",
    fullWidth: true,
    component: "a",
    target: "_blank",
    href: buildPremiumLink(instanceInfo)
  });
};

export default StorageButton;