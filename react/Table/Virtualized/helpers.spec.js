import { stableSort, getComparator } from './helpers'

describe('stableSort', () => {
  describe('it should sort string correctly even with number', () => {
    const rows = [
      { name: 'b' },
      { name: 'A' },
      { name: 'B' },
      { name: 'a' },
      { name: '10' }
    ]

    it('for asc', () => {
      const sortedData = stableSort(rows, getComparator('asc', 'name', 'fr'))

      const onlyValues = sortedData.map(el => el.name)
      expect(onlyValues).toStrictEqual(['A', 'a', 'B', 'b', '10'])
    })

    it('for desc', () => {
      const sortedData = stableSort(rows, getComparator('desc', 'name', 'fr'))

      const onlyValues = sortedData.map(el => el.name)
      expect(onlyValues).toStrictEqual(['B', 'b', 'A', 'a', '10'])
    })
  })

  describe('it should sort number correctly', () => {
    const rows = [
      { number: 40 },
      { number: 1 },
      { number: 8 },
      { number: 30 },
      { number: 40 }
    ]

    it('for asc', () => {
      const sortedData = stableSort(rows, getComparator('asc', 'number', 'fr'))

      const onlyValues = sortedData.map(el => el.number)
      expect(onlyValues).toStrictEqual([1, 8, 30, 40, 40])
    })

    it('for desc', () => {
      const sortedData = stableSort(rows, getComparator('desc', 'number', 'fr'))

      const onlyValues = sortedData.map(el => el.number)
      expect(onlyValues).toStrictEqual([40, 40, 30, 8, 1])
    })
  })

  describe('it should sort string-number correctly', () => {
    const rows = [
      { number: '40' },
      { number: '1' },
      { number: '8' },
      { number: '30' },
      { number: '40' }
    ]

    it('for asc', () => {
      const sortedData = stableSort(rows, getComparator('asc', 'number', 'fr'))

      const onlyValues = sortedData.map(el => el.number)
      expect(onlyValues).toStrictEqual(['1', '8', '30', '40', '40'])
    })

    it('for desc', () => {
      const sortedData = stableSort(rows, getComparator('desc', 'number', 'fr'))

      const onlyValues = sortedData.map(el => el.number)
      expect(onlyValues).toStrictEqual(['40', '40', '30', '8', '1'])
    })
  })

  describe('it should sort date correctly', () => {
    const rows = [
      { date: '2025-05-01T12:00:00.0000+01:00' },
      { date: '2025-08-01T12:00:00.0000+01:00' },
      { date: '2025-01-01T12:00:00.0000+01:00' },
      { date: '2025-04-01T12:00:00.0000+01:00' }
    ]

    it('for asc', () => {
      const sortedData = stableSort(rows, getComparator('asc', 'date', 'fr'))

      const onlyValues = sortedData.map(el => el.date)
      expect(onlyValues).toStrictEqual([
        '2025-01-01T12:00:00.0000+01:00',
        '2025-04-01T12:00:00.0000+01:00',
        '2025-05-01T12:00:00.0000+01:00',
        '2025-08-01T12:00:00.0000+01:00'
      ])
    })

    it('for desc', () => {
      const sortedData = stableSort(rows, getComparator('desc', 'date', 'fr'))

      const onlyValues = sortedData.map(el => el.date)
      expect(onlyValues).toStrictEqual([
        '2025-08-01T12:00:00.0000+01:00',
        '2025-05-01T12:00:00.0000+01:00',
        '2025-04-01T12:00:00.0000+01:00',
        '2025-01-01T12:00:00.0000+01:00'
      ])
    })
  })
})
