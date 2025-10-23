import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-final-form';
import { makeDisplayName } from 'cozy-client/dist/models/contact';
import ContactsListModal from "cozy-ui/transpiled/react/ContactsListModal";
export var RelatedContactList = function RelatedContactList(_ref) {
  var name = _ref.name,
      onClose = _ref.onClose,
      contacts = _ref.contacts;

  var _useForm = useForm(),
      change = _useForm.change;
  /**
   * @param {import('cozy-client/types/types').IOCozyContact} contact
   */


  var onClickContactsListModal = function onClickContactsListModal(contact) {
    // Use `makeDisplayName` because if the contact is newly created, it has no `displayName` attribute. (Creation of a contact when selecting a linked contact)
    change(name, makeDisplayName(contact));
    change("".concat(name, "Id"), contact._id);
    onClose();
  };

  return /*#__PURE__*/React.createElement(ContactsListModal, {
    dismissAction: onClose,
    onItemClick: function onItemClick(contact) {
      return onClickContactsListModal(contact);
    },
    contacts: contacts
  });
};
RelatedContactList.propTypes = {
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  contacts: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};