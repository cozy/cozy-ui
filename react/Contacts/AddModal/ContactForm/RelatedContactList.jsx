import PropTypes from 'prop-types'
import React from 'react'
import { useForm } from 'react-final-form'

import { makeDisplayName } from 'cozy-client/dist/models/contact'

import ContactsListModal from '../../../ContactsListModal'

export const RelatedContactList = ({ name, onClose, contacts }) => {
  const { change } = useForm()

  /**
   * @param {import('cozy-client/types/types').IOCozyContact} contact
   */
  const onClickContactsListModal = contact => {
    // Use `makeDisplayName` because if the contact is newly created, it has no `displayName` attribute. (Creation of a contact when selecting a linked contact)
    change(name, makeDisplayName(contact))
    change(`${name}Id`, contact._id)
    onClose()
  }

  return (
    <ContactsListModal
      dismissAction={onClose}
      onItemClick={contact => onClickContactsListModal(contact)}
      contacts={contacts}
    />
  )
}

RelatedContactList.propTypes = {
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  contacts: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
}
