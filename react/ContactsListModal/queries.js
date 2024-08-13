import { Q, fetchPolicies } from 'cozy-client'
import { CONTACTS_DOCTYPE } from 'cozy-client/dist/models/contact'

const defaultFetchPolicy = fetchPolicies.olderThan(30 * 1000)

export const buildContactsQuery = () => ({
  definition: () => Q(CONTACTS_DOCTYPE).limitBy(1000),
  options: {
    as: `${CONTACTS_DOCTYPE}`,
    fetchPolicy: defaultFetchPolicy
  }
})
