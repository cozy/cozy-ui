import React from 'react';
import Button from "cozy-ui/transpiled/react/Buttons";
import { withContactsListLocales } from "cozy-ui/transpiled/react/ContactsListModal/withContactsListLocales";

var AddContactActions = function AddContactActions(_ref) {
  var t = _ref.t,
      onCancel = _ref.onCancel,
      onSave = _ref.onSave;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    label: t('cancel'),
    onClick: onCancel
  }), /*#__PURE__*/React.createElement(Button, {
    label: t('save'),
    onClick: onSave
  }));
};

export default withContactsListLocales(AddContactActions);