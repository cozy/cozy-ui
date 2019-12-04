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
