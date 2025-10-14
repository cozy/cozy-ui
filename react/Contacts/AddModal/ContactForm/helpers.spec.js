import get from 'lodash/get'

import {
  moveToHead,
  makeItemLabel,
  makeTypeAndLabel,
  makeImppValues,
  makeCustomLabel,
  makeFields,
  makeInitialCustomValue
} from './helpers'
import { locales } from './locales'

const t = x => get(locales.en, x)

describe('makeCustomLabel', () => {
  it('should return custom type and supported label', () => {
    const resForWork = makeCustomLabel('{"type":"someType","label":"work"}', t)
    expect(resForWork).toBe('someType (pro)')

    const resForHome = makeCustomLabel('{"type":"someType","label":"home"}', t)
    expect(resForHome).toBe('someType (personal)')
  })

  it('should return label if no type', () => {
    const resForWork = makeCustomLabel('{"label":"work"}', t)
    expect(resForWork).toBe('label.work')

    const resForHome = makeCustomLabel('{"label":"home"}', t)
    expect(resForHome).toBe('label.home')
  })

  it('should return only custom type if label is not supported or undefined', () => {
    const resForNotSupported = makeCustomLabel(
      '{"type":"someType","label":"someLabel"}',
      t
    )
    expect(resForNotSupported).toBe('someType')

    const resForUndefined = makeCustomLabel('{"type":"someType"}', t)
    expect(resForUndefined).toBe('someType')
  })
})

describe('moveToHead function', () => {
  it('should move an item to head of the array', () => {
    const items = [1, 5, 657, 42, 3, 27, 88, 3, 4]
    const shouldBeHead = v => v === 42
    const expected = [42, 1, 5, 657, 3, 27, 88, 3, 4]
    const actual = moveToHead(shouldBeHead)(items)
    expect(actual).toEqual(expected)
  })
})

describe('makeItemLabel', () => {
  it('should return undefined if no arg', () => {
    const res = makeItemLabel()

    expect(res).toBe(undefined)
  })

  it('should return undefined if nothing defined', () => {
    const res = makeItemLabel({ type: undefined, label: undefined })

    expect(res).toBe(undefined)
  })

  it('should return correct type and label', () => {
    const res = makeItemLabel({ type: 'cell', label: 'work' })

    expect(res).toBe('{"type":"cell","label":"work"}')
  })

  it('should return only label if no type', () => {
    const res = makeItemLabel({ type: undefined, label: 'work' })

    expect(res).toBe('{"label":"work"}')
  })

  it('should return only type if no label', () => {
    const res = makeItemLabel({ type: 'cell', label: undefined })

    expect(res).toBe('{"type":"cell"}')
  })
})

describe('makeTypeAndLabel', () => {
  it('should return undefined if no arg', () => {
    const res = makeTypeAndLabel()

    expect(res).toStrictEqual({ type: undefined, label: undefined })
  })

  it('should return correct type and label', () => {
    const res = makeTypeAndLabel('{"type":"cell","label":"work"}')

    expect(res).toStrictEqual({ type: 'cell', label: 'work' })
  })

  it('should return only label', () => {
    const res = makeTypeAndLabel('{"label":"work"}')

    expect(res).toStrictEqual({ type: undefined, label: 'work' })
  })

  it('should return only type', () => {
    const res = makeTypeAndLabel('{"type":"cell"}')

    expect(res).toStrictEqual({ type: 'cell', label: undefined })
  })
})

describe('makeImppValues', () => {
  it('should replace only uri for {label: "work", protocol: "matrix"}', () => {
    const res = makeImppValues(
      {
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
        ]
      },
      'newMatrixURI'
    )

    expect(res).toStrictEqual([
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
        uri: 'newMatrixURI',
        protocol: 'matrix',
        label: 'work',
        primary: true
      },
      {
        uri: 'john@doe.matrix.home',
        protocol: 'matrix',
        label: 'home'
      }
    ])
  })

  it('should remove correctly', () => {
    const res = makeImppValues(
      {
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
        ]
      },
      ''
    )

    expect(res).toStrictEqual([
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
    ])
  })

  it('should add the matrix impp values for the first time if no impp attribute', () => {
    const expected = [
      {
        uri: 'newMatrixURI',
        protocol: 'matrix',
        label: 'work',
        primary: true
      }
    ]

    expect(makeImppValues({ impp: undefined }, 'newMatrixURI')).toStrictEqual(
      expected
    )

    expect(makeImppValues({ impp: [] }, 'newMatrixURI')).toStrictEqual(expected)
  })

  it('should not add empty object if value is empty', () => {
    expect(makeImppValues({ impp: undefined }, '')).toStrictEqual([])

    expect(makeImppValues({ impp: [] }, '')).toStrictEqual([])
  })
})

describe('makeInitialCustomValue', () => {
  it('should return undefined if no name', () => {
    const res = makeInitialCustomValue(
      undefined,
      '{"type":"fax","label":"work"}'
    )

    expect(res).toStrictEqual(undefined)
  })

  it('should return undefined if no value', () => {
    const res = makeInitialCustomValue('phone[0].phoneLabel', undefined)

    expect(res).toStrictEqual(undefined)
  })

  it('should return undefined if no name/value', () => {
    const res = makeInitialCustomValue(undefined, undefined)

    expect(res).toStrictEqual(undefined)
  })

  it('should return undefined for gender input', () => {
    const res = makeInitialCustomValue(
      'gender',
      '{"type":"fax","label":"work"}'
    )

    expect(res).toStrictEqual(undefined)
  })

  it('should return the type if no label to ensure backwards compatibility', () => {
    const res = makeInitialCustomValue('someInput', '{"type":"someType"}')

    expect(res).toStrictEqual('{"type":"someType"}')
  })

  it('should return type and label if present', () => {
    const res = makeInitialCustomValue(
      'someInput',
      '{"type":"someType","label":"work"}'
    )

    expect(res).toStrictEqual('{"type":"someType","label":"work"}')
  })

  describe('for phone input', () => {
    const name = 'phone[0].phoneLabel'

    it('should not return a custom label if the value is supported', () => {
      const res = makeInitialCustomValue(name, '{"type":"fax","label":"work"}')

      expect(res).toStrictEqual(undefined)
    })

    it('should return the custom label', () => {
      const res = makeInitialCustomValue(name, '{"type":"someType"}')

      expect(res).toStrictEqual('{"type":"someType"}')
    })

    it('should return the custom label', () => {
      const res = makeInitialCustomValue(name, '{"label":"work"}')

      expect(res).toStrictEqual('{"label":"work"}')
    })

    it('should return the custom value if the type is not supported even if there is a label', () => {
      const res = makeInitialCustomValue(
        name,
        '{"type":"someType","label":"work"}'
      )

      expect(res).toStrictEqual('{"type":"someType","label":"work"}')
    })
  })
})

describe('makeFields', () => {
  it('should return custom fields at custom position', () => {
    const customFields = [
      { name: 'middlename', position: 1 },
      { name: 'birthday', position: 3 }
    ]
    const defaultFields = [{ name: 'firstname' }, { name: 'lastname' }]

    const res = makeFields(customFields, defaultFields)

    expect(res).toStrictEqual([
      { name: 'firstname' },
      { name: 'middlename', position: 1 },
      { name: 'lastname' },
      { name: 'birthday', position: 3 }
    ])
  })

  it('should ignore custom fields without position value', () => {
    const customFields = [
      { name: 'middlename', position: 1 },
      { name: 'field-with-no-position' }
    ]
    const defaultFields = [{ name: 'firstname' }, { name: 'lastname' }]

    const res = makeFields(customFields, defaultFields)

    expect(res).toStrictEqual([
      { name: 'firstname' },
      { name: 'middlename', position: 1 },
      { name: 'lastname' }
    ])
  })

  it('should not mutate the original arrays', () => {
    const customFields = [
      { name: 'middlename', position: 1 },
      { name: 'field-with-no-position' },
      { name: 'birthday', position: 3 }
    ]
    const defaultFields = [{ name: 'firstname' }, { name: 'lastname' }]

    makeFields(customFields, defaultFields)

    expect(defaultFields).toStrictEqual([
      { name: 'firstname' },
      { name: 'lastname' }
    ])

    expect(customFields).toStrictEqual([
      { name: 'middlename', position: 1 },
      { name: 'field-with-no-position' },
      { name: 'birthday', position: 3 }
    ])
  })

  it('should handle undefined custom fields', () => {
    const defaultFields = [{ name: 'firstname' }, { name: 'lastname' }]

    const res = makeFields(undefined, defaultFields)

    expect(res).toStrictEqual(defaultFields)
  })
})
