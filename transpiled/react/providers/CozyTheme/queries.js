import { Q, fetchPolicies } from 'cozy-client';
var SETTINGS_DOCTYPE = 'io.cozy.settings';
var defaultFetchPolicy = fetchPolicies.olderThan(5 * 60 * 1000);
export var buildSettingsInstanceQuery = function buildSettingsInstanceQuery() {
  return {
    definition: Q(SETTINGS_DOCTYPE).getById('io.cozy.settings.instance'),
    options: {
      as: "".concat(SETTINGS_DOCTYPE, "/io.cozy.settings.instance"),
      fetchPolicy: defaultFetchPolicy,
      singleDocData: true
    }
  };
};