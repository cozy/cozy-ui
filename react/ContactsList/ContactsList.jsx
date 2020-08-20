import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { sortContacts, categorizeContacts, sortHeaders } from './helpers'
import ContactRow from './ContactRow'
import ListSubheader from '../MuiCozyTheme/ListSubheader'
import styles from './styles.styl'

const ContactsList = props => {
  const { contacts, className, onItemClick, ...rest } = props

  const sortedContacts = sortContacts(contacts)
  const categorizedContacts = categorizeContacts(sortedContacts)
  const sortedHeaders = sortHeaders(categorizedContacts)

  return (
    <ol className={cx(styles['list-contact'], className)} {...rest}>
      {sortedHeaders.map(header => (
        <li key={header}>
          <ListSubheader>{header}</ListSubheader>
          <ol className={styles['sublist-contact']}>
            {categorizedContacts[header].map(contact => (
              <li key={contact._id}>
                <ContactRow
                  id={contact._id}
                  key={contact._id}
                  contact={contact}
                  onClick={onItemClick}
                />
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onItemClick: PropTypes.func
}

export default ContactsList
