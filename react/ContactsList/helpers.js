export function buildLastNameFirst(contact) {
  const givenName =
    contact.name && contact.name.givenName
      ? contact.name.givenName.toUpperCase()
      : ''
  const familyName =
    contact.name && contact.name.familyName
      ? contact.name.familyName.toUpperCase()
      : ''

  if (!givenName && !familyName && contact.fullname) {
    return contact.fullname.toUpperCase().trim()
  } else {
    return `${familyName} ${givenName}`.trim()
  }
}

export const sortLastNameFirst = (contact, comparedContact) => {
  const nameA = buildLastNameFirst(contact)
  const nameB = buildLastNameFirst(comparedContact)
  return nameA.localeCompare(nameB)
}

export const sortContacts = contacts => contacts.sort(sortLastNameFirst)

/**
 * Build header for a contact (first letter of last name)
 * @param {object} contact
 * @param {function} t translation function
 * @returns {string} header
 */
const makeHeader = (contact, t) => {
  if (contact.me) return t('me')

  const name = buildLastNameFirst(contact)
  return name[0] || t('empty')
}

/**
 * @typedef {Object.<string, Object>} CategorizedContactsResult
 */

/**
 * Categorize contacts by first letter of last name
 * @param {object[]} contacts io.cozy.contacts documents
 * @param {function} t translation function
 * @returns {CategorizedContactsResult}
 */
export const categorizeContacts = (contacts, t) =>
  contacts.reduce((acc, contact) => {
    const header = makeHeader(contact, t)
    acc[header] = acc[header] || []
    acc[header].push(contact)
    return acc
  }, {})

/**
 * Sort headers (first letter of last name) alphabetically and put 'me' and 'empty' first
 * @param {CategorizedContactsResult} categorized categorized contacts
 * @param {function} t translation function
 * @returns {string[]}
 */
export const sortHeaders = (categorized, t) => {
  const headers = Object.keys(categorized)
  const notEmptyAndMyselfHeaders = headers.filter(
    header => header !== t('empty') && header !== t('me')
  )
  const notEmptyAndMyselfSorted = notEmptyAndMyselfHeaders.slice().sort()

  if (headers.length === notEmptyAndMyselfHeaders.length) {
    return notEmptyAndMyselfSorted
  }

  const headersSorted = []
  if (headers.includes(t('me'))) {
    headersSorted.push(t('me'))
  }
  if (headers.includes(t('empty'))) {
    headersSorted.push(t('empty'))
  }

  return headersSorted.concat(notEmptyAndMyselfSorted)
}
