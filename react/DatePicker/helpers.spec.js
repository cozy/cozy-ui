import { makeFormat } from './helpers'

describe('makeFormat', () => {
  describe('When lang is "fr"', () => {
    it('should return the right format for default mode', () => {
      const format = makeFormat({ lang: 'fr' })
      expect(format).toBe('dd/LL/yyyy')
    })

    it('should return the right format for time mode', () => {
      const format = makeFormat({ mode: 'time', lang: 'fr' })
      expect(format).toBe('HH:mm')
    })

    it('should return the right format for dateTime mode', () => {
      const format = makeFormat({ mode: 'dateTime', lang: 'fr' })
      expect(format).toBe('dd/LL/yyyy HH:mm')
    })

    describe('When ampm is true', () => {
      it('should return the right format for default mode', () => {
        const format = makeFormat({ ampm: true, lang: 'fr' })
        expect(format).toBe('dd/LL/yyyy')
      })

      it('should return the right format for time mode', () => {
        const format = makeFormat({ mode: 'time', ampm: true, lang: 'fr' })
        expect(format).toBe('HH:mm')
      })

      it('should return the right format for dateTime mode', () => {
        const format = makeFormat({ mode: 'dateTime', ampm: true, lang: 'fr' })
        expect(format).toBe('dd/LL/yyyy HH:mm')
      })
    })
  })

  describe.each([
    ['es', 'dd/LL/yyyy'],
    ['it', 'dd/LL/yyyy'],
    ['de', 'dd.LL.yyyy']
  ])('When lang is "%s"', (lang, dateFormat) => {
    it('should return a day-first format for default mode', () => {
      expect(makeFormat({ lang })).toBe(dateFormat)
      expect(makeFormat({ ampm: true, lang })).toBe(dateFormat)
    })

    it('should return a 24-hour format for time mode', () => {
      expect(makeFormat({ mode: 'time', lang })).toBe('HH:mm')
      expect(makeFormat({ mode: 'time', ampm: true, lang })).toBe('HH:mm')
    })

    it('should return a day-first format for dateTime mode', () => {
      expect(makeFormat({ mode: 'dateTime', ampm: true, lang })).toBe(
        `${dateFormat} HH:mm`
      )
    })
  })

  describe('When lang is "en"', () => {
    it('should return the right format for default mode', () => {
      const format = makeFormat({ lang: 'en', ampm: false })
      expect(format).toBe('LL/dd/yyyy')
    })

    it('should return the right format for time mode', () => {
      const format = makeFormat({ mode: 'time', lang: 'en' })
      expect(format).toBe('HH:mm')
    })

    it('should return the right format for dateTime mode', () => {
      const format = makeFormat({ mode: 'dateTime', lang: 'en' })
      expect(format).toBe('LL/dd/yyyy HH:mm')
    })

    describe('When ampm is true', () => {
      it('should return the right format for default mode', () => {
        const format = makeFormat({ ampm: true, lang: 'en' })
        expect(format).toBe('LL/dd/yyyy a')
      })

      it('should return the right format for time mode', () => {
        const format = makeFormat({ mode: 'time', ampm: true, lang: 'en' })
        expect(format).toBe('HH:mm a')
      })

      it('should return the right format for dateTime mode', () => {
        const format = makeFormat({ mode: 'dateTime', ampm: true, lang: 'en' })
        expect(format).toBe('LL/dd/yyyy HH:mm a')
      })
    })
  })
})
