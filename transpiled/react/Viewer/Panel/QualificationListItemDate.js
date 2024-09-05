import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { isExpired, isExpiringSoon, getTranslatedNameForDateMetadata, formatDateMetadataValue } from 'cozy-client/dist/models/paper';
import QualificationListItemText from "cozy-ui/transpiled/react/Viewer/Panel/QualificationListItemText";
import Icon from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import Dots from "cozy-ui/transpiled/react/Icons/Dots";
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemSecondaryAction from "cozy-ui/transpiled/react/ListItemSecondaryAction";
import Typography from "cozy-ui/transpiled/react/Typography";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import ExpirationAnnotation from "cozy-ui/transpiled/react/Viewer/components/ExpirationAnnotation";
var QualificationListItemDate = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var file = _ref.file,
      formattedMetadataQualification = _ref.formattedMetadataQualification,
      toggleActionsMenu = _ref.toggleActionsMenu;

  var _useI18n = useI18n(),
      f = _useI18n.f,
      lang = _useI18n.lang;

  var name = formattedMetadataQualification.name,
      value = formattedMetadataQualification.value;
  var formattedTitle = getTranslatedNameForDateMetadata(name, {
    lang: lang
  });
  var formattedDate = formatDateMetadataValue(value, {
    f: f,
    lang: lang
  });
  var isExpirationDate = name === 'expirationDate';
  return /*#__PURE__*/React.createElement(ListItem, {
    className: "u-pl-2 u-pr-3"
  }, /*#__PURE__*/React.createElement(QualificationListItemText, {
    primary: formattedTitle,
    secondary: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
      component: "span",
      variant: "inherit"
    }, formattedDate), isExpirationDate && (isExpired(file) || isExpiringSoon(file)) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
      component: "span",
      variant: "inherit"
    }, ' · '), /*#__PURE__*/React.createElement(ExpirationAnnotation, {
      file: file
    }))),
    disabled: !value
  }), /*#__PURE__*/React.createElement(ListItemSecondaryAction, null, /*#__PURE__*/React.createElement(IconButton, {
    ref: ref,
    onClick: function onClick() {
      return toggleActionsMenu(formattedDate);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Dots
  }))));
});
QualificationListItemDate.displayName = 'QualificationListItemDate';
QualificationListItemDate.propTypes = {
  file: PropTypes.object.isRequired,
  formattedMetadataQualification: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  toggleActionsMenu: PropTypes.func.isRequired
};
export default QualificationListItemDate;