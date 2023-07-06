import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemSecondaryAction from "cozy-ui/transpiled/react/ListItemSecondaryAction";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import Icon from "cozy-ui/transpiled/react/Icon";
import Dots from "cozy-ui/transpiled/react/Icons/Dots";
import QualificationListItemText from "cozy-ui/transpiled/react/Viewer/Panel/QualificationListItemText";
import Spinner from "cozy-ui/transpiled/react/Spinner";
import useReferencedContactName from "cozy-ui/transpiled/react/Viewer/hooks/useReferencedContactName";
import { useI18n } from "cozy-ui/transpiled/react/I18n";
import ActionMenuWrapper from "cozy-ui/transpiled/react/Viewer/Panel/ActionMenuWrapper";

var QualificationListItemContact = function QualificationListItemContact(_ref) {
  var file = _ref.file;

  var _useI18n = useI18n(),
      t = _useI18n.t;

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
      contactName = _useReferencedContact.contactName,
      isLoadingContacts = _useReferencedContact.isLoadingContacts;

  if (isLoadingContacts) {
    return /*#__PURE__*/React.createElement(ListItem, {
      className: 'u-pl-2 u-pr-3'
    }, /*#__PURE__*/React.createElement(Spinner, {
      color: "var(--secondaryTextColor)"
    }));
  }

  if (!isLoadingContacts && !contactName) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ListItem, {
    className: 'u-ph-2'
  }, /*#__PURE__*/React.createElement(QualificationListItemText, {
    primary: t('Viewer.panel.qualification.contact'),
    secondary: contactName
  }), /*#__PURE__*/React.createElement(ListItemSecondaryAction, null, /*#__PURE__*/React.createElement(IconButton, {
    ref: actionBtnRef,
    onClick: function onClick() {
      return toggleActionsMenu('contact', contactName);
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