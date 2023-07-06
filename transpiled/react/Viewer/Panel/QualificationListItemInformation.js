import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { getBoundT } from 'cozy-client/dist/models/document/locales';
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemSecondaryAction from "cozy-ui/transpiled/react/ListItemSecondaryAction";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import Icon from "cozy-ui/transpiled/react/Icon";
import Dots from "cozy-ui/transpiled/react/Icons/Dots";
import QualificationListItemText from "cozy-ui/transpiled/react/Viewer/Panel/QualificationListItemText";
import { useI18n } from "cozy-ui/transpiled/react/I18n";
import MidEllipsis from "cozy-ui/transpiled/react/MidEllipsis";
export var makeInformationValue = function makeInformationValue(_ref) {
  var name = _ref.name,
      value = _ref.value,
      t = _ref.t,
      scannerT = _ref.scannerT;

  if (typeof value !== 'number' && !value) {
    return t('Viewer.panel.qualification.noInfo');
  }

  if (name === 'noticePeriod') {
    return "".concat(value, " ").concat(t('Viewer.panel.qualification.information.day', {
      smart_count: value
    }));
  }

  if (name === 'contractType') {
    return scannerT("Scan.attributes.contractType.".concat(value), {
      _: value
    });
  }

  if (name === 'refTaxIncome') {
    return "".concat(value, " \u20AC");
  }

  return /*#__PURE__*/React.createElement(MidEllipsis, {
    text: "".concat(value)
  });
};
var QualificationListItemInformation = /*#__PURE__*/forwardRef(function (_ref2, ref) {
  var formatedMetadataQualification = _ref2.formatedMetadataQualification,
      file = _ref2.file,
      toggleActionsMenu = _ref2.toggleActionsMenu;

  var _useI18n = useI18n(),
      t = _useI18n.t,
      lang = _useI18n.lang;

  var scannerT = getBoundT(lang);
  var name = formatedMetadataQualification.name,
      value = formatedMetadataQualification.value;
  var qualificationLabel = file.metadata.qualification.label;
  var currentValue = makeInformationValue({
    name: name,
    value: value,
    t: t,
    scannerT: scannerT
  });
  var title = name === 'number' ? t("Viewer.panel.qualification.information.title.".concat(qualificationLabel, ".").concat(name)) : t("Viewer.panel.qualification.information.title.".concat(name));
  return /*#__PURE__*/React.createElement(ListItem, {
    className: 'u-pl-2 u-pr-3'
  }, /*#__PURE__*/React.createElement(QualificationListItemText, {
    primary: title,
    secondary: currentValue,
    disabled: !value
  }), /*#__PURE__*/React.createElement(ListItemSecondaryAction, null, /*#__PURE__*/React.createElement(IconButton, {
    ref: ref,
    onClick: function onClick() {
      return toggleActionsMenu(value);
    },
    "data-testid": "toggleActionsMenuBtn"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Dots
  }))));
});
QualificationListItemInformation.displayName = 'QualificationListItemNumber';
QualificationListItemInformation.propTypes = {
  formatedMetadataQualification: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired,
  toggleActionsMenu: PropTypes.func.isRequired
};
export default QualificationListItemInformation;