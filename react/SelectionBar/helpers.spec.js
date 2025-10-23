import { computeMaxAction } from './helpers'

describe('computeMaxAction', () => {
  it('should return maxAction directly if it is a number', () => {
    expect(computeMaxAction(3)).toBe(3)
  })

  it('should return isMedium maximum if the corresponding breakpoint is true', () => {
    expect(
      computeMaxAction(
        {
          isLarge: 4,
          isMedium: 3,
          isSmall: 2,
          isTiny: 1
        },
        {
          isLarge: false,
          isMedium: true,
          isSmall: true
        }
      )
    ).toBe(3)
  })

  it('should return an undefined value if no breakpoint matches maximum values', () => {
    expect(
      computeMaxAction(
        {
          isLarge: 4,
          isMedium: 3,
          isSmall: 2,
          isTiny: 1
        },
        {
          isLarge: false,
          isMedium: false
        }
      )
    ).toBe(undefined)
  })

  it('should return undefined when there is no breakpoint', () => {
    expect(
      computeMaxAction({
        isLarge: 4
      })
    ).toBe(undefined)
  })

  it('should return an undefined value when maxAction is null', () => {
    expect(computeMaxAction(null)).toBe(undefined)
  })
})
