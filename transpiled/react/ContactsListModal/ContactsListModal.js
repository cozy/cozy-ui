import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useClient } from 'cozy-client';
import AddContactDialog from "cozy-ui/transpiled/react/ContactsListModal/AddContact/AddContactDialog";
import ContactsListContent from "cozy-ui/transpiled/react/ContactsListModal/ContactsListContent";
import MobileHeader from "cozy-ui/transpiled/react/ContactsListModal/MobileHeader";
var styles = {
  "ContactsListModal__addContactContainer": "styles__ContactsListModal__addContactContainer___2W-dE"
};
import Button from "cozy-ui/transpiled/react/Buttons";
import { TopAnchoredDialog, DialogCloseButton, useCozyDialog } from "cozy-ui/transpiled/react/CozyDialogs";
import { DialogTitle, DialogContent } from "cozy-ui/transpiled/react/Dialog";
import Icon from "cozy-ui/transpiled/react/Icon";
import PlusIcon from "cozy-ui/transpiled/react/Icons/Plus";
import useEventListener from "cozy-ui/transpiled/react/hooks/useEventListener";
import useRealtime from "cozy-ui/transpiled/react/hooks/useRealtime";
import CozyTheme from "cozy-ui/transpiled/react/providers/CozyTheme";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import TextField from "cozy-ui/transpiled/react/TextField";

var ContactsListModal = function ContactsListModal(_ref) {
  var onItemClick = _ref.onItemClick,
      placeholder = _ref.placeholder,
      addContactLabel = _ref.addContactLabel,
      emptyMessage = _ref.emptyMessage,
      dismissAction = _ref.dismissAction,
      contacts = _ref.contacts;

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

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _useCozyDialog = useCozyDialog({
    size: 'large',
    open: true,
    onClose: dismissAction
  }),
      dialogProps = _useCozyDialog.dialogProps,
      dialogTitleProps = _useCozyDialog.dialogTitleProps;

  var client = useClient();
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

  var selfAddContactLabel = addContactLabel !== null && addContactLabel !== void 0 ? addContactLabel : t('addContact');
  var selfPlaceholder = placeholder !== null && placeholder !== void 0 ? placeholder : t('searchContact');
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
    placeholder: selfPlaceholder,
    onChange: handleFilterChange,
    onDismiss: dismissAction
  }) : /*#__PURE__*/React.createElement(TextField, {
    variant: "outlined",
    type: "text",
    label: selfPlaceholder,
    id: "contactsListModal-search-id",
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
  }, /*#__PURE__*/React.createElement(Button, _extends({
    className: isMobile && 'u-mt-1',
    variant: "secondary",
    theme: "secondary",
    label: selfAddContactLabel || /*#__PURE__*/React.createElement(Icon, {
      icon: PlusIcon
    })
  }, selfAddContactLabel && {
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      icon: PlusIcon
    })
  }, {
    onClick: setShowAddDialog
  }))), /*#__PURE__*/React.createElement(ContactsListContent, {
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

  /** Label to show in the search input */
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Label to show on the button to add a contact */
  addContactLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Message to show when no result */
  emptyMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  dismissAction: PropTypes.func,

  /** Query state of contacts */
  contacts: PropTypes.object
};
export default ContactsListModal;