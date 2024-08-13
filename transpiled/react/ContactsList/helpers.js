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
/**
 * Build header for a contact (first letter of last name)
 * @param {object} contact
 * @param {function} t translation function
 * @returns {string} header
 */

var makeHeader = function makeHeader(contact, t) {
  if (contact.me) return t('me');
  var name = buildLastNameFirst(contact);
  return name[0] || t('empty');
};
/**
 * @typedef {Object.<string, Object>} CategorizedContactsResult
 */

/**
 * Categorize contacts by first letter of last name
 * @param {object[]} contacts io.cozy.contacts documents
 * @param {function} t translation function
 * @returns {CategorizedContactsResult}
 */


export var categorizeContacts = function categorizeContacts(contacts, t) {
  return contacts.reduce(function (acc, contact) {
    var header = makeHeader(contact, t);
    acc[header] = acc[header] || [];
    acc[header].push(contact);
    return acc;
  }, {});
};
/**
 * Sort headers (first letter of last name) alphabetically and put 'me' and 'empty' first
 * @param {CategorizedContactsResult} categorized categorized contacts
 * @param {function} t translation function
 * @returns {string[]}
 */

export var sortHeaders = function sortHeaders(categorized, t) {
  var headers = Object.keys(categorized);
  var notEmptyAndMyselfHeaders = headers.filter(function (header) {
    return header !== t('empty') && header !== t('me');
  });
  var notEmptyAndMyselfSorted = notEmptyAndMyselfHeaders.slice().sort();

  if (headers.length === notEmptyAndMyselfHeaders.length) {
    return notEmptyAndMyselfSorted;
  }

  var headersSorted = [];

  if (headers.includes(t('me'))) {
    headersSorted.push(t('me'));
  }

  if (headers.includes(t('empty'))) {
    headersSorted.push(t('empty'));
  }

  return headersSorted.concat(notEmptyAndMyselfSorted);
};