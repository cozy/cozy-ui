import { makeFormattedAddressWithSubFields } from './helpers'

describe('makeFormattedAddressWithSubFields', () => {
  it('should return full formatted address', () => {
    const subFieldsStateMock = [
      { name: 'address[0].addressnumber', value: '10' },
      { name: 'address[0].addressstreet', value: 'rue du test' },
      { name: 'address[0].addresscode', value: '75056' },
      { name: 'address[0].addresscity', value: 'Paris' },
      { name: 'address[0].addresscountry', value: 'France' }
    ]
    const res = makeFormattedAddressWithSubFields(
      subFieldsStateMock,
      jest.fn(() => '10 rue du test, 75056 Paris, France')
    )

    expect(res).toBe('10 rue du test, 75056 Paris, France')
  })
  it('should return formatted address if only "code" & "city" values are defined', () => {
    const subFieldsStateMock = [
      { name: 'address[0].addressnumber', value: undefined },
      { name: 'address[0].addressstreet', value: undefined },
      { name: 'address[0].addresscode', value: '75056' },
      { name: 'address[0].addresscity', value: 'Paris' },
      { name: 'address[0].addresscountry', value: undefined }
    ]
    const res = makeFormattedAddressWithSubFields(
      subFieldsStateMock,
      jest.fn(() => ' , 75056 Paris, ')
    )

    expect(res).toBe('75056 Paris')
  })
  it('should return formatted address if "code" & "city" values are undefined', () => {
    const subFieldsStateMock = [
      { name: 'address[0].addressnumber', value: '10' },
      { name: 'address[0].addressstreet', value: 'rue du test' },
      { name: 'address[0].addresscode', value: undefined },
      { name: 'address[0].addresscity', value: undefined },
      { name: 'address[0].addresscountry', value: 'France' }
    ]
    const res = makeFormattedAddressWithSubFields(
      subFieldsStateMock,
      jest.fn(() => '10 rue du test,  , France')
    )

    expect(res).toBe('10 rue du test, France')
  })
  it('should return formatted address if all values are undefined', () => {
    const subFieldsStateMock = [
      { name: 'address[0].addressnumber', value: undefined },
      { name: 'address[0].addressstreet', value: undefined },
      { name: 'address[0].addresscode', value: undefined },
      { name: 'address[0].addresscity', value: undefined },
      { name: 'address[0].addresscountry', value: undefined }
    ]
    const res = makeFormattedAddressWithSubFields(
      subFieldsStateMock,
      jest.fn(() => ' ,  , ')
    )

    expect(res).toBe('')
  })
})
