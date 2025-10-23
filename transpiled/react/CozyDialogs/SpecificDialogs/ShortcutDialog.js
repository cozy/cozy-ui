import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { checkAndSaveShortcut, makeHumanReadableFileName } from "cozy-ui/transpiled/react/CozyDialogs/SpecificDialogs/helpers/shortcuts";
import withSpecificDialogsLocales from "cozy-ui/transpiled/react/CozyDialogs/SpecificDialogs/withSpecificDialogsLocales";
import { ConfirmDialog } from "cozy-ui/transpiled/react/CozyDialogs";
import Button from "cozy-ui/transpiled/react/Buttons";
import Stack from "cozy-ui/transpiled/react/Stack";
import TextField from "cozy-ui/transpiled/react/TextField";
import { useAlert } from "cozy-ui/transpiled/react/providers/Alert";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
var ENTER_KEY = 13;

var ShortcutDialog = function ShortcutDialog(_ref) {
  var shortcut = _ref.shortcut,
      onSave = _ref.onSave,
      onClose = _ref.onClose;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _useAlert = useAlert(),
      showAlert = _useAlert.showAlert;

  var initialName = makeHumanReadableFileName((shortcut === null || shortcut === void 0 ? void 0 : shortcut.name) || '');
  var initialUrl = (shortcut === null || shortcut === void 0 ? void 0 : shortcut.url) || '';
  var isEditing = !!shortcut;

  var _useState = useState(initialName),
      _useState2 = _slicedToArray(_useState, 2),
      fileName = _useState2[0],
      setFilename = _useState2[1];

  var _useState3 = useState(initialUrl),
      _useState4 = _slicedToArray(_useState3, 2),
      url = _useState4[0],
      setUrl = _useState4[1];

  var saveShortcut = function saveShortcut() {
    checkAndSaveShortcut({
      fileName: fileName,
      url: url,
      isEditing: isEditing,
      onSave: onSave,
      onClose: onClose,
      showAlert: showAlert,
      t: t
    });
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === ENTER_KEY) {
      saveShortcut();
    }
  };

  return /*#__PURE__*/React.createElement(ConfirmDialog, {
    open: true,
    title: isEditing ? t('shortcut-dialog.edit-title') : t('shortcut-dialog.create-title'),
    onClose: onClose,
    content: /*#__PURE__*/React.createElement(Stack, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextField, {
      label: t('shortcut-dialog.url'),
      value: url,
      id: "shortcuturl",
      variant: "outlined",
      onChange: function onChange(e) {
        return setUrl(e.target.value);
      },
      onKeyDown: function onKeyDown(e) {
        return handleKeyDown(e);
      },
      autoComplete: "off",
      fullWidth: true,
      margin: "normal",
      autoFocus: true
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextField, {
      label: t('shortcut-dialog.filename'),
      value: fileName,
      id: "shortcutfilename",
      variant: "outlined",
      onChange: function onChange(e) {
        return setFilename(e.target.value);
      },
      onKeyDown: function onKeyDown(e) {
        return handleKeyDown(e);
      },
      autoComplete: "off",
      fullWidth: true,
      margin: "normal"
    }))),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onClose,
      label: t('shortcut-dialog.cancel')
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      label: isEditing ? t('shortcut-dialog.edit') : t('shortcut-dialog.create'),
      onClick: saveShortcut
    }))
  });
};

ShortcutDialog.propTypes = {
  /** An io.cozy.files.shortcut object if we want to prefill fields */
  shortcut: PropTypes.object,

  /** A function called when clicking the save button with filename and url */
  onSave: PropTypes.func,

  /** A function called when clicking the close button */
  onClose: PropTypes.func
};
ShortcutDialog.displayName = 'ShortcutDialog';
export default withSpecificDialogsLocales(ShortcutDialog);