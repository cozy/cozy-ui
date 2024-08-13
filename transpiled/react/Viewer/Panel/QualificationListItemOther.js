import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { getTranslatedNameForOtherMetadata, formatOtherMetadataValue } from 'cozy-client/dist/models/paper';
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemSecondaryAction from "cozy-ui/transpiled/react/ListItemSecondaryAction";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import Icon from "cozy-ui/transpiled/react/Icon";
import Dots from "cozy-ui/transpiled/react/Icons/Dots";
import QualificationListItemText from "cozy-ui/transpiled/react/Viewer/Panel/QualificationListItemText";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import MidEllipsis from "cozy-ui/transpiled/react/MidEllipsis";
var QualificationListItemOther = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var formattedMetadataQualification = _ref.formattedMetadataQualification,
      toggleActionsMenu = _ref.toggleActionsMenu;

  var _useI18n = useI18n(),
      lang = _useI18n.lang;

  var name = formattedMetadataQualification.name,
      value = formattedMetadataQualification.value;
  if (!value) return null;
  var formattedTitle = getTranslatedNameForOtherMetadata(name, {
    lang: lang
  });
  var formattedValue = formatOtherMetadataValue(value, {
    lang: lang,
    name: name
  });
  return /*#__PURE__*/React.createElement(ListItem, {
    className: 'u-pl-2 u-pr-3'
  }, /*#__PURE__*/React.createElement(QualificationListItemText, {
    primary: formattedTitle,
    secondary: /*#__PURE__*/React.createElement(MidEllipsis, {
      text: formattedValue
    })
  }), /*#__PURE__*/React.createElement(ListItemSecondaryAction, null, /*#__PURE__*/React.createElement(IconButton, {
    ref: ref,
    onClick: function onClick() {
      return toggleActionsMenu(formattedValue);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Dots
  }))));
});
QualificationListItemOther.displayName = 'QualificationListItemOther';
QualificationListItemOther.propTypes = {
  formattedMetadataQualification: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  toggleActionsMenu: PropTypes.func.isRequired
};
export default QualificationListItemOther;