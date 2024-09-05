import _extends from "@babel/runtime/helpers/extends";
import PropTypes from 'prop-types';
import React from 'react';
import { useQueryAll } from 'cozy-client';
import ContactsListModal from "cozy-ui/transpiled/react/ContactsListModal/ContactsListModal";
import { buildContactsQuery } from "cozy-ui/transpiled/react/ContactsListModal/queries";

var ContactsListModalWithQuery = function ContactsListModalWithQuery(props) {
  var contactsQuery = buildContactsQuery();
  var contacts = useQueryAll(contactsQuery.definition, contactsQuery.options);
  return /*#__PURE__*/React.createElement(ContactsListModal, _extends({
    contacts: contacts
  }, props));
};

ContactsListModalWithQuery.propTypes = {
  onItemClick: PropTypes.func,

  /** Label to show in the search input */
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Label to show on the button to add a contact */
  addContactLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Message to show when no result */
  emptyMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  dismissAction: PropTypes.func
};
export default ContactsListModalWithQuery;