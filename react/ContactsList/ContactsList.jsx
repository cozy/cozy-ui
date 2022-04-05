import React from 'react'
import PropTypes from 'prop-types'

import { Table } from '../Table'
import List from '../MuiCozyTheme/List'
import ListSubheader from '../MuiCozyTheme/ListSubheader'
import { sortContacts, categorizeContacts, sortHeaders } from './helpers'
import ContactRow from './ContactRow'

const ContactsList = ({ contacts, onItemClick, ...rest }) => {
  const sortedContacts = sortContacts(contacts)
  const categorizedContacts = categorizeContacts(sortedContacts)
  const sortedHeaders = sortHeaders(categorizedContacts)

  return (
    <Table {...rest}>
      {sortedHeaders.map(header => (
        <List key={header}>
          <ListSubheader>{header}</ListSubheader>
          {categorizedContacts[header].map((contact, index) => (
            <List key={contact._id}>
              <ContactRow
                id={contact._id}
                contact={contact}
                divider={index !== contacts.length - 1}
                onClick={onItemClick}
              />
            </List>
          ))}
        </List>
      ))}
    </Table>
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onItemClick: PropTypes.func
}

export default ContactsList
