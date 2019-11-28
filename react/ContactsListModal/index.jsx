import React, { useState } from 'react'
import { Query, fetchPolicies } from 'cozy-client'
import ContactsList from '../ContactsList'
import Modal, { ModalHeader, ModalDescription, ModalBackButton } from '../Modal'
import Spinner from '../Spinner'
import styles from './styles.styl'
import Input from '../Input'
import PropTypes from 'prop-types'
import withBreakpoints from '../helpers/withBreakpoints'

const thirtySeconds = 30000
const olderThan30s = fetchPolicies.olderThan(thirtySeconds)

const mkFilter = filter => contacts => {
  if (!filter) {
    return contacts
  }

  const f = filter.toLowerCase()

  return contacts.filter(contact => {
    return (
      (contact.fullname && contact.fullname.toLowerCase().includes(f)) ||
      (contact.name &&
        contact.name.familyName &&
        contact.name.familyName.toLowerCase().includes(f)) ||
      (contact.name &&
        contact.name.givenName &&
        contact.name.givenName.toLowerCase().includes(f))
    )
  })
}

const ContactsListModal = props => {
  const {
    onItemClick,
    placeholder,
    breakpoints: { isMobile },
    ...rest
  } = props

  const [filter, setFilter] = useState('')

  const handleFilterChange = e => {
    setFilter(e.target.value)
  }

  const filterContacts = mkFilter(filter)

  const handleItemClick = contact => {
    if (!onItemClick) {
      return
    }

    onItemClick(contact)
    rest.dismissAction()
  }

  return (
    <Modal size="xxlarge" mobileFullscreen {...rest} closable={!isMobile}>
      <ModalHeader className={styles.ContactsListModal__header}>
        {isMobile && (
          <ModalBackButton
            onClick={rest.dismissAction}
            style={{ color: 'var(--white)' }}
          />
        )}
        <Input
          type="text"
          placeholder={placeholder}
          fullwidth
          value={filter}
          onChange={handleFilterChange}
          autoFocus
        />
      </ModalHeader>
      <ModalDescription className={styles.ContactsListModal__description}>
        <Query
          query={client => client.all('io.cozy.contacts').UNSAFE_noLimit()}
          fetchPolicy={olderThan30s}
        >
          {({ data, fetchStatus, lastFetch }) => {
            if (
              (fetchStatus === 'loading' || fetchStatus === 'pending') &&
              !lastFetch
            ) {
              return <Spinner size="xxlarge" />
            }

            const filteredContacts = filterContacts(data)

            return (
              <ContactsList
                contacts={filteredContacts}
                onItemClick={handleItemClick}
              />
            )
          }}
        </Query>
      </ModalDescription>
    </Modal>
  )
}

ContactsListModal.propTypes = {
  onItemClick: PropTypes.func
}

export default withBreakpoints()(ContactsListModal)
