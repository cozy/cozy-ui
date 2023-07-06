import { Q, fetchPolicies } from 'cozy-client';
var FILES_DOCTYPE = 'io.cozy.files';
var defaultFetchPolicy = fetchPolicies.olderThan(30 * 1000);
var TRASH_DIR_ID = "".concat(FILES_DOCTYPE, ".trash-dir");
export var buildCurrentFolderQuery = function buildCurrentFolderQuery(folderId) {
  return {
    definition: function definition() {
      return Q(FILES_DOCTYPE).getById(folderId);
    },
    options: {
      as: "onlyfolder-".concat(folderId),
      fetchPolicy: defaultFetchPolicy
    }
  };
};
export var buildContentFolderQuery = function buildContentFolderQuery(dirId) {
  return {
    definition: function definition() {
      return Q(FILES_DOCTYPE).where({
        dir_id: dirId,
        type: {
          $gt: null
        },
        name: {
          $gt: null
        }
      }).partialIndex({
        _id: {
          $ne: TRASH_DIR_ID
        }
      }).indexFields(['dir_id', 'type', 'name']).sortBy([{
        dir_id: 'asc'
      }, {
        type: 'asc'
      }, {
        name: 'asc'
      }]).limitBy(20);
    },
    options: {
      as: "buildContentFolderQuery-".concat(dirId),
      fetchPolicy: defaultFetchPolicy
    }
  };
};