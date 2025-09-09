import Polyglot from 'node-polyglot'

import { updateIndexFullNameAndDisplayName } from 'cozy-client/dist/models/contact'

import formValuesToContact from './formValuesToContact'
import en from './locales/en.json'
import { johnDoeFormValues, johnDoeContact } from '../mocks'

const polyglot = new Polyglot()
polyglot.extend(en)
const t = polyglot.t.bind(polyglot)

describe('formValuesToContact', () => {
  it('should convert form values to contact when creating a contact', () => {
    const expected = {
      address: [
        {
          formattedAddress: '94 Hinton Road 05034 Fresno, Singapore',
          city: undefined,
          code: undefined,
          region: undefined,
          country: undefined,
          extendedAddress: {
            apartment: undefined,
            floor: undefined,
            locality: undefined,
            stairs: undefined,
            entrycode: undefined,
            building: undefined
          },
          number: undefined,
          street: '94 Hinton Road 05034 Fresno, Singapore',
          primary: true,
          type: 'Home',
          label: undefined
        },
        {
          formattedAddress:
            '426 Runolfsson Knolls 84573 Port Easter Cocos (Keeling) Islands',
          city: 'Port Easter',
          code: '84573',
          country: 'Cocos (Keeling) Islands',
          extendedAddress: {
            apartment: undefined,
            floor: undefined,
            locality: undefined,
            stairs: undefined,
            entrycode: undefined,
            building: undefined
          },
          number: undefined,
          street: '426 Runolfsson Knolls',
          region: undefined,
          primary: false,
          type: 'Work',
          label: undefined
        }
      ],
      birthday: '1999-5-1',
      birthplace: 'somewhere',
      gender: 'male',
      company: 'Cozy cloud',
      cozy: [
        {
          type: 'MyCozy',
          label: undefined,
          primary: true,
          url: 'https://johndoe.mycozy.cloud'
        }
      ],
      displayName: 'John J. Doe',
      email: [
        {
          address: 'john.doe@cozycloud.cc',
          primary: true,
          type: undefined,
          label: undefined
        },
        {
          address: 'john.doe@posteo.net',
          primary: false,
          type: 'personal',
          label: undefined
        }
      ],
      impp: [
        {
          uri: 'john@doe.matrix.net',
          protocol: 'matrix',
          label: 'work',
          primary: true
        }
      ],
      fullname: 'John J. Doe',
      indexes: {
        byFamilyNameGivenNameEmailCozyUrl:
          'doejohnjohn.doe@cozycloud.ccjohndoe.mycozy.cloud'
      },
      jobTitle: 'Dreamer',
      metadata: { cozy: true, version: 1 },
      name: {
        familyName: 'Doe',
        givenName: 'John',
        additionalName: 'J.',
        surname: undefined
      },
      note: 'Atque cupiditate saepe omnis quos ut molestiae labore voluptates omnis.',
      phone: [
        {
          number: '+33 (2)0 90 00 54 04',
          primary: true,
          type: undefined,
          label: undefined
        },
        {
          number: '+33 6 77 11 22 33',
          primary: false,
          type: undefined,
          label: undefined
        }
      ],
      relationships: {
        groups: {
          data: []
        },
        related: {
          data: [
            {
              _id: 'relatedContactID',
              _type: 'io.cozy.contacts',
              metadata: {
                relationTypes: ['related']
              }
            }
          ]
        }
      }
    }

    const result = formValuesToContact({
      formValues: johnDoeFormValues,
      oldContact: null,
      t
    })
    expect(result).toEqual(expected)
  })

  it('should convert form values that have been cleared to contact', () => {
    const formValues = {
      address: [
        {
          formattedAddress: undefined,
          primary: true,
          type: undefined,
          label: undefined
        }
      ],
      birthday: undefined,
      birthplace: 'somewhere',
      gender: 'female',
      company: undefined,
      jobTitle: undefined,
      cozy: undefined,
      cozyLabel: undefined,
      email: [
        {
          email: undefined,
          emailLabel: undefined
        }
      ],
      matrix: 'john@doe.matrix.net',
      familyName: 'Doe',
      givenName: 'Jane',
      note: undefined,
      relatedContact: [],
      phone: [
        {
          number: undefined,
          primary: true,
          type: undefined
        }
      ]
    }

    const expected = {
      address: [],
      birthday: '',
      birthplace: 'somewhere',
      gender: 'female',
      company: '',
      cozy: [],
      displayName: 'Jane Doe',
      email: [],
      impp: [
        {
          uri: 'john@doe.matrix.net',
          protocol: 'matrix',
          label: 'work',
          primary: true
        }
      ],
      fullname: 'Jane Doe',
      indexes: { byFamilyNameGivenNameEmailCozyUrl: 'doejane' },
      jobTitle: '',
      metadata: { cozy: true, version: 1 },
      name: { familyName: 'Doe', givenName: 'Jane' },
      note: '',
      phone: [],
      relationships: { groups: { data: [] }, related: { data: [] } }
    }

    const result = formValuesToContact({ formValues, oldContact: null, t })
    expect(result).toEqual(expected)
  })

  it('should not erase metadata.google if it was present in the contact', () => {
    const oldContact = {
      metadata: {
        google: {
          metadata: {
            sources: [
              {
                etag: 'bb0d4f0c-ac79-4519-8873-e0445b378fd7'
              }
            ]
          }
        }
      }
    }

    const expectedMetadata = {
      cozy: true,
      google: {
        metadata: {
          sources: [
            {
              etag: 'bb0d4f0c-ac79-4519-8873-e0445b378fd7'
            }
          ]
        }
      },
      version: 1
    }

    const result = formValuesToContact({
      formValues: johnDoeFormValues,
      oldContact,
      t
    })
    expect(result.metadata).toEqual(expectedMetadata)
  })

  it('should not remove additional data if it was present in the contact', () => {
    const oldContact = {
      name: {
        additionalName: 'J.',
        familyName: 'House',
        givenName: 'Gregory',
        namePrefix: 'Dr.',
        nameSuffix: 'III'
      },
      me: true
    }

    const expected = {
      name: {
        additionalName: 'J.',
        familyName: 'Doe',
        givenName: 'John',
        namePrefix: 'Dr.',
        nameSuffix: 'III'
      },
      me: true
    }

    const result = formValuesToContact({
      formValues: johnDoeFormValues,
      oldContact,
      t
    })

    for (const key of Object.keys(oldContact)) {
      expect(result[key]).toEqual(expected[key])
    }
  })

  it('should not remove attributes not in the doctype if it was present in the contact', () => {
    const oldContact = {
      otherInfoNotInDoctype: {
        information: 'Lorem Ipsum'
      }
    }
    const expected = { information: 'Lorem Ipsum' }

    const result = formValuesToContact({
      formValues: johnDoeFormValues,
      oldContact,
      t
    })
    expect(result.otherInfoNotInDoctype).toEqual(expected)
  })

  it('should erase contact datas for empty fields', () => {
    const formValues = {
      gender: undefined,
      givenName: undefined,
      familyName: undefined,
      company: undefined,
      jobTitle: undefined,
      birthday: undefined,
      birthplace: undefined,
      note: undefined,
      address: [undefined],
      matrix: undefined,
      email: [undefined],
      phone: [undefined],
      cozy: undefined,
      relatedContact: [undefined]
    }

    const expected = updateIndexFullNameAndDisplayName({
      ...johnDoeContact,
      name: { givenName: '', familyName: '' },
      company: '',
      jobTitle: '',
      address: [],
      email: [],
      impp: [
        {
          uri: 'john.doe@xmpp.net',
          protocol: 'xmpp',
          label: 'home',
          primary: false
        },
        {
          uri: 'john.doe@xmpp.net',
          protocol: 'xmpp',
          label: 'work',
          primary: false
        },
        {
          uri: 'john@doe.matrix.home',
          protocol: 'matrix',
          label: 'home'
        }
      ],
      cozy: [],
      phone: [],
      birthday: '',
      birthplace: '',
      gender: '',
      note: '',
      relationships: { groups: { data: [] }, related: { data: [] } }
    })

    const result = formValuesToContact({
      formValues,
      oldContact: johnDoeContact,
      t
    })
    expect(result).toEqual(expected)
  })

  it('should erase contact datas for emptied fields', () => {
    const formValues = {
      gender: '',
      givenName: '',
      familyName: '',
      company: '',
      jobTitle: '',
      birthday: '',
      birthplace: '',
      note: '',
      address: [{}],
      matrix: '',
      email: [{}],
      phone: [{}],
      cozy: '',
      relatedContact: []
    }

    const expected = updateIndexFullNameAndDisplayName({
      ...johnDoeContact,
      name: { givenName: '', familyName: '' },
      company: '',
      jobTitle: '',
      address: [],
      email: [],
      impp: [
        {
          uri: 'john.doe@xmpp.net',
          protocol: 'xmpp',
          label: 'home',
          primary: false
        },
        {
          uri: 'john.doe@xmpp.net',
          protocol: 'xmpp',
          label: 'work',
          primary: false
        },
        {
          uri: 'john@doe.matrix.home',
          protocol: 'matrix',
          label: 'home'
        }
      ],
      cozy: [],
      phone: [],
      birthday: '',
      birthplace: '',
      gender: '',
      note: '',
      relationships: { groups: { data: [] }, related: { data: [] } }
    })

    const result = formValuesToContact({
      formValues,
      oldContact: johnDoeContact,
      t
    })
    expect(result).toEqual(expected)
  })

  it('should not remove contact unformatted address if nothing change', () => {
    const formValues = {
      address: [
        {
          fieldId: 'fieldId_1',
          address: 'Hinton Road, 05034 Fresno, Singapore',
          addressnumber: undefined,
          addressstreet: 'Hinton Road',
          addresscode: '05034',
          addressregion: undefined,
          addresscity: 'Fresno',
          addresscountry: 'Singapore',
          addresslocality: undefined,
          addressbuilding: undefined,
          addressstairs: undefined,
          addressfloor: undefined,
          addressapartment: undefined,
          addressentrycode: undefined,
          addressLabel: '{"type":"Work"}'
        }
      ],
      relatedContact: []
    }

    const oldContact = {
      address: [
        {
          pobox: '94',
          street: 'Hinton Road',
          city: 'Fresno',
          country: 'Singapore',
          postcode: '05034',
          type: 'Work'
        }
      ]
    }

    const expected = {
      address: [
        {
          pobox: '94',
          street: 'Hinton Road',
          city: 'Fresno',
          country: 'Singapore',
          postcode: '05034',
          type: 'Work'
        }
      ]
    }

    const result = formValuesToContact({ formValues, oldContact, t })
    expect(result.address).toEqual(expected.address)
  })

  it('should replace contact unformatted address by formatted one if something change', () => {
    const formValues = {
      address: [{ address: '01 Hinton Road 05034 Fresno, Singapore' }],
      relatedContact: []
    }

    const oldContact = {
      address: [
        {
          pobox: '94',
          street: 'Hinton Road',
          city: 'Fresno',
          country: 'Singapore',
          postcode: '05034',
          type: 'Work'
        }
      ]
    }

    const expected = {
      address: [
        {
          city: undefined,
          code: undefined,
          country: undefined,
          formattedAddress: '01 Hinton Road 05034 Fresno, Singapore',
          number: undefined,
          pobox: '94',
          primary: true,
          street: undefined,
          type: undefined
        }
      ]
    }

    const result = formValuesToContact({ formValues, oldContact, t })
    expect(result.address).toEqual(expected.address)
  })

  it('should replace name, index, fullname and displayName properly to name change', () => {
    const formValues = {
      givenName: 'Jane',
      familyName: 'Doe',
      relatedContact: []
    }

    const oldContact = {
      name: {
        givenName: 'John',
        familyName: 'Doe'
      },
      fullname: 'John Doe',
      displayName: 'John Doe',
      indexes: { byFamilyNameGivenNameEmailCozyUrl: 'doejohn' }
    }

    const expected = {
      name: {
        givenName: 'Jane',
        familyName: 'Doe'
      },
      fullname: 'Jane Doe',
      displayName: 'Jane Doe',
      indexes: { byFamilyNameGivenNameEmailCozyUrl: 'doejane' }
    }

    const result = formValuesToContact({ formValues, oldContact, t })
    expect(result.name).toEqual(expected.name)
    expect(result.fullname).toEqual(expected.fullname)
    expect(result.displayName).toEqual(expected.displayName)
    expect(result.indexes).toEqual(expected.indexes)
  })
})
