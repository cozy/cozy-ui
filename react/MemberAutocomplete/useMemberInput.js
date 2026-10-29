import {
  getUnpickedMembers,
  isEmailLike,
  makeMembersFromValue,
  resolveKnownMembers
} from './helpers'

/**
 * Turns the typed text into members on Enter, Space, paste and blur. A text giving no member
 * stays typed, and a member for a suggested or picked person is replaced by it.
 *
 * @param {object} params
 * @param {string} params.inputValue - Typed text
 * @param {object[]} params.value - Picked members
 * @param {object[]} params.suggestions - Suggested members
 * @param {Function} params.getMembersFromText - Turns a text into members
 * @param {Function} params.onInputValueChange - Called with the typed text
 * @param {Function} params.onChange - Called with the picked members
 */
export const useMemberInput = ({
  inputValue,
  value,
  suggestions,
  getMembersFromText,
  onInputValueChange,
  onChange
}) => {
  const getKnownMembersFromText = text =>
    resolveKnownMembers(getMembersFromText(text), [...value, ...suggestions])

  const addMembersFromText = text => {
    const members = getKnownMembersFromText(text)
    if (members.length === 0) return false

    onChange([...value, ...getUnpickedMembers(members, value)])
    return true
  }

  const handleChange = (event, newValue, reason) => {
    const typedText = newValue.find(item => typeof item === 'string')
    const isUnknownText =
      typedText !== undefined && getKnownMembersFromText(typedText).length === 0
    if (isUnknownText) return

    onChange(makeMembersFromValue(newValue, getKnownMembersFromText))
    if (reason !== 'remove-option') onInputValueChange('')
  }

  // The Autocomplete resets the text whenever `value` is a new array, even with the same members
  const handleInputChange = (event, newInputValue, reason) => {
    if (reason !== 'reset') onInputValueChange(newInputValue)
  }

  const handleKeyDown = event => {
    if (event.key === ' ' && addMembersFromText(inputValue)) {
      event.preventDefault()
      onInputValueChange('')
    }
  }

  const handlePaste = event => {
    if (addMembersFromText(event.clipboardData.getData('text'))) {
      event.preventDefault()
    }
  }

  const handleBlur = () => {
    if (isEmailLike(inputValue) && addMembersFromText(inputValue)) {
      onInputValueChange('')
    }
  }

  return {
    handleChange,
    handleInputChange,
    handleKeyDown,
    handlePaste,
    handleBlur
  }
}
