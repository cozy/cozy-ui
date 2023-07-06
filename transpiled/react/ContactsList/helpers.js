import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
export function buildLastNameFirst(contact) {
  var givenName = contact.name && contact.name.givenName ? contact.name.givenName.toUpperCase() : '';
  var familyName = contact.name && contact.name.familyName ? contact.name.familyName.toUpperCase() : '';

  if (!givenName && !familyName && contact.fullname) {
    return contact.fullname.toUpperCase().trim();
  } else {
    return "".concat(familyName, " ").concat(givenName).trim();
  }
}
export var sortLastNameFirst = function sortLastNameFirst(contact, comparedContact) {
  var nameA = buildLastNameFirst(contact);
  var nameB = buildLastNameFirst(comparedContact);
  return nameA.localeCompare(nameB);
};
export var sortContacts = function sortContacts(contacts) {
  return contacts.sort(sortLastNameFirst);
};
export var categorizeContacts = function categorizeContacts(contacts) {
  return contacts.reduce(function (acc, contact) {
    var name = buildLastNameFirst(contact);
    var header = name[0] || 'EMPTY';
    acc[header] = acc[header] || [];
    acc[header].push(contact);
    return acc;
  }, {});
};
export var sortHeaders = function sortHeaders(categorized) {
  var headers = Object.keys(categorized);
  var notEmptyHeaders = headers.filter(function (header) {
    return header !== 'EMPTY';
  });
  var notEmptySorted = notEmptyHeaders.sort();

  if (headers.length === notEmptyHeaders.length) {
    return notEmptySorted;
  }

  return ['EMPTY'].concat(_toConsumableArray(notEmptySorted));
};