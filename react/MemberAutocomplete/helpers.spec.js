import {
  isSameMember,
  makeMembersFromValue,
  resolveKnownMembers
} from './helpers'

describe('isSameMember', () => {
  it('matches the same id or the same email whatever its case', () => {
    const alice = { id: 'alice', email: 'Alice@cozy.cc' }

    expect(isSameMember(alice, { id: 'alice' })).toBe(true)
    expect(isSameMember(alice, { id: 'other', email: 'alice@cozy.cc ' })).toBe(
      true
    )
    expect(isSameMember(alice, { id: 'bob', email: 'bob@cozy.cc' })).toBe(false)
    expect(isSameMember({ id: 'alice' }, { id: 'bob' })).toBe(false)
    expect(
      isSameMember({ id: 'alice', email: '' }, { id: 'bob', email: '' })
    ).toBe(false)
  })
})

describe('resolveKnownMembers', () => {
  it('replaces the members of known people and removes the duplicates', () => {
    const alice = { id: 'alice', email: 'alice@cozy.cc' }
    const typed = [
      { id: 'alice@cozy.cc', email: 'alice@cozy.cc' },
      { id: 'bob@cozy.cc', email: 'bob@cozy.cc' },
      { id: 'ALICE@cozy.cc', email: 'ALICE@cozy.cc' }
    ]

    expect(resolveKnownMembers(typed, [alice])).toEqual([
      alice,
      { id: 'bob@cozy.cc', email: 'bob@cozy.cc' }
    ])
  })
})

describe('makeMembersFromValue', () => {
  const getMembersFromText = text =>
    text.split(',').map(email => ({ id: email.trim() }))

  it('turns the typed texts into members and removes the duplicates', () => {
    const value = [{ id: 'alice@cozy.cc' }, 'bob@cozy.cc, alice@cozy.cc']

    expect(makeMembersFromValue(value, getMembersFromText)).toEqual([
      { id: 'alice@cozy.cc' },
      { id: 'bob@cozy.cc' }
    ])
  })
})
