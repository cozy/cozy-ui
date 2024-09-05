import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { getTranslatedNameForContact, formatContactValue } from 'cozy-client/dist/models/paper';
import ActionMenuWrapper from "cozy-ui/transpiled/react/Viewer/Panel/ActionMenuWrapper";
import QualificationListItemText from "cozy-ui/transpiled/react/Viewer/Panel/QualificationListItemText";
import Icon from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import Dots from "cozy-ui/transpiled/react/Icons/Dots";
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemSecondaryAction from "cozy-ui/transpiled/react/ListItemSecondaryAction";
import Spinner from "cozy-ui/transpiled/react/Spinner";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import useReferencedContactName from "cozy-ui/transpiled/react/Viewer/hooks/useReferencedContactName";

var QualificationListItemContact = function QualificationListItemContact(_ref) {
  var file = _ref.file;

  var _useI18n = useI18n(),
      lang = _useI18n.lang;

  var actionBtnRef = useRef();

  var _useState = useState({
    name: '',
    value: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      optionFile = _useState2[0],
      setOptionFile = _useState2[1];

  var hideActionsMenu = function hideActionsMenu() {
    return setOptionFile({
      name: '',
      value: ''
    });
  };

  var toggleActionsMenu = function toggleActionsMenu(name, value) {
    return setOptionFile(function (prev) {
      if (prev.value) return {
        name: '',
        value: ''
      };
      return {
        name: name,
        value: value
      };
    });
  };

  var _useReferencedContact = useReferencedContactName(file),
      contacts = _useReferencedContact.contacts,
      isLoadingContacts = _useReferencedContact.isLoadingContacts;

  if (isLoadingContacts) {
    return /*#__PURE__*/React.createElement(ListItem, {
      className: "u-pl-2 u-pr-3"
    }, /*#__PURE__*/React.createElement(Spinner, {
      color: "var(--secondaryTextColor)"
    }));
  }

  var formattedTitle = getTranslatedNameForContact({
    lang: lang
  });
  var formattedValue = formatContactValue(contacts);

  if (!isLoadingContacts && !formattedValue) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ListItem, {
    className: "u-ph-2"
  }, /*#__PURE__*/React.createElement(QualificationListItemText, {
    primary: formattedTitle,
    secondary: formattedValue
  }), /*#__PURE__*/React.createElement(ListItemSecondaryAction, null, /*#__PURE__*/React.createElement(IconButton, {
    ref: actionBtnRef,
    onClick: function onClick() {
      return toggleActionsMenu('contact', formattedValue);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Dots
  })))), optionFile.value && /*#__PURE__*/React.createElement(ActionMenuWrapper, {
    onClose: hideActionsMenu,
    file: file,
    optionFile: optionFile,
    ref: actionBtnRef
  }));
};

QualificationListItemContact.propTypes = {
  file: PropTypes.object.isRequired
};
export default QualificationListItemContact;