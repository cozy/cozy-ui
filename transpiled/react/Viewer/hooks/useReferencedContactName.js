import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["data"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { getReferencedBy, useQuery, isQueryLoading } from 'cozy-client';
import { buildContactByIdsQuery } from "cozy-ui/transpiled/react/Viewer/queries";

var useReferencedContactName = function useReferencedContactName(file) {
  var contactIds = getReferencedBy(file, 'io.cozy.contacts').map(function (ref) {
    return ref.id;
  });
  var isContactByIdsQueryEnabled = contactIds.length > 0;
  var contactByIdsQuery = buildContactByIdsQuery(contactIds);

  var _useQuery = useQuery(contactByIdsQuery.definition, _objectSpread(_objectSpread({}, contactByIdsQuery.options), {}, {
    enabled: isContactByIdsQueryEnabled
  })),
      contacts = _useQuery.data,
      contactsQueryResult = _objectWithoutProperties(_useQuery, _excluded);

  var isLoadingContacts = isContactByIdsQueryEnabled && (isQueryLoading(contactsQueryResult) || contactsQueryResult.hasMore);
  return {
    contacts: contacts,
    isLoadingContacts: isLoadingContacts
  };
};

export default useReferencedContactName;