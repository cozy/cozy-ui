import { sortLastNameFirst, sortHeaders, categorizeContacts } from './helpers'

describe('Sort contacts', () => {
  describe('By Last Name', () => {
    it('should sort contact by last name', () => {
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
        { name: { givenName: 'A', familyName: '' } },
        { name: { givenName: '', familyName: 'A' } },
        { name: { givenName: 'A', familyName: 'A' } },
        { name: { givenName: 'B', familyName: 'A' } },
        { name: { givenName: 'B', familyName: '' } },
        { name: { givenName: '', familyName: 'B' } },
        { name: { givenName: 'A', familyName: 'B' } },
        { name: { givenName: 'B', familyName: 'B' } },
        { name: { givenName: 'C', familyName: 'B' } },
        { name: { givenName: 'A', familyName: 'C' } },
        { name: { givenName: 'B', familyName: 'C' } }
      ])
    })

    it('should work with incomplete data', () => {
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
        { name: { givenName: 'A' } },
        { name: { givenName: 'A', familyName: '' } },
        { name: { givenName: '', familyName: 'A' } },
        { name: { givenName: 'A', familyName: 'A' } },
        { name: { givenName: 'B', familyName: 'A' } },
        { name: { familyName: 'B' } },
        { name: { givenName: 'B', familyName: '' } },
        { name: { givenName: '', familyName: 'B' } },
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
  const t = jest.fn(x => x)
  it('should return headers sorted', () => {
    const contacts = {
      F: [],
      B: [],
      H: []
    }

    const sortedHeaders = sortHeaders(contacts, t)

    expect(sortedHeaders).toEqual(['B', 'F', 'H'])
  })

  it('Should sort in the following order "me", "empty", "A", "..."', () => {
    const contacts = {
      F: [],
      B: [],
      me: [],
      H: [],
      empty: []
    }

    const sortedHeaders = sortHeaders(contacts, t)

    expect(sortedHeaders).toEqual(['me', 'empty', 'B', 'F', 'H'])
  })
})

describe('categorizeContacts', () => {
  const t = jest.fn(() => 'EMPTY')
  it('should categorize contacts by indexes.byFamilyNameGivenNameEmailCozyUrl', () => {
    const contacts = [
      { name: 'Alex', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'A' } },
      { name: 'Alan', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'A' } },
      { name: 'Cleo', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'C' } },
      { name: 'Bernard', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'B' } },
      { name: 'Xavier', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'X' } },
      { name: 'Zorro', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'Z' } },
      { name: '', indexes: { byFamilyNameGivenNameEmailCozyUrl: '' } },
      { name: {}, indexes: { byFamilyNameGivenNameEmailCozyUrl: {} } },
      { name: 'John', indexes: { byFamilyNameGivenNameEmailCozyUrl: null } },
      { name: 'Àlbert', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'À' } },
      { name: 'Èllen', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'È' } }
    ]
    const categorizedContacts = categorizeContacts(contacts, t)
    expect(categorizedContacts).toEqual({
      A: [
        { indexes: { byFamilyNameGivenNameEmailCozyUrl: 'A' }, name: 'Alex' },
        { indexes: { byFamilyNameGivenNameEmailCozyUrl: 'A' }, name: 'Alan' },
        { indexes: { byFamilyNameGivenNameEmailCozyUrl: 'À' }, name: 'Àlbert' }
      ],
      B: [
        { indexes: { byFamilyNameGivenNameEmailCozyUrl: 'B' }, name: 'Bernard' }
      ],
      C: [
        { indexes: { byFamilyNameGivenNameEmailCozyUrl: 'C' }, name: 'Cleo' }
      ],
      E: [
        { indexes: { byFamilyNameGivenNameEmailCozyUrl: 'È' }, name: 'Èllen' }
      ],
      EMPTY: [
        { indexes: { byFamilyNameGivenNameEmailCozyUrl: '' }, name: '' },
        { indexes: { byFamilyNameGivenNameEmailCozyUrl: {} }, name: {} },
        { indexes: { byFamilyNameGivenNameEmailCozyUrl: null }, name: 'John' }
      ],
      X: [
        { indexes: { byFamilyNameGivenNameEmailCozyUrl: 'X' }, name: 'Xavier' }
      ],
      Z: [
        { indexes: { byFamilyNameGivenNameEmailCozyUrl: 'Z' }, name: 'Zorro' }
      ]
    })
  })
})
