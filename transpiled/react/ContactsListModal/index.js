import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Q, fetchPolicies, useClient, useQuery } from 'cozy-client';
import { DialogTitle, DialogContent } from "cozy-ui/transpiled/react/Dialog";
import CozyTheme from "cozy-ui/transpiled/react/CozyTheme";
import { TopAnchoredDialog, DialogCloseButton, useCozyDialog } from "cozy-ui/transpiled/react/CozyDialogs";
import useRealtime from "cozy-ui/transpiled/react/hooks/useRealtime";
import useEventListener from "cozy-ui/transpiled/react/hooks/useEventListener";
import useBreakpoints from "cozy-ui/transpiled/react/hooks/useBreakpoints";
import Button from "cozy-ui/transpiled/react/Buttons";
import PlusIcon from "cozy-ui/transpiled/react/Icons/Plus";
import Icon from "cozy-ui/transpiled/react/Icon";
import MobileHeader from "cozy-ui/transpiled/react/ContactsListModal/MobileHeader";
import ContactsListContent from "cozy-ui/transpiled/react/ContactsListModal/ContactsListContent";
import AddContactDialog from "cozy-ui/transpiled/react/ContactsListModal/AddContact/AddContactDialog";
import TextField from "cozy-ui/transpiled/react/TextField";
var styles = {
  "ContactsListModal__addContactContainer": "styles__ContactsListModal__addContactContainer___2W-dE"
};
var thirtySeconds = 30000;
var olderThan30s = fetchPolicies.olderThan(thirtySeconds);
var contactsQuery = {
  definition: Q('io.cozy.contacts').UNSAFE_noLimit(),
  options: {
    as: 'contacts',
    fetchPolicy: olderThan30s
  }
};

var ContactsListModal = function ContactsListModal(_ref) {
  var onItemClick = _ref.onItemClick,
      placeholder = _ref.placeholder,
      addContactLabel = _ref.addContactLabel,
      emptyMessage = _ref.emptyMessage,
      dismissAction = _ref.dismissAction;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showAddDialog = _useState4[0],
      setShowAddDialog = _useState4[1];

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  var _useCozyDialog = useCozyDialog({
    size: 'large',
    open: true,
    onClose: dismissAction
  }),
      dialogProps = _useCozyDialog.dialogProps,
      dialogTitleProps = _useCozyDialog.dialogTitleProps;

  var client = useClient();
  var contacts = useQuery(contactsQuery.definition, contactsQuery.options);
  useRealtime(client, {
    'io.cozy.contacts': {
      created: contacts.fetch,
      updated: contacts.fetch
    }
  }, []);
  useEventListener(document, 'resume', contacts.fetch);

  var handleFilterChange = function handleFilterChange(e) {
    setFilter(e.target.value);
  };

  return /*#__PURE__*/React.createElement(TopAnchoredDialog, dialogProps, /*#__PURE__*/React.createElement(CozyTheme, {
    variant: isMobile ? 'inverted' : 'normal'
  }, /*#__PURE__*/React.createElement(DialogCloseButton, {
    onClick: dismissAction
  })), /*#__PURE__*/React.createElement(DialogTitle, _extends({}, dialogTitleProps, {
    className: cx(dialogTitleProps.className, {
      'u-p-0 u-w-100': isMobile
    })
  }), isMobile ? /*#__PURE__*/React.createElement(MobileHeader, {
    filter: filter,
    placeholder: placeholder,
    onChange: handleFilterChange,
    onDismiss: dismissAction
  }) : /*#__PURE__*/React.createElement(TextField, {
    variant: "outlined",
    type: "text",
    label: placeholder,
    id: placeholder,
    fullWidth: true,
    value: filter,
    onChange: handleFilterChange,
    autoFocus: true
  })), /*#__PURE__*/React.createElement(DialogContent, {
    className: "u-p-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dialogContentInner"
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.ContactsListModal__addContactContainer
  }, /*#__PURE__*/React.createElement(Button, {
    className: isMobile && 'u-mt-1',
    variant: "secondary",
    theme: "secondary",
    label: addContactLabel,
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      icon: PlusIcon
    }),
    onClick: setShowAddDialog
  })), /*#__PURE__*/React.createElement(ContactsListContent, {
    filter: filter,
    contacts: contacts,
    onItemClick: onItemClick,
    emptyMessage: emptyMessage,
    dismissAction: dismissAction
  }))), showAddDialog && /*#__PURE__*/React.createElement(AddContactDialog, {
    onListClose: dismissAction,
    onCreate: onItemClick,
    onClose: function onClose() {
      return setShowAddDialog(false);
    }
  }));
};

ContactsListModal.propTypes = {
  onItemClick: PropTypes.func,
  placeholder: PropTypes.string,
  addContactLabel: PropTypes.string,
  emptyMessage: PropTypes.string,
  dismissAction: PropTypes.func
};
export default ContactsListModal;