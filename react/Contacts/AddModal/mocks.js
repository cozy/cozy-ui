export const johnDoeContact = {
  id: '9ecfbf4b-20e7-4bac-87f1-eea53350857d',
  _id: '9ecfbf4b-20e7-4bac-87f1-eea53350857d',
  _type: 'io.cozy.contacts',
  _rev: '1-19c313536e8b27473aa26bf105b03269',
  address: [
    {
      formattedAddress: '94 Hinton Road 05034 Fresno, Singapore',
      type: 'Home',
      primary: true
    },
    {
      pobox: '2',
      street: '426 Runolfsson Knolls',
      city: 'Port Easter',
      region: undefined,
      country: 'Cocos (Keeling) Islands',
      postcode: '84573',
      type: 'Work'
    }
  ],
  email: [
    {
      address: 'john.doe@posteo.net',
      type: 'personal',
      primary: false
    },
    {
      address: 'john.doe@cozycloud.cc',
      primary: true
    }
  ],
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
      uri: 'john@doe.matrix.net',
      protocol: 'matrix',
      label: 'work',
      primary: true
    },
    {
      uri: 'john@doe.matrix.home',
      protocol: 'matrix',
      label: 'home'
    }
  ],
  birthday: '1999-5-1',
  birthplace: 'somewhere',
  gender: 'male',
  company: 'Cozy cloud',
  jobTitle: 'Dreamer',
  cozy: [
    {
      type: 'MyCozy',
      primary: true,
      url: 'https://johndoe.mycozy.cloud'
    }
  ],
  fullname: 'John Doe',
  name: {
    givenName: 'John',
    familyName: 'Doe',
    additionalName: 'J.'
  },
  metadata: {
    cozy: true,
    version: 1
  },
  note: 'Atque cupiditate saepe omnis quos ut molestiae labore voluptates omnis.',
  phone: [
    {
      number: '+33 (2)0 90 00 54 04',
      primary: true
    },
    {
      number: '+33 6 77 11 22 33',
      primary: false
    },
    {
      label: 'Mobile', // could be this when importing from other sources i.e. google
      number: '0876467998',
      primary: false,
      type: 'mobile'
    }
  ]
}

export const johnDoeFormValues = {
  birthday: '1999-5-1',
  birthplace: 'somewhere',
  gender: 'male',
  cozy: 'https://johndoe.mycozy.cloud',
  cozyLabel: '{"type":"MyCozy"}',
  matrix: 'john@doe.matrix.net',
  address: [
    {
      fieldId: 'fieldId_1',
      address: '94 Hinton Road 05034 Fresno, Singapore',
      addressLabel: '{"type":"Home"}',
      addressapartment: undefined,
      addressbuilding: undefined,
      addresscity: undefined,
      addresscode: undefined,
      addressregion: undefined,
      addresscountry: undefined,
      addressentrycode: undefined,
      addressfloor: undefined,
      addresslocality: undefined,
      addressnumber: undefined,
      addressstairs: undefined,
      addressstreet: '94 Hinton Road 05034 Fresno, Singapore'
    },
    {
      fieldId: 'fieldId_2',
      address:
        '426 Runolfsson Knolls 84573 Port Easter Cocos (Keeling) Islands',
      addressLabel: '{"type":"Work"}',
      addressapartment: undefined,
      addressbuilding: undefined,
      addresscity: 'Port Easter',
      addressregion: undefined,
      addresscode: '84573',
      addresscountry: 'Cocos (Keeling) Islands',
      addressentrycode: undefined,
      addressfloor: undefined,
      addresslocality: undefined,
      addressnumber: undefined,
      addressstairs: undefined,
      addressstreet: '426 Runolfsson Knolls'
    }
  ],
  email: [
    {
      fieldId: 'fieldId_3',
      email: 'john.doe@cozycloud.cc',
      emailLabel: undefined
    },
    {
      fieldId: 'fieldId_4',
      email: 'john.doe@posteo.net',
      emailLabel: '{"type":"personal"}'
    }
  ],
  phone: [
    {
      fieldId: 'fieldId_5',
      phone: '+33 (2)0 90 00 54 04',
      phoneLabel: undefined
    },
    {
      fieldId: 'fieldId_6',
      phone: '+33 6 77 11 22 33',
      phoneLabel: undefined
    },
    {
      fieldId: 'fieldId_7',
      phone: '0876467998',
      phoneLabel: '{"type":"mobile","label":"Mobile"}'
    }
  ],
  givenName: 'John',
  additionalName: 'J.',
  familyName: 'Doe',
  company: 'Cozy cloud',
  jobTitle: 'Dreamer',
  note: 'Atque cupiditate saepe omnis quos ut molestiae labore voluptates omnis.',
  relatedContact: [
    {
      relatedContactId: 'relatedContactID',
      relatedContactLabel: '{"type":"related"}'
    }
  ]
}

export const johnDoeContactWithRelated = {
  id: '9ecfbf4b-20e7-4bac-87f1-eea53350857d',
  _id: '9ecfbf4b-20e7-4bac-87f1-eea53350857d',
  _type: 'io.cozy.contacts',
  _rev: '1-19c313536e8b27473aa26bf105b03269',
  address: [
    {
      formattedAddress: '94 Hinton Road 05034 Fresno, Singapore',
      type: 'Home',
      primary: true
    },
    {
      pobox: '2',
      street: '426 Runolfsson Knolls',
      city: 'Port Easter',
      region: undefined,
      country: 'Cocos (Keeling) Islands',
      postcode: '84573',
      type: 'Work'
    }
  ],
  impp: [
    {
      uri: 'john.doe@xmpp.net',
      protocol: 'xmpp',
      label: 'home',
      primary: false
    },
    {
      uri: 'john@doe.matrix.net',
      protocol: 'matrix',
      label: 'work',
      primary: true
    }
  ],
  email: [
    {
      address: 'john.doe@posteo.net',
      type: 'personal',
      primary: false
    },
    {
      address: 'john.doe@cozycloud.cc',
      primary: true
    }
  ],
  birthday: '1999-5-1',
  birthplace: 'somewhere',
  gender: 'male',
  company: 'Cozy cloud',
  jobTitle: 'Dreamer',
  cozy: [
    {
      type: 'MyCozy',
      primary: true,
      url: 'https://johndoe.mycozy.cloud'
    }
  ],
  fullname: 'John Doe',
  name: {
    givenName: 'John',
    familyName: 'Doe',
    additionalName: 'J.'
  },
  metadata: {
    cozy: true,
    version: 1
  },
  note: 'Atque cupiditate saepe omnis quos ut molestiae labore voluptates omnis.',
  phone: [
    {
      number: '+33 (2)0 90 00 54 04',
      primary: true
    },
    {
      number: '+33 6 77 11 22 33',
      primary: false
    }
  ],
  relationships: {
    accounts: { data: [] },
    groups: { data: [] },
    related: {
      data: [
        {
          metadata: { relationTypes: ['spouse'] },
          _id: '5b49553c5916cf7b5b2a5f48600078a8',
          _type: 'io.cozy.contacts'
        }
      ]
    }
  },
  related: {
    target: {
      id: '4e33fd27e1d8e55a34742bac6d16d3bd',
      _id: '4e33fd27e1d8e55a34742bac6d16d3bd',
      _type: 'io.cozy.contacts',
      _rev: '6-57f4ab78b1fb97bb90ea273ec881f196',
      company: '',
      fullname: 'John Doe',
      me: true,
      note: ''
    },
    name: 'related',
    doctype: 'io.cozy.contacts',
    data: [
      {
        displayName: 'Alice Doe',
        _id: '5b49553c5916cf7b5b2a5f48600078a8',
        _type: 'io.cozy.contacts'
      }
    ]
  }
}
