import {
  makeAttrsValues,
  getAttrValue,
  makeLabel,
  normalizeExpandedAttribute
} from './helpers'

describe('makeAttrsValues', () => {
  it('should return attributes names and values', () => {
    const doc = { metadata: { number: '123', refTaxIncome: '400' } }
    const res = makeAttrsValues(doc, [
      'metadata.number',
      'metadata.refTaxIncome'
    ])

    expect(res).toStrictEqual([
      {
        attrName: 'metadata.number',
        attrValue: '123'
      },
      {
        attrName: 'metadata.refTaxIncome',
        attrValue: '400'
      }
    ])
  })
})

describe('getAttrValue', () => {
  it('should return the email value', () => {
    const res = getAttrValue(
      { email: [{ address: 'xx@yy.zz' }] },
      'email[0].address'
    )

    expect(res).toBe('xx@yy.zz')
  })

  it('should return the primary email value', () => {
    const res = getAttrValue(
      {
        email: [{ address: 'xx@yy.zz' }, { address: 'zz@yy.xx', primary: true }]
      },
      'email'
    )

    expect(res).toBe('zz@yy.xx')
  })

  it('should return the address value', () => {
    const res = getAttrValue(
      { address: [{ formattedAddress: 'baker street' }] },
      'address[0].formattedAddress'
    )

    expect(res).toBe('baker street')
  })

  it('should return the primary address value', () => {
    const res = getAttrValue(
      {
        address: [
          { formattedAddress: 'baker street' },
          { formattedAddress: 'street baker', primary: true }
        ]
      },
      'address'
    )

    expect(res).toBe('street baker')
  })

  it('should return the phone number', () => {
    const res = getAttrValue(
      { phone: ['', { number: '0102030405' }] },
      'phone[1].number'
    )

    expect(res).toBe('0102030405')
  })

  it('should return the primary phone number', () => {
    const res = getAttrValue(
      {
        phone: [
          { number: '0908070605', primary: true },
          { number: '0102030405' }
        ]
      },
      'phone'
    )

    expect(res).toBe('0908070605')
  })

  it('should return metadata number value', () => {
    const res = getAttrValue({ metadata: { number: '123' } }, 'metadata.number')

    expect(res).toBe('123')
  })

  it('should return an ISO string date', () => {
    const res = getAttrValue(
      { metadata: { date: '2023-03-08T12:48:18.000Z' } },
      'metadata.date'
    )

    expect(res).toBe('2023-03-08T12:48:18.000Z')
  })

  it('should return the civility value', () => {
    const res = getAttrValue({ civility: 'female' }, 'civility')

    expect(res).toBe('female')
  })
})

describe('normalizeExpandedAttribute', () => {
  it('sould remove flexsearchProps and translated words', () => {
    const res = normalizeExpandedAttribute(
      'flexsearchProps:translated:qualificationLabel'
    )

    expect(res).toBe('qualificationLabel')
  })

  it('should keep metadata.x intact', () => {
    const res = normalizeExpandedAttribute(
      'flexsearchProps:translated:metadata.contractType'
    )

    expect(res).toBe('metadata.contractType')
  })

  it('should keep email[1] intact', () => {
    const res = normalizeExpandedAttribute('flexsearchProps:email[1].address')

    expect(res).toBe('email[1].address')
  })

  it('should replace : by .', () => {
    const res = normalizeExpandedAttribute('metadata:number')

    expect(res).toBe('metadata.number')
  })

  it('should do nothing for simple word', () => {
    const res = normalizeExpandedAttribute('fullname')

    expect(res).toBe('fullname')
  })
})

describe('makeLabel', () => {
  it('should', () => {
    const res = makeLabel({
      attrName: 'metadata.number',
      qualificationLabel: 'driver_license',
      t: x => x,
      lang: 'fr'
    })

    expect(res).toBe('Numéro du permis')
  })

  it('should', () => {
    const res = makeLabel({
      attrName: 'birthday',
      t: x => x,
      lang: 'fr'
    })

    expect(res).toBe('ListItem.attributes.birthday')
  })
})
