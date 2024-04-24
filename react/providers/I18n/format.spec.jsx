import { initFormat, formatLocallyDistanceToNow } from './format'

describe('initFormat', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
  })
  afterEach(() => {
    console.warn.mockRestore()
  })
  it('should not throw if a date-fns locale can not be found', () => {
    expect(() => initFormat('unknown-lang', 'unknown-default')).not.toThrow()
  })
})

describe('formatLocallyDistanceToNow', () => {
  it('should formatDistanceToNow with small value', () => {
    const date = Date.now() + 29 * 1000 // 29s

    const result = formatLocallyDistanceToNow(date)

    expect(result).toEqual('less than a minute')
  })

  it('should formatDistanceToNow with medium value', () => {
    const date = Date.now() + (44 * 60 + 31) * 1000 // 44min 31s

    const result = formatLocallyDistanceToNow(date)

    expect(result).toEqual('about 1 hour')
  })

  it('should formatDistanceToNow with high value', () => {
    const date = Date.now() + (89 * 60 + 31) * 1000 // 89min 31s

    const result = formatLocallyDistanceToNow(date)

    expect(result).toEqual('about 2 hours')
  })

  it('should formatDistanceToNow with very high value', () => {
    const date = Date.now() + 42 * 24 * 60 * 60 * 1000 // 42d

    const result = formatLocallyDistanceToNow(date)

    expect(result).toEqual('about 1 month')
  })
})
