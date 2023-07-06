import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { models } from 'cozy-client';
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemSecondaryAction from "cozy-ui/transpiled/react/ListItemSecondaryAction";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import Icon from "cozy-ui/transpiled/react/Icon";
import Dots from "cozy-ui/transpiled/react/Icons/Dots";
import Typography from "cozy-ui/transpiled/react/Typography";
import ExpirationAnnotation from "cozy-ui/transpiled/react/Viewer/components/ExpirationAnnotation";
import QualificationListItemText from "cozy-ui/transpiled/react/Viewer/Panel/QualificationListItemText";
import { useI18n } from "cozy-ui/transpiled/react/I18n";
import { formatDate } from "cozy-ui/transpiled/react/Viewer/helpers";
var _models$paper = models.paper,
    isExpired = _models$paper.isExpired,
    isExpiringSoon = _models$paper.isExpiringSoon;
var QualificationListItemDate = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var file = _ref.file,
      formatedMetadataQualification = _ref.formatedMetadataQualification,
      toggleActionsMenu = _ref.toggleActionsMenu;

  var _useI18n = useI18n(),
      t = _useI18n.t,
      f = _useI18n.f,
      lang = _useI18n.lang;

  var name = formatedMetadataQualification.name,
      value = formatedMetadataQualification.value;
  var formattedDate = value ? formatDate({
    f: f,
    lang: lang,
    date: value
  }) : t('Viewer.panel.qualification.noInfo');
  var isExpirationDate = name === 'expirationDate';
  return /*#__PURE__*/React.createElement(ListItem, {
    className: 'u-pl-2 u-pr-3'
  }, /*#__PURE__*/React.createElement(QualificationListItemText, {
    primary: t("Viewer.panel.qualification.date.title.".concat(name)),
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
  formatedMetadataQualification: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  toggleActionsMenu: PropTypes.func.isRequired
};
export default QualificationListItemDate;