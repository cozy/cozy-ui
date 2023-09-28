import React from 'react'

import { models } from 'cozy-client'
const { getDisplayName } = models.contact

import ContactsList from '../ContactsList'
import Spinner from '../Spinner'
import { useI18n } from '../providers/I18n'
import EmptyMessage from './EmptyMessage'
import { withContactsListLocales } from './withContactsListLocales'

const mkFilter = filterStr => contacts => {
  if (!filterStr) {
    return contacts
  }

  const f = filterStr.toLowerCase()

  // TODO better filtering methods can be extracted from drive. See https://github.com/cozy/cozy-ui/pull/1273#discussion_r351845385
  return contacts.filter(contact => {
    const displayName = getDisplayName(contact)

    if (!displayName) {
      return false
    }

    return displayName.toLowerCase().includes(f)
  })
}

const ContactsListContent = ({
  filter,
  contacts,
  emptyMessage,
  onItemClick,
  dismissAction
}) => {
  const { t } = useI18n()

  const loading =
    (contacts.fetchStatus === 'loading' ||
      contacts.fetchStatus === 'pending') &&
    !contacts.lastFetch

  const filterContacts = mkFilter(filter)
  const filteredContacts = filterContacts(contacts.data)
  const selfEmptyMessage = emptyMessage ?? t('emptyContact')

  const handleItemClick = contact => {
    if (!onItemClick) {
      return
    }

    onItemClick(contact)
    dismissAction()
  }

  if (loading) {
    return (
      <div className="u-mv-2 u-ta-center">
        <Spinner size="xxlarge" />
      </div>
    )
  }

  if (filteredContacts.length === 0) {
    return <EmptyMessage>{selfEmptyMessage}</EmptyMessage>
  }

  return (
    <ContactsList contacts={filteredContacts} onItemClick={handleItemClick} />
  )
}

export default withContactsListLocales(ContactsListContent)
