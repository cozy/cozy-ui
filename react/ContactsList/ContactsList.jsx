import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { sortLastNameFirst, buildLastNameFirst } from './'
import ContactRow from './ContactRow'
import ContactHeaderRow from './ContactHeaderRow'
import styles from './styles.styl'

const ContactsList = props => {
  const { contacts, className, onItemClick, ...rest } = props

  const sortedContacts = [...contacts].sort(sortLastNameFirst)
  const categorizedContacts = sortedContacts.reduce((acc, contact) => {
    const name = buildLastNameFirst(contact)
    const header = name[0] || 'EMPTY'
    acc[header] = acc[header] || []
    acc[header].push(contact)
    return acc
  }, {})

  return (
    <ol className={cx(styles['list-contact'], className)} {...rest}>
      {Object.keys(categorizedContacts).map(header => (
        <li key={header}>
          <ContactHeaderRow header={header} />
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
  contacts: PropTypes.array.isRequired
}

export default ContactsList
