import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import { useClient } from 'cozy-client';
import { FixedDialog } from "cozy-ui/transpiled/react/CozyDialogs";
import AddContactTitle from "cozy-ui/transpiled/react/ContactsListModal/AddContact/AddContactTitle";
import AddContactContent from "cozy-ui/transpiled/react/ContactsListModal/AddContact/AddContactContent";
import AddContactActions from "cozy-ui/transpiled/react/ContactsListModal/AddContact/AddContactActions";
import { handleSubmit } from "cozy-ui/transpiled/react/ContactsListModal/AddContact/helpers";

var AddContactDialog = function AddContactDialog(_ref) {
  var onListClose = _ref.onListClose,
      onCreate = _ref.onCreate,
      onClose = _ref.onClose;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      contactValues = _useState2[0],
      setContactValues = _useState2[1];

  var client = useClient();
  return /*#__PURE__*/React.createElement(FixedDialog, {
    open: true,
    onClose: onClose,
    title: /*#__PURE__*/React.createElement(AddContactTitle, null),
    content: /*#__PURE__*/React.createElement(AddContactContent, {
      setContactValues: setContactValues
    }),
    actions: /*#__PURE__*/React.createElement(AddContactActions, {
      onCancel: onClose,
      onSave: function onSave() {
        return handleSubmit({
          client: client,
          contactValues: contactValues,
          onCreate: onCreate,
          onListClose: onListClose
        });
      }
    })
  });
};

export default AddContactDialog;