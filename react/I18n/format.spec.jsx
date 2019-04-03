import { initFormat } from './format'

describe('initFormat', () => {
  it('should not throw if a date-fns locale can not be found', () => {
    expect(() => initFormat('unknown-lang', 'unknown-default')).not.toThrow()
  })
})
