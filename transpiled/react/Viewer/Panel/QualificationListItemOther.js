import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { models } from 'cozy-client';
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemSecondaryAction from "cozy-ui/transpiled/react/ListItemSecondaryAction";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import Icon from "cozy-ui/transpiled/react/Icon";
import Dots from "cozy-ui/transpiled/react/Icons/Dots";
import QualificationListItemText from "cozy-ui/transpiled/react/Viewer/Panel/QualificationListItemText";
import { useI18n } from "cozy-ui/transpiled/react/I18n";
import MidEllipsis from "cozy-ui/transpiled/react/MidEllipsis";
var getBoundT = models.document.locales.getBoundT;
var QualificationListItemOther = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var formatedMetadataQualification = _ref.formatedMetadataQualification,
      toggleActionsMenu = _ref.toggleActionsMenu;

  var _useI18n = useI18n(),
      t = _useI18n.t,
      lang = _useI18n.lang;

  var scannerT = getBoundT(lang);
  var name = formatedMetadataQualification.name,
      value = formatedMetadataQualification.value;
  if (!value) return null;
  var currentValueTranslated = name === 'qualification' ? scannerT("Scan.items.".concat(value)) : t("Viewer.panel.qualification.".concat(value));
  return /*#__PURE__*/React.createElement(ListItem, {
    className: 'u-pl-2 u-pr-3'
  }, /*#__PURE__*/React.createElement(QualificationListItemText, {
    primary: t("Viewer.panel.qualification.".concat(name)),
    secondary: /*#__PURE__*/React.createElement(MidEllipsis, {
      text: currentValueTranslated
    })
  }), /*#__PURE__*/React.createElement(ListItemSecondaryAction, null, /*#__PURE__*/React.createElement(IconButton, {
    ref: ref,
    onClick: function onClick() {
      return toggleActionsMenu(currentValueTranslated);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Dots
  }))));
});
QualificationListItemOther.displayName = 'QualificationListItemOther';
QualificationListItemOther.propTypes = {
  formatedMetadataQualification: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  toggleActionsMenu: PropTypes.func.isRequired
};
export default QualificationListItemOther;