import { cleanFormattedAddress } from 'cozy-client/dist/models/contact'

/**
 * Make formatted address
 * @param {{ name: string, value: string }[]} subFieldsState - State of address sub fields
 * @returns {string} - Formatted address
 */
export const makeFormattedAddressWithSubFields = (subFieldsState, t) => {
  const normalizedAddress = subFieldsState.reduce((acc, curr) => {
    const key = curr.name
      .split('.')
      .pop()
      .replace(/address/, '')

    return {
      ...acc,
      [key]: curr.value || ''
    }
  }, {})

  return cleanFormattedAddress(t('formatted.address', normalizedAddress))
}
