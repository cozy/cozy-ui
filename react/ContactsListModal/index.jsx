import React, { useState } from 'react'
import { withClient, fetchPolicies, queryConnect } from 'cozy-client'
import ContactsList from '../ContactsList'
import Modal, { ModalHeader, ModalDescription } from '../Modal'
import Spinner from '../Spinner'
import styles from './styles.styl'
import Input from '../Input'
import PropTypes from 'prop-types'
import withBreakpoints from '../helpers/withBreakpoints'
import Button from '../Button'
import { Contact } from 'cozy-doctypes'
import AddContactButton from './AddContactButton'
import EmptyMessage from './EmptyMessage'
import compose from 'lodash/flowRight'
import useRealtime from '../hooks/useRealtime'
import useEventListener from '../hooks/useEventListener.js'

const thirtySeconds = 30000
const olderThan30s = fetchPolicies.olderThan(thirtySeconds)

const mkFilter = filterStr => contacts => {
  if (!filterStr) {
    return contacts
  }

  const f = filterStr.toLowerCase()

  // TODO better filtering methods can be extracted from drive. See https://github.com/cozy/cozy-ui/pull/1273#discussion_r351845385
  return contacts.filter(contact => {
    const displayName = Contact.getDisplayName(contact)

    if (!displayName) {
      return false
    }

    return displayName.toLowerCase().includes(f)
  })
}

const ContactsListModal = props => {
  const {
    onItemClick,
    placeholder,
    breakpoints: { isMobile },
    addContactLabel,
    emptyMessage,
    contacts,
    client,
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

  const loading =
    (contacts.fetchStatus === 'loading' ||
      contacts.fetchStatus === 'pending') &&
    !contacts.lastFetch

  const filteredContacts = filterContacts(contacts.data)

  useRealtime(
    client,
    {
      'io.cozy.contacts': {
        created: contacts.fetch,
        updated: contacts.fetch
      }
    },
    []
  )

  useEventListener(document, 'resume', contacts.fetch)

  return (
    <Modal size="xxlarge" mobileFullscreen {...rest} closable={!isMobile}>
      <ModalHeader className={styles.ContactsListModal__header}>
        {isMobile && (
          <Button
            onClick={rest.dismissAction}
            extension="narrow"
            iconOnly
            icon="previous"
            theme="primary"
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
        <div className={styles.ContactsListModal__addContactContainer}>
          <AddContactButton label={addContactLabel} />
        </div>
        {loading && <Spinner size="xxlarge" />}
        {!loading && filteredContacts.length === 0 && (
          <EmptyMessage>{emptyMessage}</EmptyMessage>
        )}
        {!loading && filteredContacts.length > 0 && (
          <ContactsList
            contacts={filteredContacts}
            onItemClick={handleItemClick}
          />
        )}
      </ModalDescription>
    </Modal>
  )
}

ContactsListModal.propTypes = {
  onItemClick: PropTypes.func
}

export default compose(
  withClient,
  withBreakpoints(),
  queryConnect({
    contacts: {
      query: client => client.all('io.cozy.contacts').UNSAFE_noLimit(),
      as: 'contacts',
      fetchPolicy: olderThan30s
    }
  })
)(ContactsListModal)
