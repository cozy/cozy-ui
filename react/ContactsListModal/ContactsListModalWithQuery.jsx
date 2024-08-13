import React from 'react'
import PropTypes from 'prop-types'

import { useQueryAll } from 'cozy-client'

import { buildContactsQuery } from './queries'
import ContactsListModal from './ContactsListModal'

const ContactsListModalWithQuery = props => {
  const contactsQuery = buildContactsQuery()
  const contacts = useQueryAll(contactsQuery.definition, contactsQuery.options)

  return <ContactsListModal contacts={contacts} {...props} />
}

ContactsListModalWithQuery.propTypes = {
  onItemClick: PropTypes.func,
  /** Label to show in the search input */
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** Label to show on the button to add a contact */
  addContactLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** Message to show when no result */
  emptyMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  dismissAction: PropTypes.func
}

export default ContactsListModalWithQuery
