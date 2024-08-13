/**
 * Compute the maximum number of actions to display according to the breakpoint
 * @param {number|object} maxAction an number or a set of maximum for each breakpoint
 * @param {object} breakpoints a set of breakpoints with a boolean to know if it is active or not
 * @returns the maximum number or undefined if there is no matching result
 */
export function computeMaxAction(maxAction, breakpoints) {
  if (typeof maxAction === 'object' && maxAction !== null && breakpoints) {
    const maxActionKeys = Object.keys(maxAction)
    const currentMaxAction = Object.keys(breakpoints)
      .filter(key => breakpoints[key])
      .filter(key => maxActionKeys.includes(key))

    if (currentMaxAction.length > 0) {
      return maxAction[currentMaxAction[0]]
    }
  }

  if (typeof maxAction === 'number') return maxAction

  return undefined
}
