const EMAIL_LIKE = /\S+@\S+/

const MAX_SUGGESTIONS = 20

export const isEmailLike = text => EMAIL_LIKE.test(text)

const normalizeEmail = email => email.trim().toLowerCase()

/**
 * Whether two members are the same person: same id, or same email whatever its case
 */
export const isSameMember = (member, other) =>
  member.id === other.id ||
  (Boolean(member.email) &&
    Boolean(other.email) &&
    normalizeEmail(member.email) === normalizeEmail(other.email))

export const removeDuplicateMembers = members =>
  members.filter(
    (member, index) =>
      members.findIndex(other => isSameMember(member, other)) === index
  )

export const getUnpickedMembers = (members, pickedMembers) =>
  members.filter(
    member => !pickedMembers.some(picked => isSameMember(member, picked))
  )

/**
 * Replaces each member by the known one for the same person, so that a typed email
 * gives the suggested contact rather than a second member
 *
 * @param {object[]} members - Members made from a text
 * @param {object[]} knownMembers - Picked and suggested members
 * @returns {object[]}
 */
export const resolveKnownMembers = (members, knownMembers) =>
  removeDuplicateMembers(
    members.map(
      member =>
        knownMembers.find(known => isSameMember(member, known)) ?? member
    )
  )

/**
 * Turns the value of the Autocomplete, where typed texts stay strings, into members without duplicates
 *
 * @param {Array<object|string>} value - Picked members and typed texts
 * @param {Function} getMembersFromText - Turns a text into members
 * @returns {object[]}
 */
export const makeMembersFromValue = (value, getMembersFromText) =>
  removeDuplicateMembers(
    value.flatMap(item =>
      typeof item === 'string' ? getMembersFromText(item) : [item]
    )
  )

/**
 * Members to suggest: the matching ones without duplicates, else the ones made from the text
 *
 * @param {object[]} matchingSuggestions - Fetched then local members matching the text
 * @param {object[]} textSuggestions - Members made from the text
 * @returns {object[]}
 */
export const makeSuggestions = (matchingSuggestions, textSuggestions) =>
  (matchingSuggestions.length > 0
    ? removeDuplicateMembers(matchingSuggestions)
    : textSuggestions
  ).slice(0, MAX_SUGGESTIONS)
