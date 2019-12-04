import { sortLastNameFirst, sortHeaders } from './helpers'
describe('Sort contacts', () => {
  describe('By Last Name', () => {
    test('should sort contact by last name', () => {
      const contacts = [
        { name: { givenName: '', familyName: '' } },
        { name: { givenName: 'A', familyName: 'A' } },
        { name: { givenName: 'B', familyName: 'A' } },
        { name: { givenName: 'A', familyName: 'B' } },
        { name: { givenName: 'B', familyName: 'B' } },
        { name: { givenName: 'A', familyName: '' } },
        { name: { givenName: 'B', familyName: '' } },
        { name: { givenName: 'A', familyName: 'C' } },
        { name: { givenName: 'C', familyName: 'B' } },
        { name: { givenName: 'B', familyName: 'C' } },
        { name: { givenName: '', familyName: 'B' } },
        { name: { givenName: '', familyName: 'A' } }
      ]
      const sortedContact = [...contacts].sort(sortLastNameFirst)
      expect(sortedContact).toEqual([
        { name: { givenName: '', familyName: '' } },
        { name: { givenName: '', familyName: 'A' } },
        { name: { givenName: 'A', familyName: '' } },
        { name: { givenName: 'A', familyName: 'A' } },
        { name: { givenName: 'B', familyName: 'A' } },
        { name: { givenName: '', familyName: 'B' } },
        { name: { givenName: 'B', familyName: '' } },
        { name: { givenName: 'A', familyName: 'B' } },
        { name: { givenName: 'B', familyName: 'B' } },
        { name: { givenName: 'C', familyName: 'B' } },
        { name: { givenName: 'A', familyName: 'C' } },
        { name: { givenName: 'B', familyName: 'C' } }
      ])
    })
    test('should work with incomplete data', () => {
      const contacts = [
        { name: { givenName: '' } },
        { name: { givenName: 'A' } },
        { name: { givenName: 'A', familyName: 'A' } },
        { name: { givenName: 'B', familyName: 'A' } },
        { name: { familyName: 'B' } },
        { name: { familyName: 'C' } },
        { name: { givenName: 'B', familyName: 'B' } },
        { name: { givenName: 'A', familyName: '' } },
        { name: { givenName: 'B', familyName: '' } },
        { name: { givenName: 'A', familyName: 'C' } },
        { name: { givenName: 'C', familyName: 'B' } },
        { name: { givenName: 'B', familyName: 'C' } },
        { name: { givenName: '', familyName: 'B' } },
        { name: { givenName: '', familyName: 'A' } }
      ]
      const sortedContact = [...contacts].sort(sortLastNameFirst)
      expect(sortedContact).toEqual([
        { name: { givenName: '' } },
        { name: { givenName: '', familyName: 'A' } },
        { name: { givenName: 'A' } },
        { name: { givenName: 'A', familyName: '' } },
        { name: { givenName: 'A', familyName: 'A' } },
        { name: { givenName: 'B', familyName: 'A' } },
        { name: { familyName: 'B' } },
        { name: { givenName: '', familyName: 'B' } },
        { name: { givenName: 'B', familyName: '' } },
        { name: { givenName: 'B', familyName: 'B' } },
        { name: { givenName: 'C', familyName: 'B' } },
        { name: { familyName: 'C' } },
        { name: { givenName: 'A', familyName: 'C' } },
        { name: { givenName: 'B', familyName: 'C' } }
      ])
    })
  })
})

describe('sortHeaders', () => {
  it('should return headers sorted', () => {
    const contacts = {
      F: [],
      B: [],
      H: []
    }

    const sortedHeaders = sortHeaders(contacts)

    expect(sortedHeaders).toEqual(['B', 'F', 'H'])
  })

  it('should put EMPTY header first', () => {
    const contacts = {
      F: [],
      B: [],
      H: [],
      EMPTY: []
    }

    const sortedHeaders = sortHeaders(contacts)

    expect(sortedHeaders).toEqual(['EMPTY', 'B', 'F', 'H'])
  })
})
