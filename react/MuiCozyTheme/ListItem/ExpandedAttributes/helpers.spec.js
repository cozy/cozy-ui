import { formatAttrValue } from './helpers'

const f = () => 'someMockedDate'
const lang = 'en'

describe('formatAttrValue', () => {
  it('should return primary formattedAddress from addresses', () => {
    const res = formatAttrValue({
      attribute: 'address',
      attrValue: [{ formattedAddress: '2 rue des coquelicots', primary: true }],
      f,
      lang
    })

    expect(res).toBe('2 rue des coquelicots')
  })

  it('should return undefined if no primary address', () => {
    const res = formatAttrValue({
      attribute: 'address',
      attrValue: [{ formattedAddress: '2 rue des coquelicots' }],
      f,
      lang
    })

    expect(res).toBe(undefined)
  })

  it('should return primary address from emails', () => {
    const res = formatAttrValue({
      attribute: 'email',
      attrValue: [
        { address: 'primary@cozycloud.cc', primary: true },
        { address: 'secondary@cozycloud.cc', primary: false }
      ],
      f,
      lang
    })

    expect(res).toBe('primary@cozycloud.cc')
  })

  it('should return undefined if no primary email', () => {
    const res = formatAttrValue({
      attribute: 'email',
      attrValue: [{ address: 'secondary@cozycloud.cc' }],
      f,
      lang
    })

    expect(res).toBe(undefined)
  })

  it('should return primary number from phones', () => {
    const res = formatAttrValue({
      attribute: 'phone',
      attrValue: [{ number: '06 15 64 47 63', primary: true }],
      f,
      lang
    })

    expect(res).toBe('06 15 64 47 63')
  })

  it('should return undefined if no primary phone', () => {
    const res = formatAttrValue({
      attribute: 'phone',
      attrValue: [{ number: '06 15 64 47 63', primary: false }],
      f,
      lang
    })

    expect(res).toBe(undefined)
  })

  it('should return a number for a number value', () => {
    const res = formatAttrValue({
      attribute: 'metadata.number',
      attrValue: 12345,
      f,
      lang
    })

    expect(res).toBe(12345)
  })

  it('should return a date for an ISO string formated date', () => {
    const res = formatAttrValue({
      attribute: 'metadata.date',
      attrValue: '2023-03-08T12:48:18.000Z',
      f,
      lang
    })

    expect(res).toBe('someMockedDate')
  })
})
