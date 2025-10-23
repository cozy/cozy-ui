import get from 'lodash/get';
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
 * Build header for a contact (first letter of indexes.byFamilyNameGivenNameEmailCozyUrl)
 * @param {object} contact
 * @param {function} t translation function
 * @returns {string} header
 */


var makeHeaderForIndexedContacts = function makeHeaderForIndexedContacts(contact, t) {
  var _contact$cozyMetadata;

  if (contact.me) return t('me');
  if ((_contact$cozyMetadata = contact.cozyMetadata) !== null && _contact$cozyMetadata !== void 0 && _contact$cozyMetadata.favorite) return t('favorite');
  var index = get(contact, 'indexes.byFamilyNameGivenNameEmailCozyUrl', '');
  var hasIndex = index !== null && index.length > 0;

  if (hasIndex) {
    var firstLetterWithoutAccent = index[0].normalize('NFD').replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u0898-\u089F\u08C9-\u08D2\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C3C\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u1714\u1715\u17C9-\u17D3\u17DD\u1939-\u193B\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABE\u1AC1-\u1ACB\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC46\uDC70\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g, '');
    return firstLetterWithoutAccent;
  }

  return t('empty');
};
/**
 * @typedef {Object.<string, Object>} CategorizedContactsResult
 */

/**
 * Categorize contacts by first letter of last name
 * Expl.: all contacts with A as first letter will be in A category
 * @param {object[]} contacts io.cozy.contacts documents
 * @param {function} t translation function
 * @returns {CategorizedContactsResult} Categorized contacts
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
/**
 * Counts how many contacts are categorized by first letter and store it in `groupCounts`
 * Expl.: if there is 3 contacts in A and 2 in B, it will return [3,2]
 * Also store first letters and store them in `groupLabels`
 * @param {array} contacts - Array of io.cozy.contact documents
 * @returns {object}
 */

export var makeGroupLabelsAndCounts = function makeGroupLabelsAndCounts(contacts, t) {
  return contacts.reduce(function (acc, contact) {
    var header = makeHeaderForIndexedContacts(contact, t);

    if (!acc.groupLabels.includes(header)) {
      acc.groupLabels.push(header);
    }

    var idx = acc.groupLabels.indexOf(header);
    var val = acc.groupCounts[idx] || 0;
    acc.groupCounts[idx] = val + 1;
    return acc;
  }, {
    groupLabels: [],
    groupCounts: []
  });
};