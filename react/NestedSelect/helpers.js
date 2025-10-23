/**
 * @param {import('../types').NestedSelectOption} options
 * @param {boolean} canSelectParent
 * @returns {import('../types').NestedSelectOption[]}
 */
export const makeHistory = (options, canSelectParent) => {
  if (!options) return []

  const focusedId = options.focusedId ?? null
  if (!focusedId) return [options]

  const result = []
  const findElement = opts => {
    const itemFound = opts.children?.some(
      child => child.id === focusedId || findElement(child)
    )
    if (itemFound) {
      if (canSelectParent) {
        const item = opts.children.find(child => child.id === focusedId)
        if (item?.children) result.push(item)
      }
      result.push(opts)
      return true
    }
    return false
  }
  findElement(options)

  if (result.length === 0) {
    console.log('No item found with id', focusedId)
    result.push(options)
  }

  return result
}
