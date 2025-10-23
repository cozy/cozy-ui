import {
  sortLastNameFirst,
  sortHeaders,
  makeGroupLabelsAndCounts
} from './helpers'

const t = x => x

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

describe('makeGroupLabelsAndCounts', () => {
  it('should returns labels and counts', () => {
    const contacts = [
      { name: 'Alex', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'A' } },
      { name: 'Alan', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'A' } },
      { name: 'Cleo', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'C' } },
      { name: 'Cloé', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'C' } },
      { name: 'Clotilde', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'C' } },
      { name: 'Constant', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'C' } },
      {
        name: 'Christophe',
        indexes: { byFamilyNameGivenNameEmailCozyUrl: 'C' }
      },
      { name: 'Bernard', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'B' } },
      { name: 'Baptiste', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'B' } },
      { name: 'Xavier', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'X' } },
      { name: 'Zorro', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'Z' } },
      { name: '', indexes: { byFamilyNameGivenNameEmailCozyUrl: '' } },
      { name: {}, indexes: { byFamilyNameGivenNameEmailCozyUrl: {} } },
      { name: 'John', indexes: { byFamilyNameGivenNameEmailCozyUrl: null } },
      {
        name: 'Connor',
        indexes: { byFamilyNameGivenNameEmailCozyUrl: undefined }
      },
      { name: 'Àlbert', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'À' } },
      {
        name: 'Alice',
        me: true,
        indexes: { byFamilyNameGivenNameEmailCozyUrl: 'Alice' }
      },
      { name: 'Èllen', indexes: { byFamilyNameGivenNameEmailCozyUrl: 'È' } }
    ]

    const res = makeGroupLabelsAndCounts(contacts, t)

    expect(res).toStrictEqual({
      groupLabels: ['A', 'C', 'B', 'X', 'Z', 'empty', 'me', 'E'],
      groupCounts: [3, 5, 2, 1, 1, 4, 1, 1]
    })
  })
})
