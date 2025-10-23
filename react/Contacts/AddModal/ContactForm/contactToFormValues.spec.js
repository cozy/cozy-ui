/* eslint-disable jest/no-focused-tests */
import contactToFormValues from './contactToFormValues'
import { johnDoeContact, johnDoeFormValues } from '../mocks'

describe('contactToFormValues function', () => {
  const tSpy = jest.fn()

  it('should return default initial values', () => {
    const expected = {
      address: [undefined],
      birthday: undefined,
      birthplace: undefined,
      gender: undefined,
      company: undefined,
      jobTitle: undefined,
      cozy: undefined,
      cozyLabel: undefined,
      email: [undefined],
      matrix: undefined,
      familyName: undefined,
      givenName: undefined,
      note: undefined,
      phone: [undefined],
      relatedContact: [undefined]
    }

    const result = contactToFormValues({ contact: null, t: tSpy })
    expect(result).toEqual(expected)
  })

  it('should return initial values when a contact is given (edit)', () => {
    const expected = { ...johnDoeFormValues, relatedContact: [undefined] }
    tSpy.mockReturnValue(
      '426 Runolfsson Knolls 84573 Port Easter Cocos (Keeling) Islands'
    )

    const result = contactToFormValues({ contact: johnDoeContact, t: tSpy })
    expect(result).toEqual(expected)
    expect(tSpy).toHaveBeenCalledWith('formatted.address', {
      street: '426 Runolfsson Knolls',
      code: '84573',
      number: '',
      city: 'Port Easter',
      region: '',
      country: 'Cocos (Keeling) Islands'
    })
  })

  it('should return initial values when a contact with missing fields is given', () => {
    const contact = {
      id: '9ecfbf4b-20e7-4bac-87f1-eea53350857d',
      _id: '9ecfbf4b-20e7-4bac-87f1-eea53350857d',
      _type: 'io.cozy.contacts',
      _rev: '1-19c313536e8b27473aa26bf105b03269',
      address: [],
      birthday: undefined,
      birthplace: 'somewhere',
      gender: 'female',
      company: undefined,
      jobTitle: undefined,
      cozy: undefined,
      email: undefined,
      impp: undefined,
      name: {
        givenName: 'Jane',
        familyName: 'Doe'
      },
      note: undefined,
      phone: []
    }
    const expected = {
      address: [undefined],
      birthday: undefined,
      birthplace: 'somewhere',
      gender: 'female',
      company: undefined,
      jobTitle: undefined,
      cozy: undefined,
      cozyLabel: undefined,
      email: [undefined],
      matrix: undefined,
      givenName: 'Jane',
      familyName: 'Doe',
      note: undefined,
      phone: [undefined],
      relatedContact: [undefined]
    }

    const result = contactToFormValues({ contact, t: tSpy })
    expect(result).toEqual(expected)
  })

  it('should not crash if name is undefined (contacts created via sharing)', () => {
    const contact = {
      id: '9ecfbf4b-20e7-4bac-87f1-eea53350857d',
      _id: '9ecfbf4b-20e7-4bac-87f1-eea53350857d',
      _type: 'io.cozy.contacts',
      _rev: '1-19c313536e8b27473aa26bf105b03269',
      address: [],
      birthday: undefined,
      birthplace: '',
      gender: '',
      company: undefined,
      jobTitle: undefined,
      cozy: undefined,
      email: undefined,
      impp: undefined,
      name: undefined,
      note: 'Eligendi velit eos ab libero molestiae consequatur autem sed.',
      phone: []
    }
    const expected = {
      address: [undefined],
      birthday: undefined,
      birthplace: '',
      gender: '',
      company: undefined,
      jobTitle: undefined,
      cozy: undefined,
      cozyLabel: undefined,
      email: [undefined],
      matrix: undefined,
      givenName: undefined,
      familyName: undefined,
      note: 'Eligendi velit eos ab libero molestiae consequatur autem sed.',
      phone: [undefined],
      relatedContact: [undefined]
    }

    const result = contactToFormValues({ contact, t: tSpy })
    expect(result).toEqual(expected)
  })
})
