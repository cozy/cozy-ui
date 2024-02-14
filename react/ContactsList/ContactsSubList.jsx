import PropTypes from 'prop-types'
import React from 'react'

import ContactRow from './ContactRow'

const ContactsSubList = ({ contacts, onClick }) => {
  return (
    <>
      {contacts.map((contact, index) => (
        <ContactRow
          id={contact._id}
          key={contact._id}
          contact={contact}
          divider={index !== contacts.length - 1}
          onClick={onClick}
        />
      ))}
    </>
  )
}

ContactsSubList.propTypes = {
  contacts: PropTypes.array.isRequired
}

export default ContactsSubList
