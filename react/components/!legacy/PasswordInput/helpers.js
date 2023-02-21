const charsets = [
  // upper
  { regexp: /[A-Z]/, size: 26 },
  // lower
  { regexp: /[a-z]/, size: 26 },
  // digit
  { regexp: /[0-9]/, size: 10 },
  // special
  { regexp: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, size: 30 }
]

/*
 * Returns the strength (percentage and label) of a given password
 *
 * @param {String} password
 * @returns {Object} An object with percentage and label properties
 * representing the strength of the password
 */
export const getStrength = password => {
  if (!password && password !== '') {
    throw new Error('password parameter is missing')
  }
  if (!password.length) {
    return { percentage: 0, label: 'weak' }
  }

  const possibleChars = charsets.reduce((possibleChars, charset) => {
    if (charset.regexp.test(password)) {
      return possibleChars + charset.size
    }
    return possibleChars
  }, 0)

  const passwordStrength =
    Math.log(Math.pow(possibleChars, password.length)) / Math.log(2)

  // levels
  const _at33percent = 50
  const _at66percent = 100
  const _at100percent = 150

  let strengthLabel = ''
  let strengthPercentage = 0

  // between 0% and 33%
  if (passwordStrength <= _at33percent) {
    strengthPercentage = (passwordStrength * 33) / _at33percent
    strengthLabel = 'weak'
  } else if (
    passwordStrength > _at33percent &&
    passwordStrength <= _at66percent
  ) {
    // between 33% and 66%
    strengthPercentage = (passwordStrength * 66) / _at66percent
    strengthLabel = 'moderate'
  } else {
    // passwordStrength > 192
    strengthPercentage = (passwordStrength * 100) / _at100percent
    if (strengthPercentage > 100) {
      strengthPercentage = 100
    }
    strengthLabel = 'strong'
  }

  return { percentage: strengthPercentage, label: strengthLabel }
}
