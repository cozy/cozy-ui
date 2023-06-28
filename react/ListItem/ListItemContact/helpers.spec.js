import { divider, emailTo, smsTo, call } from '../../ActionsMenu/Actions'

import { makeOptionalActions } from './helpers'

describe('makeOptionalActions', () => {
  it('should return divider, call, smsTo, emailTo', () => {
    const res = makeOptionalActions({
      email: [{ address: 'mail@cozy.com' }],
      phone: [{ number: '123456' }]
    })

    expect(res).toStrictEqual([divider, call, smsTo, emailTo])
  })

  it('should return divider, emailTo', () => {
    const res = makeOptionalActions({
      email: [{ address: 'mail@cozy.com' }]
    })

    expect(res).toStrictEqual([divider, emailTo])
  })

  it('should return divider, call, smsTo', () => {
    const res = makeOptionalActions({
      phone: [{ number: '123456' }]
    })

    expect(res).toStrictEqual([divider, call, smsTo])
  })

  it('should empty array', () => {
    const res = makeOptionalActions({})

    expect(res).toStrictEqual([])
  })
})
