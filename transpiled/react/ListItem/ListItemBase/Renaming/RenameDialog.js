import React from 'react';
import PropTypes from 'prop-types';
import Button from "cozy-ui/transpiled/react/Buttons";
import { ConfirmDialog } from "cozy-ui/transpiled/react/CozyDialogs";
import { useI18n } from "cozy-ui/transpiled/react/I18n";
import withListItemLocales from "cozy-ui/transpiled/react/ListItem/hoc/withListItemLocales";

var RenameDialog = function RenameDialog(_ref) {
  var onSubmit = _ref.onSubmit,
      onCancel = _ref.onCancel;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  return /*#__PURE__*/React.createElement(ConfirmDialog, {
    open: true,
    title: t('ListItem.renameModal.title'),
    content: t('ListItem.renameModal.content'),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      label: t('ListItem.renameModal.cancel'),
      onClick: onCancel
    }), /*#__PURE__*/React.createElement(Button, {
      label: t('ListItem.renameModal.submit'),
      onClick: onSubmit
    })),
    onClose: onCancel
  });
};

RenameDialog.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};
export default withListItemLocales(RenameDialog);