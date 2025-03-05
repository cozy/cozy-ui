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

  it('should use the correct locale', () => {
    const f = initFormat('fr', 'en')
    const date = f(0, 'yyyy-LLLL-dd')
    expect(date).toBe('1970-janvier-01')
  })

  it('should use the correct default locale if user locale can not be found', () => {
    const f = initFormat('it', 'fr')
    const date = f(0, 'yyyy-LLLL-dd')
    expect(date).toBe('1970-janvier-01')
  })

  it('should fallback english if user locale and default locale can not be found', () => {
    const f = initFormat('unknown-lang', 'unknown-default')
    const date = f(0, 'yyyy-LLLL-dd')
    expect(date).toBe('1970-January-01')
  })
})

describe('formatLocallyDistanceToNow', () => {
  beforeEach(() => {
    // To avoid currentLocale set to 'fr' because of previous tests
    const f = initFormat('en')
    f(0, 'yyyy-LLLL-dd')
  })

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
