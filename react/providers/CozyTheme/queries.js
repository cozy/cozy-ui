import { Q, fetchPolicies } from 'cozy-client'

const SETTINGS_DOCTYPE = 'io.cozy.settings'

const defaultFetchPolicy = fetchPolicies.olderThan(5 * 60 * 1000)

export const buildSettingsInstanceQuery = () => ({
  definition: Q(SETTINGS_DOCTYPE).getById('io.cozy.settings.instance'),
  options: {
    as: `${SETTINGS_DOCTYPE}/io.cozy.settings.instance`,
    fetchPolicy: defaultFetchPolicy,
    singleDocData: true
  }
})
