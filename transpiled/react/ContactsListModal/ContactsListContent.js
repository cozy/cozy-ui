import React from 'react';
import { models } from 'cozy-client';
var getDisplayName = models.contact.getDisplayName;
import ContactsList from "cozy-ui/transpiled/react/ContactsList";
import Spinner from "cozy-ui/transpiled/react/Spinner";
import EmptyMessage from "cozy-ui/transpiled/react/ContactsListModal/EmptyMessage";

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
  var loading = (contacts.fetchStatus === 'loading' || contacts.fetchStatus === 'pending') && !contacts.lastFetch;
  var filterContacts = mkFilter(filter);
  var filteredContacts = filterContacts(contacts.data);

  var handleItemClick = function handleItemClick(contact) {
    if (!onItemClick) {
      return;
    }

    onItemClick(contact);
    dismissAction();
  };

  if (loading) {
    return /*#__PURE__*/React.createElement("div", {
      className: "u-mv-2"
    }, /*#__PURE__*/React.createElement(Spinner, {
      size: "xxlarge"
    }));
  }

  if (filteredContacts.length === 0) {
    return /*#__PURE__*/React.createElement(EmptyMessage, null, emptyMessage);
  }

  return /*#__PURE__*/React.createElement(ContactsList, {
    contacts: filteredContacts,
    onItemClick: handleItemClick
  });
};

export default ContactsListContent;