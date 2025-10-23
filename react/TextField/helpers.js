/**
 * Add or Remove a value inside an array
 * @param {array} arr
 * @param {string} value
 * @returns
 */
export const toggleInArray = (arr, value) => {
  const s = new Set(arr)
  if (s.has(value)) {
    s.delete(value)
  } else {
    s.add(value)
  }
  return Array.from(s)
}

/**
 * @param {array} options
 * @param {string} value
 * @returns
 */
export const getLabelByValue = (options, value) =>
  options.find(option => option.value === value)?.label
