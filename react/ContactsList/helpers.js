import get from 'lodash/get'

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
 * Build header for a contact (first letter of indexes.byFamilyNameGivenNameEmailCozyUrl)
 * @param {object} contact
 * @param {function} t translation function
 * @returns {string} header
 */
const makeHeaderForIndexedContacts = (contact, t) => {
  if (contact.me) return t('me')
  if (contact.cozyMetadata?.favorite) return t('favorite')

  const index = get(contact, 'indexes.byFamilyNameGivenNameEmailCozyUrl', '')
  const hasIndex = index !== null && index.length > 0

  if (hasIndex) {
    const firstLetterWithoutAccent = index[0]
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
    return firstLetterWithoutAccent
  }

  return t('empty')
}

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

/**
 * Counts how many contacts are categorized by first letter and store it in `groupCounts`
 * Expl.: if there is 3 contacts in A and 2 in B, it will return [3,2]
 * Also store first letters and store them in `groupLabels`
 * @param {array} contacts - Array of io.cozy.contact documents
 * @returns {object}
 */
export const makeGroupLabelsAndCounts = (contacts, t) => {
  return contacts.reduce(
    (acc, contact) => {
      const header = makeHeaderForIndexedContacts(contact, t)
      if (!acc.groupLabels.includes(header)) {
        acc.groupLabels.push(header)
      }
      const idx = acc.groupLabels.indexOf(header)
      const val = acc.groupCounts[idx] || 0
      acc.groupCounts[idx] = val + 1
      return acc
    },
    { groupLabels: [], groupCounts: [] }
  )
}
