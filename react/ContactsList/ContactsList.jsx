import React from 'react'
import PropTypes from 'prop-types'

import { useI18n } from '../providers/I18n'
import { Table } from '../deprecated/Table'
import List from '../List'
import ListSubheader from '../ListSubheader'
import { sortContacts, categorizeContacts, sortHeaders } from './helpers'
import ContactRow from './ContactRow'
import useBreakpoints from '../providers/Breakpoints'
import withContactsListLocales from './locales/withContactsListLocales'

const ContactsList = ({ contacts, onItemClick, ...rest }) => {
  const { t } = useI18n()
  const sortedContacts = sortContacts(contacts)
  const categorizedContacts = categorizeContacts(sortedContacts, t)
  const sortedHeaders = sortHeaders(categorizedContacts, t)
  const { isDesktop } = useBreakpoints()

  return (
    <Table {...rest}>
      {sortedHeaders.map(header => (
        <List
          key={header}
          subheader={
            <ListSubheader gutters={isDesktop ? 'double' : 'default'}>
              {header}
            </ListSubheader>
          }
        >
          {categorizedContacts[header].map((contact, index) => (
            <ContactRow
              key={contact._id}
              id={contact._id}
              contact={contact}
              divider={index !== categorizedContacts[header].length - 1}
              onClick={onItemClick}
            />
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

export default withContactsListLocales(ContactsList)
