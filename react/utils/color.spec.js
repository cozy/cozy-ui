import { getCssVariableValue } from './color'

describe('getCssVariableValue', () => {
  it('should return a mocked value in test env', () => {
    expect(getCssVariableValue('dodgerBlue')).toBe('#fff')
    expect(getCssVariableValue('whatever')).toBe('#fff')
  })
})
