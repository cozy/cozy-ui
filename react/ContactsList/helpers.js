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

export const categorizeContacts = contacts =>
  contacts.reduce((acc, contact) => {
    const name = buildLastNameFirst(contact)
    const header = name[0] || 'EMPTY'
    acc[header] = acc[header] || []
    acc[header].push(contact)
    return acc
  }, {})

export const sortHeaders = categorized => {
  const headers = Object.keys(categorized)
  const notEmptyHeaders = headers.filter(header => header !== 'EMPTY')

  const notEmptySorted = notEmptyHeaders.sort()

  if (headers.length === notEmptyHeaders.length) {
    return notEmptySorted
  }

  return ['EMPTY', ...notEmptySorted]
}
