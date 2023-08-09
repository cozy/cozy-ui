import { Q, fetchPolicies } from 'cozy-client'

const defaultFetchPolicy = fetchPolicies.olderThan(30 * 1000)

export const buildContactByIdsQuery = (ids = []) => ({
  definition: () => Q('io.cozy.contacts').getByIds(ids),
  options: {
    as: `io.cozy.contacts/${ids.join('')}`,
    fetchPolicy: defaultFetchPolicy
  }
})

export const buildFileByIdQuery = fileId => ({
  definition: () => Q('io.cozy.files').getById(fileId),
  options: {
    as: `io.cozy.files/${fileId}`,
    fetchPolicy: defaultFetchPolicy,
    singleDocData: true
  }
})
