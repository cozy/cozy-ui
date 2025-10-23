import { isRef, unRef } from './ref'

describe('isRef', () => {
  it('should return false when element is null', () => {
    expect(isRef(null)).toBe(false)
  })
  it('should return false when element is an object without current', () => {
    expect(isRef({ something: true })).toBe(false)
  })
  it('should return true when element is an object with current', () => {
    expect(isRef({ current: 'test' })).toBe(true)
  })
})

describe('unRef', () => {
  it('should return the current property when it is a ref', () => {
    const ref = { current: 'test' }
    expect(unRef(ref)).toBe('test')
  })
  it('should return the element when it is only a string', () => {
    const string = 'test'
    expect(unRef(string)).toBe(string)
  })
  it('should return the element when it is only a object', () => {
    const obj = { something: true }
    expect(unRef(obj)).toBe(obj)
  })
})
