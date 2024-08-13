import { getReferencedBy, useQuery, isQueryLoading } from 'cozy-client'

import { buildContactByIdsQuery } from '../queries'

const useReferencedContactName = file => {
  const contactIds = getReferencedBy(file, 'io.cozy.contacts').map(
    ref => ref.id
  )
  const isContactByIdsQueryEnabled = contactIds.length > 0

  const contactByIdsQuery = buildContactByIdsQuery(contactIds)
  const { data: contacts, ...contactsQueryResult } = useQuery(
    contactByIdsQuery.definition,
    {
      ...contactByIdsQuery.options,
      enabled: isContactByIdsQueryEnabled
    }
  )

  const isLoadingContacts =
    isContactByIdsQueryEnabled &&
    (isQueryLoading(contactsQueryResult) || contactsQueryResult.hasMore)

  return { contacts, isLoadingContacts }
}
export default useReferencedContactName
