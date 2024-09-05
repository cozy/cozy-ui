import React from 'react';
import { models } from 'cozy-client';
var getDisplayName = models.contact.getDisplayName;
import EmptyMessage from "cozy-ui/transpiled/react/ContactsListModal/EmptyMessage";
import { withContactsListLocales } from "cozy-ui/transpiled/react/ContactsListModal/withContactsListLocales";
import ContactsList from "cozy-ui/transpiled/react/ContactsList";
import Spinner from "cozy-ui/transpiled/react/Spinner";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";

var mkFilter = function mkFilter(filterStr) {
  return function (contacts) {
    if (!filterStr) {
      return contacts;
    }

    var f = filterStr.toLowerCase(); // TODO better filtering methods can be extracted from drive. See https://github.com/cozy/cozy-ui/pull/1273#discussion_r351845385

    return contacts.filter(function (contact) {
      var displayName = getDisplayName(contact);

      if (!displayName) {
        return false;
      }

      return displayName.toLowerCase().includes(f);
    });
  };
};

var ContactsListContent = function ContactsListContent(_ref) {
  var filter = _ref.filter,
      contacts = _ref.contacts,
      emptyMessage = _ref.emptyMessage,
      onItemClick = _ref.onItemClick,
      dismissAction = _ref.dismissAction;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var loading = (contacts.fetchStatus === 'loading' || contacts.fetchStatus === 'pending') && !contacts.lastFetch;
  var filterContacts = mkFilter(filter);
  var filteredContacts = filterContacts(contacts.data);
  var selfEmptyMessage = emptyMessage !== null && emptyMessage !== void 0 ? emptyMessage : t('emptyContact');

  var handleItemClick = function handleItemClick(contact) {
    if (!onItemClick) {
      return;
    }

    onItemClick(contact);
    dismissAction();
  };

  if (loading) {
    return /*#__PURE__*/React.createElement("div", {
      className: "u-mv-2 u-ta-center"
    }, /*#__PURE__*/React.createElement(Spinner, {
      size: "xxlarge"
    }));
  }

  if (filteredContacts.length === 0) {
    return /*#__PURE__*/React.createElement(EmptyMessage, null, selfEmptyMessage);
  }

  return /*#__PURE__*/React.createElement(ContactsList, {
    contacts: filteredContacts,
    onItemClick: handleItemClick
  });
};

export default withContactsListLocales(ContactsListContent);