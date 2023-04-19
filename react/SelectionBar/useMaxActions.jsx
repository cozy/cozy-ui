import { useState } from 'react'
import throttle from 'lodash/throttle'

import breakpointDefs, { getBreakpointsStatus } from '../helpers/breakpoints'
import useEventListener from '../hooks/useEventListener'
import { computeMaxAction } from './helpers'

const huge = 1400
const large = 1200

const breakpoints = {
  isHuge: [large + 1, huge],
  ...breakpointDefs
}

const getCurrentMaxAction = maxAction =>
  computeMaxAction(maxAction, getBreakpointsStatus(breakpoints))

/**
 * Compute the maximum number of actions to display according to the breakpoint
 * @param {number|object} maxAction an number or a set of maximum for each breakpoint
 * @returns the maximum number or undefined if there is no matching result
 */
const useMaxActions = maxAction => {
  const [currentMax, setCurrentMax] = useState(getCurrentMaxAction(maxAction))

  const handleResize = throttle(() => {
    setCurrentMax(getCurrentMaxAction(maxAction))
  }, 100)

  useEventListener(window, 'resize', handleResize)

  return currentMax
}

export default useMaxActions
