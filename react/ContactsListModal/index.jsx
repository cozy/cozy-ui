import PropTypes from 'prop-types'
import React from 'react'

import ContactsListModal from './ContactsListModal'
import ContactsListModalWithQuery from './ContactsListModalWithQuery'
import { withContactsListLocales } from './withContactsListLocales'

const ContactsListModalWrapper = ({ contacts, ...props }) => {
  if (contacts) {
    return <ContactsListModal contacts={contacts} {...props} />
  }
  return <ContactsListModalWithQuery {...props} />
}

ContactsListModalWrapper.propTypes = {
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
}

export default withContactsListLocales(ContactsListModalWrapper)
