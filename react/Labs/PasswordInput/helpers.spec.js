import { getStrength } from './helpers'

describe('getStrength', () => {
  it('should return the correct strength', () => {
    const weak = getStrength('cozy')
    expect(weak.label).toBe('weak')
    expect(weak.percentage).toBeCloseTo(12.4, 1)

    const moderate = getStrength('c0zycl0ud!;')
    expect(moderate.label).toBe('moderate')
    expect(moderate.percentage).toBeCloseTo(43.9, 1)

    const strong = getStrength('thisis4verylongp@ssword!!!')
    expect(strong.label).toBe('strong')
    expect(strong.percentage).toBe(100)

    expect(getStrength('').percentage).toBe(0)
  })

  it('should return the same strength when called multiple times with the same password', () => {
    const password = 'this1s@veRYCompl3xp4ssw0rd!'
    const strength1 = getStrength(password)
    const strength2 = getStrength(password)

    expect(strength1).toEqual(strength2)
  })
})
