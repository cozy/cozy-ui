import { getReferencedBy, useQuery, models, isQueryLoading } from 'cozy-client'

import { buildContactByIdsQuery } from '../queries'

const {
  contact: { getDisplayName }
} = models

const useReferencedContactName = file => {
  const contactIds = getReferencedBy(file, 'io.cozy.contacts').map(
    ref => ref.id
  )
  const contactByIdsQuery = buildContactByIdsQuery(contactIds)
  const { data: contacts, ...contactsQueryResult } = useQuery(
    contactByIdsQuery.definition,
    {
      ...contactByIdsQuery.options,
      enabled: contactIds.length > 0
    }
  )

  const isLoadingContacts =
    isQueryLoading(contactsQueryResult) || contactsQueryResult.hasMore

  const contactName =
    contacts && contacts.length > 0
      ? contacts.map(contact => `${getDisplayName(contact)}`).join(', ')
      : ''

  return { contactName, isLoadingContacts }
}
export default useReferencedContactName
