import {
  formatAttrValue,
  getValueExtended,
  makeAttrKey,
  normalizeExpandedAttribute
} from './helpers'
import { I18nContext } from '../../jestLib/I18n'
import en from '../locales/en'

jest.mock('copy-text-to-clipboard', () => ({ copy: jest.fn() }))

const i18nContext = I18nContext({
  locale: en
})
const tMock = i18nContext.t

const f = () => 'someMockedDate'
const lang = 'en'
const doc = { metadata: { qualification: { label: 'qualifLabel' } } }

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

  it('should return a number for a number value', () => {
    const res = formatAttrValue({
      attribute: 'metadata.number',
      attrValue: '12345',
      f,
      lang
    })

    expect(res).toBe('12345')
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

describe('makeAttrKey', () => {
  it('should return email', () => {
    const res = makeAttrKey(doc, 'email[0].address')

    expect(res).toBe('email')
  })

  it('should return phone', () => {
    const res = makeAttrKey(doc, 'phone[1].number')

    expect(res).toBe('phone')
  })

  it('should return metadata.number.qualifLabel', () => {
    const res = makeAttrKey(doc, 'metadata.number')

    expect(res).toBe('metadata.number.qualifLabel')
  })

  it('should return the attribute', () => {
    const res = makeAttrKey(doc, 'civility')

    expect(res).toBe('civility')
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

describe('getValueExtended', () => {
  it.each`
    attrKey                    | value        | expected
    ${'metadata.other'}        | ${'bar'}     | ${'bar'}
    ${'metadata.noticePeriod'} | ${'1'}       | ${'1 day'}
    ${'metadata.noticePeriod'} | ${'10'}      | ${'10 days'}
    ${'metadata.noticePeriod'} | ${'foo'}     | ${'foo'}
    ${'metadata.noticePeriod'} | ${undefined} | ${undefined}
    ${'metadata.refTaxIncome'} | ${'1'}       | ${'1 €'}
    ${'metadata.refTaxIncome'} | ${'foo'}     | ${'foo'}
    ${'metadata.refTaxIncome'} | ${undefined} | ${undefined}
  `(
    'should return "$expected" if attribute "$attrKey" is "$value"',
    ({ attrKey, value, expected }) => {
      const res = getValueExtended({ attrKey, value, t: tMock })

      expect(res).toBe(expected)
    }
  )
})
