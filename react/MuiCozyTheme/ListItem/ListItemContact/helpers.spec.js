import { hr, emailTo, smsTo, call } from '../../../ActionMenu/Actions'

import { makeOptionalActions } from './helpers'

describe('makeOptionalActions', () => {
  it('should return hr, call, smsTo, emailTo', () => {
    const res = makeOptionalActions({
      email: [{ address: 'mail@cozy.com' }],
      phone: [{ number: '123456' }]
    })

    expect(res).toStrictEqual([hr, call, smsTo, emailTo])
  })

  it('should return hr, emailTo', () => {
    const res = makeOptionalActions({
      email: [{ address: 'mail@cozy.com' }]
    })

    expect(res).toStrictEqual([hr, emailTo])
  })

  it('should return hr, call, smsTo', () => {
    const res = makeOptionalActions({
      phone: [{ number: '123456' }]
    })

    expect(res).toStrictEqual([hr, call, smsTo])
  })

  it('should empty array', () => {
    const res = makeOptionalActions({})

    expect(res).toStrictEqual([])
  })
})
