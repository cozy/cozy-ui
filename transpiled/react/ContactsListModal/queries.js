import { Q, fetchPolicies } from 'cozy-client';
import { CONTACTS_DOCTYPE } from 'cozy-client/dist/models/contact';
var defaultFetchPolicy = fetchPolicies.olderThan(30 * 1000);
export var buildContactsQuery = function buildContactsQuery() {
  return {
    definition: function definition() {
      return Q(CONTACTS_DOCTYPE).limitBy(1000);
    },
    options: {
      as: "".concat(CONTACTS_DOCTYPE),
      fetchPolicy: defaultFetchPolicy
    }
  };
};