import MockDate from 'mockdate'

import {
  initFormat,
  formatLocallyDistanceToNow,
  formatLocallyDistanceToNowStrict
} from './format'

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

describe('formatLocallyDistanceToNowStrict', () => {
  it('should formatDistanceToNowStrict with small value', () => {
    const date = Date.now() + 29 * 1000 // 29s

    const result = formatLocallyDistanceToNowStrict(date)

    expect(result).toEqual('29 seconds')
  })

  it('should formatDistanceToNowStrict with medium value', () => {
    const date = Date.now() + (44 * 60 + 31) * 1000 // 44min 31s

    const result = formatLocallyDistanceToNowStrict(date)

    expect(result).toEqual('44 minutes')
  })

  it('should formatDistanceToNowStrict with high value', () => {
    const date = Date.now() + (89 * 60 + 31) * 1000 // 89min 31s

    const result = formatLocallyDistanceToNowStrict(date)

    expect(result).toEqual('1 hour')
  })

  it('should formatDistanceToNowStrict with one day', () => {
    const date = Date.now() + 24 * 60 * 60 * 1000 // 1d

    const result = formatLocallyDistanceToNowStrict(date)

    expect(result).toEqual('1 day')
  })

  it('should formatDistanceToNowStrict with two days', () => {
    const date = Date.now() + 2 * 24 * 60 * 60 * 1000 // 2d

    const result = formatLocallyDistanceToNowStrict(date)

    expect(result).toEqual('2 days')
  })

  it('should formatDistanceToNowStrict with very high value', () => {
    const date = Date.now() + 42 * 24 * 60 * 60 * 1000 // 42d

    const result = formatLocallyDistanceToNowStrict(date)

    expect(result).toEqual('1 month')
  })

  describe('for hours', () => {
    afterEach(() => {
      MockDate.reset()
    })

    it('should return 1 hour', () => {
      MockDate.set('2023-01-01T00:00:00')
      const date = new Date('2023-01-01T01:00:00')

      const result = formatLocallyDistanceToNowStrict(date)

      expect(result).toEqual('1 hour')
    })

    it('should return 23 hours', () => {
      MockDate.set('2023-01-01T00:00:10')
      const date = new Date('2023-01-01T23:59:00')

      const result = formatLocallyDistanceToNowStrict(date)

      expect(result).toEqual('23 hours')
    })

    it('should return 11 hours', () => {
      MockDate.set('2023-01-01T12:00:10')
      const date = new Date('2023-01-01T23:59:00')

      const result = formatLocallyDistanceToNowStrict(date)

      expect(result).toEqual('11 hours')
    })
  })

  describe('for days', () => {
    describe('at midnight', () => {
      beforeEach(() => {
        MockDate.set('2023-01-01T00:00:01')
      })

      afterEach(() => {
        MockDate.reset()
      })

      it('should return 1 day when 00:00:00', () => {
        const date = new Date('2023-01-02T00:00:00')

        const result = formatLocallyDistanceToNowStrict(date)

        expect(result).toEqual('1 day')
      })

      it('should return 1 day when 01:00:00', () => {
        const date = new Date('2023-01-02T01:00:00')

        const result = formatLocallyDistanceToNowStrict(date)

        expect(result).toEqual('1 day')
      })

      it('should return 1 day when 23:59:00', () => {
        const date = new Date('2023-01-02T23:59:00')

        const result = formatLocallyDistanceToNowStrict(date)

        expect(result).toEqual('1 day')
      })

      it('should return 2 days when 00:00:00', () => {
        const date = new Date('2023-01-03T00:00:00')

        const result = formatLocallyDistanceToNowStrict(date)

        expect(result).toEqual('2 days')
      })

      it('should return 2 days when 01:00:00', () => {
        const date = new Date('2023-01-03T01:00:00')

        const result = formatLocallyDistanceToNowStrict(date)

        expect(result).toEqual('2 days')
      })

      it('should return 2 days when 23:59:00', () => {
        const date = new Date('2023-01-03T23:59:00')

        const result = formatLocallyDistanceToNowStrict(date)

        expect(result).toEqual('2 days')
      })
    })

    describe('at midday', () => {
      beforeEach(() => {
        MockDate.set('2023-01-01T12:00:10')
      })

      afterEach(() => {
        MockDate.reset()
      })

      it('should return 1 day when 00:00:00', () => {
        const date = new Date('2023-01-02T00:00:00')

        const result = formatLocallyDistanceToNowStrict(date)

        expect(result).toEqual('1 day')
      })

      it('should return 1 day when 11:00:00', () => {
        const date = new Date('2023-01-02T11:00:00')

        const result = formatLocallyDistanceToNowStrict(date)

        expect(result).toEqual('1 day')
      })

      it('should return 1 day when 23:59:00', () => {
        const date = new Date('2023-01-02T23:59:00')

        const result = formatLocallyDistanceToNowStrict(date)

        expect(result).toEqual('1 day')
      })

      it('should return 2 days when 00:00:00', () => {
        const date = new Date('2023-01-03T00:00:00')

        const result = formatLocallyDistanceToNowStrict(date)

        expect(result).toEqual('2 days')
      })

      it('should return 2 days when 01:00:00', () => {
        const date = new Date('2023-01-03T01:00:00')

        const result = formatLocallyDistanceToNowStrict(date)

        expect(result).toEqual('2 days')
      })

      it('should return 2 days when 23:59:00', () => {
        const date = new Date('2023-01-03T23:59:00')

        const result = formatLocallyDistanceToNowStrict(date)

        expect(result).toEqual('2 days')
      })
    })
  })
})
