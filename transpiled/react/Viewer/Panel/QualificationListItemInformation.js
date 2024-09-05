import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { getTranslatedNameForInformationMetadata, formatInformationMetadataValue } from 'cozy-client/dist/models/paper';
import QualificationListItemText from "cozy-ui/transpiled/react/Viewer/Panel/QualificationListItemText";
import Icon from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import Dots from "cozy-ui/transpiled/react/Icons/Dots";
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemSecondaryAction from "cozy-ui/transpiled/react/ListItemSecondaryAction";
import MidEllipsis from "cozy-ui/transpiled/react/MidEllipsis";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
var QualificationListItemInformation = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var formattedMetadataQualification = _ref.formattedMetadataQualification,
      file = _ref.file,
      toggleActionsMenu = _ref.toggleActionsMenu;

  var _useI18n = useI18n(),
      lang = _useI18n.lang;

  var name = formattedMetadataQualification.name,
      value = formattedMetadataQualification.value;
  var qualificationLabel = file.metadata.qualification.label;
  var formattedTitle = getTranslatedNameForInformationMetadata(name, {
    lang: lang,
    qualificationLabel: qualificationLabel
  });
  var formattedValue = formatInformationMetadataValue(value, {
    lang: lang,
    name: name,
    qualificationLabel: qualificationLabel
  });
  var titleComponent = formattedTitle === name ? /*#__PURE__*/React.createElement(MidEllipsis, {
    text: name
  }) : formattedTitle;
  return /*#__PURE__*/React.createElement(ListItem, {
    className: "u-pl-2 u-pr-3"
  }, /*#__PURE__*/React.createElement(QualificationListItemText, {
    primary: titleComponent,
    secondary: formattedValue,
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
  formattedMetadataQualification: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired,
  toggleActionsMenu: PropTypes.func.isRequired
};
export default QualificationListItemInformation;