import PropTypes from 'prop-types';
import React, { memo } from 'react';
var en = {
  footer: {
    buttons: {
      cancel: "Cancel",
      confirm: "Select"
    }
  }
};
var fr = {
  footer: {
    buttons: {
      cancel: "Annuler",
      confirm: "S\xE9lectionner"
    }
  }
};
var ru = {
  footer: {
    buttons: {
      cancel: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
      confirm: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C"
    }
  }
};
var vi = {
  footer: {
    buttons: {
      cancel: "H\u1EE7y",
      confirm: "Ch\u1ECDn"
    }
  }
};
import Button from "cozy-ui/transpiled/react/deprecated/Button";
import { createUseI18n } from "cozy-ui/transpiled/react/providers/I18n";
var locales = {
  en: en,
  fr: fr,
  ru: ru,
  vi: vi
};
var useI18n = createUseI18n(locales);

var FilePickerFooter = function FilePickerFooter(_ref) {
  var onConfirm = _ref.onConfirm,
      onClose = _ref.onClose,
      disabledConfirm = _ref.disabledConfirm;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    "data-testid": "close-btn",
    label: t('footer.buttons.cancel'),
    theme: "secondary",
    onClick: onClose
  }), /*#__PURE__*/React.createElement(Button, {
    "data-testid": "confirm-btn",
    label: t('footer.buttons.confirm'),
    onClick: onConfirm,
    disabled: disabledConfirm
  }));
};

FilePickerFooter.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  disabledConfirm: PropTypes.bool.isRequired
};
export default /*#__PURE__*/memo(FilePickerFooter);