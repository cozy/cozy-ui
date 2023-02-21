import mapValues from 'lodash/mapValues'

const large = 1200
const medium = 1023
const small = 768
const tiny = 543

const breakpoints = {
  isExtraLarge: [large + 1],
  isLarge: [medium + 1, large],
  isMedium: [small + 1, medium],
  isSmall: [tiny + 1, small],
  isTiny: [0, tiny],
  isDesktop: [medium + 1],
  isTablet: [small + 1, medium],
  isMobile: [0, small]
}

export const getBreakpointsStatus = breakpoints => {
  const width = window.innerWidth
  return mapValues(
    breakpoints,
    ([min, max]) => width >= min && (max === undefined || width <= max)
  )
}

export default breakpoints
