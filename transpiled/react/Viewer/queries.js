import { Q, fetchPolicies } from 'cozy-client';
var defaultFetchPolicy = fetchPolicies.olderThan(30 * 1000);
export var buildContactByIdsQuery = function buildContactByIdsQuery() {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    definition: function definition() {
      return Q('io.cozy.contacts').getByIds(ids);
    },
    options: {
      as: "io.cozy.contacts/".concat(ids.join('')),
      fetchPolicy: defaultFetchPolicy
    }
  };
};